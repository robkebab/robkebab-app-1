import type { Metadata } from "next";
import "./globals.css";
import { ChatWidget } from "@/components/chat-widget";

export const metadata: Metadata = {
  title: "DevPulse — API Monitoring for Developer Teams",
  description:
    "Monitor, debug, and optimize your APIs in real-time. The observability platform built for modern developer teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
