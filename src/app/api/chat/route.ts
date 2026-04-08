import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `
You are the Neerzy Growth Assistant, a helpful AI guide for local service business owners (plumbers, electricians, cleaners, etc.) who are NOT tech-savvy.

Your goal is to explain how Neerzy helps them get more customers from Google without them needing to do any complex work themselves.

Key Knowledge:
- SERVICE: We build an SEO-optimized website, manage Google Business Profiles, and post fresh content automatically.
- WORKFLOW: The user sends a photo or voice note of their work from their phone. We turn it into a high-ranking Google post.
- PRICING: Basic ($19/mo), Pro ($39/mo), Agency ($79/mo). All have a 30-day free trial.
- DOMAIN: We handle the domain registration for a one-time £19/$19 fee. The domain is registered in your name and is yours forever.
- SPEED: Most business see ranking improvements in 30-45 days.
- PHILOSOPHY: Tech shouldn't get in the way of hard work. We handle the tech; you handle the jobs. 
- ACCESSIBILITY: No laptop or computer required. Everything can be done from a mobile phone.

Guidelines:
1. Use simple, non-tech language. Avoid "SEO", "Backlinks", "Algorithms" where possible. Use "Finding you on Google", "Getting more calls", "Ranking at the top".
2. Be empathetic. These people are busy pros working in the field.
3. Keep responses concise (under 3 sentences).
4. Always encourage them to start a 30-day free trial if they seem interested.
`

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json()

    // ── FALLBACK ENGINE (Smart Mock) ──
    // If no API key is provided, we use a simple rule-based response for a smooth demo.
    if (!process.env.OPENAI_API_KEY && !process.env.GEMINI_API_KEY) {
      return NextResponse.json({ reply: getMockReply(message) })
    }

    // ── REAL LLM (Example with OpenAI) ──
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...history.map((m: any) => ({ role: m.role, content: m.content })),
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    })

    const data = await response.json()
    return NextResponse.json({ reply: data.choices[0].message.content })

  } catch (error) {
    console.error('Chat Error:', error)
    return NextResponse.json({ reply: "I'm having a little trouble thinking right now. But I can tell you this: Neerzy is built to get you more calls with zero effort. Why not start a trial?" })
  }
}

function getMockReply(msg: string): string {
  const m = msg.toLowerCase()
  if (m.includes('cost') || m.includes('price')) return "Our plans start at just $19/month, and we even offer a 30-day free trial so you can see the results first. No contracts, cancel anytime!"
  if (m.includes('how') || m.includes('work')) return "It's simple: you send us a photo or voice note of your work from your phone, and we automatically update your website and Google profile. You don't need any tech skills at all."
  if (m.includes('tech') || m.includes('skilled')) return "No tech skills needed! If you can send a text or take a photo, you can use Neerzy. We handle all the 'internet stuff' for you."
  if (m.includes('call') || m.includes('customer')) return "We make sure your business shows up at the top when neighbors search for your services. More visibility means more calls and more jobs for you."
  if (m.includes('laptop') || m.includes('phone') || m.includes('computer')) return "No laptop needed! You can manage everything right from your phone. If you can send a text or take a photo, you're all set."
  if (m.includes('domain') || m.includes('website')) return "We build you a professional website and secure your domain for a one-time £19/$19 fee. It's registered in your name — yours forever, even if you leave Neerzy!"
  
  return "That's a great question! Basically, we make sure local neighbors find you first when they need a pro. Most our members see more calls within their first month. Interested in a 30-day trial?"
}
