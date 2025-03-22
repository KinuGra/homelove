import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// geminiResponseが呼び出された回数
let resCount = 0;

export async function geminiResponse(prompt) {
    try {
        console.log("gemini api : " + resCount++);
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error fetching from Google Generative AI:", error);
        return "エラーが発生しました。後でもう一度試してください。";
    }
}