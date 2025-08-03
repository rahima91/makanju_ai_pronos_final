
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(bodyParser.json());
app.use(express.static("."));

app.post("/predict", async (req, res) => {
  const { prompt } = req.body;
  try {
    const chat = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });
    res.json({ result: chat.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ result: "Erreur : " + error.message });
  }
});

app.listen(port, () => {
  console.log("FootGenius AI démarre sur http://localhost:" + port);
});
