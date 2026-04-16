import { convertToModelMessages, streamText, UIMessage } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: "anthropic/claude-sonnet-4.6",
    system: `You are a helpful assistant for DevPulse, an API monitoring and observability platform for developer teams.
Answer questions about DevPulse's features, pricing, and how it works. Keep answers concise and friendly.
Key facts:
- Free plan: $0/mo, 1 project, 100k requests/month
- Pro plan: $29/mo, 20 projects, 10M requests/month
- Enterprise: custom pricing
- Features: real-time monitoring, smart alerting, performance analytics, webhook inspector, uptime checks, team collaboration
- Setup takes under 5 minutes via SDK or API gateway integration
- Supports Node.js, Python, Go, and Ruby SDKs`,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
