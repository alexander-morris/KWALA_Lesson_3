import { GoogleGenerativeAI } from '@google/generative-ai';

async function generateComment(context, apiKey) {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = 'models/gemini-1.5-pro'; // Or another suitable model
  
      // Construct the prompt with context
      const prompt = {
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `Based on this context, generate a concise and insightful comment suitable for posting on Bluesky:\n\n${JSON.stringify(
                  context
                )}`,
              },
            ],
          },
        ],
      };
  
      // Generate the comment
      const result = await genAI.generateContent(prompt, { model });
      const comment = result.response.text();
  
      return comment;
    } catch (error) {
      console.error('Error generating Bluesky comment:', error);
      return null; // Or handle the error as needed
    }
}


module.exports = {
    generateComment
};