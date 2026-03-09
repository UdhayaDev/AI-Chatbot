const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/chat", async (req, res) => {
    const message = req.body.message;

    try {
        // Send only the user message to LLM
        const response = await groq.chat.completions.create({
            model: "meta-llama/llama-4-maverick-17b-128e-instruct",
            messages: [
                {
                    role: "system",
                    content: "You are a professional AI assistant. Always reply clearly, formally, and in plain text without LaTeX or markdown."
                },
                {
                    role: "user",
                    content: message
                }
            ]
        });

        const reply = response.choices[0].message.content;
        res.json({ reply });

    } catch (error) {
        console.error("AI request failed:", error);
        res.status(500).json({ reply: "AI request failed." });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));