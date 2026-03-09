# AI LLM Chatbot

A **real-time AI chatbot** powered by **LLaMA 4 (via Groq SDK)**.  
The chatbot responds to any question autonomously, providing **formal, professional, and clear answers** in plain text.  

This project demonstrates a fully **autonomous LLM-based chatbot** with a polished UI, scrollable chat history, and responsive design.

---

## **Features**

- Fully autonomous AI chatbot (no predefined questions)  
- Professional, formal responses  
- Plain text output (no LaTeX, markdown, or extra symbols)  
- Scrollable chat interface with fixed heading and bottom input bar  
- Responsive and clean UI  
- Easy setup using Node.js and Express  

---

## **Project Structure**

- **AI-Chatbot** (root folder)  
  - **server/** – Backend server  
    - `server.js` – Node.js + Express server handling AI requests  
  - **client/** – Frontend files  
    - `index.html` – Main HTML file for chat UI  
    - `style.css` – Styling for chat interface  
    - `script.js` – JS for sending/receiving chat messages  
  - `.env` – Environment variables (Groq API key, do not commit)  
  - `package.json` – Project dependencies and scripts  

---

## **Prerequisites**

- Node.js (v18 or above recommended)  
- NPM  
- Groq API Key for LLaMA 4  

---

## **Setup Instructions**

1. **Clone the repository**

```bash
git clone https://github.com/UdhayaDev/AI-Chatbot.git
cd AI-Chatbot
