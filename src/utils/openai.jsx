import { GEMINI_AI_KEY } from "./Constants";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;

