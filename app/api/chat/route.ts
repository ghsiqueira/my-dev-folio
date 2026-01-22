import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioData } from "@/lib/data";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, lang } = await req.json(); 
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key not found" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const languageInstruction = lang === 'en' 
      ? "\n\nIMPORTANT: The user is currently viewing the portfolio in ENGLISH. You MUST answer strictly in ENGLISH, translating the context if necessary."
      : "\n\nIMPORTANTE: O usuário está vendo o portfólio em PORTUGUÊS. Responda em Português.";

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: portfolioData + languageInstruction }],
        },
        {
          role: "model",
          parts: [{ text: lang === 'en' ? "Understood. I will answer in English." : "Entendido. Responderei em Português." }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error: any) {
    console.error("Erro no Gemini:", error.message);
    return NextResponse.json({ error: "Erro ao processar IA." }, { status: 500 });
  }
}