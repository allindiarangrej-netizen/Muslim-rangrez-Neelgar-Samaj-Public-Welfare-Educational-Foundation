import { historyContent } from "./src/data/communityHistory.js";
import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

interface TranslatedChapter {
  title: string;
  subtitle: string;
  content: string;
}

interface DualTranslationResponse {
  hi: TranslatedChapter;
  ur: TranslatedChapter;
}

async function translateChapter(title: string, subtitle: string, content: string): Promise<DualTranslationResponse> {
  const prompt = `You are an expert academic translator specializing in Indian history, sociology, and culture.
Translate the following English chapter details into both formal, elegant Hindi and formal, elegant Urdu.

Guidelines:
1. Translate all terms accurately. For historic place names, dates (e.g. 1999, 2025, BCE, CE), and names of people (e.g., Lecturer Imtiyaz Khan, Er. Muhammad Afzal Sir, Haji Anwar Khan, Master Fakhruddin Khan, Irfan Khan, Government Teacher, Care Point Classes, Rafiq Ahmad, Shakeel Khan, Joura, Sujarma, Kailaras, Morena), use standard transliteration so that their pronunciation is perfectly preserved in both Hindi and Urdu.
2. For Urdu, ensure the text uses correct grammatical patterns and classic scholarly vocabulary.
3. DO NOT summarize, compress, or omit any paragraph or sentence. The length, structure, and details of the translated texts must match the original exactly.
4. Preserve all list elements, bullet points, and headers.
5. In the generated "content" strings, preserve all paragraph breaks using double newlines ('\\n\\n').
6. Return your output strictly as a JSON object matching the requested schema. Do NOT wrap it in markdown code blocks or add any other text.

JSON Schema:
{
  "hi": {
    "title": "Translated title in Hindi (string)",
    "subtitle": "Translated subtitle in Hindi (string)",
    "content": "Translated full content in Hindi with '\\n\\n' between paragraphs (string)"
  },
  "ur": {
    "title": "Translated title in Urdu (string)",
    "subtitle": "Translated subtitle in Urdu (string)",
    "content": "Translated full content in Urdu with '\\n\\n' between paragraphs (string)"
  }
}

Source Text to Translate:
- Title: ${title}
- Subtitle: ${subtitle}
- Content:
${content}`;

  let retries = 10;
  while (retries > 0) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });
      const text = response.text?.trim();
      if (text) {
        // Parse the JSON to ensure it matches
        const parsed = JSON.parse(text) as DualTranslationResponse;
        if (parsed.hi && parsed.hi.title && parsed.ur && parsed.ur.title) {
          return parsed;
        }
      }
    } catch (error: any) {
      console.error(`Error translating chapter:`, error?.message || error);
      retries--;
      if (retries === 0) throw error;
      const waitMs = error?.status === 429 ? 65000 : 30000;
      console.log(`Waiting ${waitMs / 1000} seconds before retrying...`);
      await new Promise(resolve => setTimeout(resolve, waitMs));
    }
  }
  throw new Error("Translation failed");
}

async function run() {
  console.log("Starting optimized trilingual community history translation...");
  const newHistoryContent: any[] = [];

  // Check if a previous partial progress file exists
  let startIndex = 0;
  if (fs.existsSync("./src/data/communityHistory.ts.temp")) {
    try {
      const tempContent = fs.readFileSync("./src/data/communityHistory.ts.temp", "utf8");
      // Extract the JSON portion
      const jsonStart = tempContent.indexOf("[");
      if (jsonStart !== -1) {
        const jsonStr = tempContent.substring(jsonStart, tempContent.lastIndexOf("]") + 1);
        const parsedTemp = JSON.parse(jsonStr);
        if (Array.isArray(parsedTemp) && parsedTemp.length > 0) {
          console.log(`Found existing partial progress with ${parsedTemp.length} chapters.`);
          newHistoryContent.push(...parsedTemp);
          startIndex = parsedTemp.length;
        }
      }
    } catch (e) {
      console.log("Could not parse partial progress temp file. Starting from scratch.", e);
    }
  }

  for (let idx = startIndex; idx < historyContent.length; idx++) {
    const ch = historyContent[idx];
    console.log(`Processing Chapter ${idx + 1}/${historyContent.length}: ${ch.chapter}`);

    if (typeof ch.title === "object" && typeof ch.subtitle === "object" && typeof ch.content === "object") {
      console.log(`  Chapter ${ch.chapter} is already fully localized. Skipping translation.`);
      newHistoryContent.push(ch);
      continue;
    }

    const englishTitle = typeof ch.title === "string" ? ch.title : ch.title.en;
    const englishSubtitle = typeof ch.subtitle === "string" ? ch.subtitle : ch.subtitle.en;
    const englishContent = typeof ch.content === "string" ? ch.content : ch.content.en;

    console.log(`  Sending single API call to translate to both Hindi & Urdu...`);
    const translationResult = await translateChapter(englishTitle, englishSubtitle, englishContent);

    const translatedChapter = {
      chapter: ch.chapter,
      title: {
        en: englishTitle,
        hi: translationResult.hi.title,
        ur: translationResult.ur.title,
      },
      subtitle: {
        en: englishSubtitle,
        hi: translationResult.hi.subtitle,
        ur: translationResult.ur.subtitle,
      },
      content: {
        en: englishContent,
        hi: translationResult.hi.content,
        ur: translationResult.ur.content,
      }
    };

    newHistoryContent.push(translatedChapter);
    console.log(`Successfully completed Chapter: ${ch.chapter}`);

    // Save temporary progress as a valid TS file
    const tempFileContent = `export const historyContent = ${JSON.stringify(newHistoryContent, null, 2)};\n`;
    fs.writeFileSync("./src/data/communityHistory.ts.temp", tempFileContent);

    // Apply a generous delay between chapters to stay well under the 5 RPM rate limit
    if (idx < historyContent.length - 1) {
      console.log("Sleeping 20 seconds to respect rate limits...");
      await new Promise(resolve => setTimeout(resolve, 20000));
    }
  }

  console.log("All chapters processed successfully! Overwriting communityHistory.ts...");
  const finalFileContent = `export const historyContent = ${JSON.stringify(newHistoryContent, null, 2)};\n`;
  fs.writeFileSync("./src/data/communityHistory.ts", finalFileContent);
  
  // Clean up temp file
  if (fs.existsSync("./src/data/communityHistory.ts.temp")) {
    fs.unlinkSync("./src/data/communityHistory.ts.temp");
  }
  console.log("Done!");
}

run().catch(err => {
  console.error("Critical error running translation script:", err);
});
