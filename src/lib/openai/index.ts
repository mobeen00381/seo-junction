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
          ] : [])
        ] as OpenAI.Chat.Completions.ChatCompletionContentPart[] }
      ],
      max_tokens: 150,
    });

    return response.choices[0]?.message?.content?.trim() || "Quality local service in progress! Check back soon for the full update.";
  } catch (error) {
    console.error('OpenAI Error:', error);
    return "Expert service provided by our team. Fast, reliable, and family-owned. Contact us for a free estimate!";
  }
}

export async function generateReviewResponse(params: {
  businessName: string;
  reviewerName: string;
  reviewText: string;
  starRating: number;
}) {
  const { businessName, reviewerName, reviewText, starRating } = params;

  const systemPrompt = `You are a Reputation Management Expert for "${businessName}". 
Your goal is to write a professional, appreciative, and SEO-friendly response to a customer review.
Guidelines:
1. Be polite and professional.
2. Thank the customer by name ("${reviewerName}") if provided.
3. If the review is positive (4-5 stars), express genuine gratitude and mention how much you value their support.
4. If the review is negative (1-3 stars), be empathetic, professional, and offer to resolve the issue privately (e.g., "Please contact us at our office number so we can make this right").
5. Keep it concise (2-4 sentences).`;

  const userPrompt = `Generate a response to this ${starRating}-star review: "${reviewText}"`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content?.trim() || "Thank you for your feedback! We appreciate your business.";
  } catch (error) {
    console.error('OpenAI Review Response Error:', error);
    return `Thank you ${reviewerName} for choosing ${businessName}. We appreciate your support!`;
  }
}
