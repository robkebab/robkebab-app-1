"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does DevPulse collect data from my API?",
    answer:
      "You can integrate DevPulse via our lightweight SDK (Node.js, Python, Go, Ruby), a proxy endpoint, or our native integrations with popular API gateways like Kong, AWS API Gateway, and Cloudflare. Most teams are up and running in under 5 minutes.",
  },
  {
    question: "Does DevPulse add latency to my requests?",
    answer:
      "No. Our SDK uses async, non-blocking instrumentation. Telemetry is batched and sent out-of-band so it has zero impact on your request/response cycle. Our benchmarks consistently show <1ms overhead.",
  },
  {
    question: "How long is data retained?",
    answer:
      "Free plans retain 3 days of data. Pro plans retain 90 days. Enterprise plans can configure unlimited retention, including export to your own S3 bucket or data warehouse.",
  },
  {
    question: "Can I self-host DevPulse?",
    answer:
      "Yes — Enterprise plans include a self-hosted option with Docker Compose and Helm charts. Contact our sales team for details.",
  },
  {
    question: "What happens if I exceed my plan's request limit?",
    answer:
      "We'll notify you when you reach 80% and 100% of your monthly limit. On Free plans, additional requests are sampled. On Pro plans, you're billed at a small overage rate rather than having data dropped.",
  },
  {
    question: "Do you offer a discount for open-source projects?",
    answer:
      "Yes! Maintainers of public open-source projects can apply for a free Pro plan. Reach out to us at oss@devpulse.io with a link to your repository.",
  },
];

export function FaqSection() {
  return (
    <Accordion className="w-full space-y-2">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          value={i}
          className="rounded-lg border border-border px-5"
        >
          <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
