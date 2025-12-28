
import { GoogleGenAI } from "@google/genai";

export const transcribeAudio = async (audioData: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "audio/wav",
              data: audioData,
            },
          },
          {
            text: "Transcribe the following audio recording accurately. The recording is an observation report for a railway infrastructure project. If the language is not English, translate it to English. Return only the transcript text.",
          },
        ],
      },
    });

    return response.text || "No transcription available.";
  } catch (error) {
    console.error("Transcription error:", error);
    return "Transcription failed. Please try again or type manually.";
  }
};

export const generateDeploymentSummary = async (reports: any[]): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const reportSummary = reports.map(r => `Location: ${r.location}, Observations: ${r.observations}`).join('\n---\n');
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a concise, professional technical commit message for a GitHub repository based on these field reports. 
      Format it as:
      feat(ops): [Short Summary]
      
      - [Key Point 1]
      - [Key Point 2]
      
      Reports:
      ${reportSummary}`,
    });

    return response.text || "feat(ops): batch update from sovereign hub";
  } catch (error) {
    console.error("Deployment summary error:", error);
    return "feat(ops): standard infrastructure batch update";
  }
};

export const askAI = async (message: string, history: any[]): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "You are the Sovereign Hub AI, a technical assistant for Africa Railways field operators. Provide concise, expert advice on rail maintenance, reporting protocols, and infrastructure standards. Be professional and encouraging.",
      }
    });
    
    // We simulate history by sending the message directly for brevity in this context
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Chat error:", error);
    return "Operational error. Check uplink connection.";
  }
};
