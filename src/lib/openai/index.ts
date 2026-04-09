import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAIDraft(params: {
  businessName: string;
  city: string;
  trade: string;
  contentType: 'image' | 'voice' | 'text';
  inputData: string; // Transcript for voice, or image URL for image
}) {
  const { businessName, city, trade, contentType, inputData } = params;

  const systemPrompt = `You are an expert Local SEO Content Strategist. 
Your goal is to write a high-conversion Google Business Profile post for a "${trade}" business named "${businessName}" located in "${city}". 
The post should be professional, trustworthy, and include local keywords. 
Keep the text between 150-300 characters. 
Use a friendly but professional tone. 
Include a subtle call to action.`;

  let userPrompt = '';
  if (contentType === 'voice' || contentType === 'text') {
    userPrompt = `Generate a GMB post based on this update description: "${inputData}". 
    Focus on the service provided and the location mentioned. 
    Do not use generic hashtags, keep it natural.`;
  } else if (contentType === 'image') {
    userPrompt = `Generate a GMB post for this photo. 
    The photo shows a recent job done by "${businessName}". 
    Analyze the image (if URL provided) or the context: "${inputData}".`;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: [
          { type: "text", text: userPrompt },
          ...(contentType === 'image' && inputData.startsWith('http') ? [
            { type: "image_url", image_url: { url: inputData } }
          ] as any : [])
        ]}
      ],
      max_tokens: 150,
    });

    return response.choices[0]?.message?.content?.trim() || "Quality local service in progress! Check back soon for the full update.";
  } catch (error) {
    console.error('OpenAI Error:', error);
    return "Expert service provided by our team. Fast, reliable, and family-owned. Contact us for a free estimate!";
  }
}
