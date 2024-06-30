import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyBLR_MjW87xh5hpZc22qHBj7ikO97ZSufk');
const base_prompt = "You are an AI assistant that is an expert in medical health and is part of a hospital system called medicare AI You know about symptoms and signs of various types of illnesses. You can provide expert advice on self - diagnosis options in the case where an illness can be treated using a home remedy. If a query requires serious medical attention with a doctor, recommend them to book an appointment with our doctors If you are asked a question that is not related to medical health respond with 'Im sorry but your question is beyond my functionalities'. Do not use external URLs or blogs to refer Format any lists on individual lines with a dash and a space in front of each line."

export default async function run(prompt) {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const prompt = "Write a story about a magic backpack."

    const result = await model.generateContent(base_prompt + prompt);
    const response = result.response;
    const text = response.text();
    return text
}

// run('feeling headache');