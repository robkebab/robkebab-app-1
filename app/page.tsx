import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaqSection } from "@/components/faq-section";
import {
  Activity,
  AlertCircle,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  Code2,
  GitBranch,
  Globe,
  Menu,
  Shield,
  Users,
  Webhook,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Track every request, response time, and status code as it happens. No lag, no sampling — full fidelity observability.",
  },
  {
    icon: AlertCircle,
    title: "Smart Alerting",
    description:
      "Set thresholds on latency, error rate, or status codes. Get notified via Slack, PagerDuty, or webhooks before users notice.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "P50, P95, P99 latency breakdowns. Identify slow endpoints, track trends, and benchmark improvements over time.",
  },
  {
    icon: Webhook,
    title: "Webhook Inspector",
    description:
      "Capture, replay, and debug incoming webhooks. Share payload snapshots with your team. No more guesswork.",
  },
  {
    icon: Shield,
    title: "Uptime Checks",
    description:
      "Global uptime monitoring from 20+ regions. Instant alerts when your API goes down with first-byte timing.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Shared dashboards, alert routing, and role-based access. Keep your whole team on the same page.",
  },
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "<50ms", label: "Monitoring latency" },
  { value: "12,000+", label: "Developer teams" },
  { value: "4B+", label: "Requests tracked daily" },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For side projects and personal APIs.",
    cta: "Start for free",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "1 project",
      "100k requests / month",
      "3-day data retention",
      "Email alerts",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For growing teams who ship fast.",
    cta: "Start free trial",
    ctaVariant: "default" as const,
    highlighted: true,
    features: [
      "20 projects",
      "10M requests / month",
      "90-day data retention",
      "Slack & PagerDuty alerts",
      "Webhook inspector",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large teams with advanced needs.",
    cta: "Talk to sales",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "Unlimited projects",
      "Unlimited requests",
      "Unlimited data retention",
      "SSO / SAML",
      "SLA guarantee",
      "Dedicated support",
    ],
  },
];

const testimonials = [
  {
    quote:
      "DevPulse caught a latency regression in our payments API before our on-call engineer even woke up. It paid for itself on day one.",
    name: "Sarah Chen",
    role: "Staff Engineer",
    company: "Stripe Alumni",
    avatar: "SC",
  },
  {
    quote:
      "We replaced three separate tools with DevPulse. The webhook inspector alone saves us hours every sprint.",
    name: "Marcus Diaz",
    role: "Head of Platform",
    company: "Acme Corp",
    avatar: "MD",
  },
  {
    quote:
      "The P99 breakdown finally gave us the data to convince product to fix our slowest endpoints. Can't imagine going back.",
    name: "Priya Nair",
    role: "Backend Lead",
    company: "Buildco",
    avatar: "PN",
  },
];

const steps = [
  {
    step: "01",
    title: "Add one line of code",
    description:
      "Install our SDK or paste a single endpoint into your API gateway config. Zero config required.",
    code: `npm install @devpulse/sdk`,
  },
  {
    step: "02",
    title: "Data flows instantly",
    description:
      "Your requests, errors, and latency metrics appear in your dashboard within seconds.",
    code: `devpulse.init({ apiKey: process.env.DEVPULSE_KEY })`,
  },
  {
    step: "03",
    title: "Set alerts and ship",
    description:
      "Configure thresholds, invite your team, and get back to building. We handle the rest.",
    code: `devpulse.alert({ p99: 200, errorRate: 0.01 })`,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 font-semibold text-lg">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <Activity className="h-4 w-4 text-primary-foreground" />
              </div>
              DevPulse
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
              <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Sign in
            </Button>
            <Button size="sm">
              Get started free
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 gap-1.5">
              <Zap className="h-3 w-3" />
              Now with AI-powered anomaly detection
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Monitor your APIs{" "}
              <span className="text-primary">with confidence</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              DevPulse gives developer teams real-time visibility into every API request, error, and latency spike —
              so you catch problems before your users do.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8">
                Start for free
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 gap-2">
                <Code2 className="h-4 w-4" />
                View docs
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required · Free plan forever · 5-minute setup
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="mx-auto mt-16 max-w-5xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">devpulse.io/dashboard</span>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Requests / min", value: "4,231", trend: "+12%", up: true },
                { label: "Avg latency", value: "48ms", trend: "-8ms", up: true },
                { label: "Error rate", value: "0.02%", trend: "-0.01%", up: true },
                { label: "Uptime", value: "99.99%", trend: "30 days", up: true },
              ].map((metric) => (
                <div key={metric.label} className="rounded-lg bg-muted/50 p-4">
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                  <p className="mt-1 text-2xl font-semibold tabular-nums">{metric.value}</p>
                  <p className="mt-1 text-xs text-green-600 dark:text-green-400">{metric.trend}</p>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Recent requests</span>
                  <Badge variant="secondary" className="text-xs">Live</Badge>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  {[
                    { method: "GET", path: "/api/users/me", status: 200, ms: "32ms" },
                    { method: "POST", path: "/api/payments/charge", status: 200, ms: "187ms" },
                    { method: "GET", path: "/api/products?page=2", status: 200, ms: "44ms" },
                    { method: "DELETE", path: "/api/sessions/abc123", status: 204, ms: "18ms" },
                  ].map((req, i) => (
                    <div key={i} className="flex items-center gap-3 text-muted-foreground">
                      <span className={`w-12 text-center rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                        req.method === "GET" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                        req.method === "POST" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>{req.method}</span>
                      <span className="flex-1 truncate">{req.path}</span>
                      <span className="text-green-600 dark:text-green-400">{req.status}</span>
                      <span className="w-12 text-right">{req.ms}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-b border-border/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Linear", "Raycast", "Cal.com", "Resend", "Trigger.dev", "Planetscale"].map((company) => (
              <span key={company} className="text-lg font-semibold text-muted-foreground/50 tracking-tight">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything your team needs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Replace a pile of disconnected tools with one platform built specifically for API observability.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 border-b border-border/50 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">How it works</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Up and running in minutes
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-muted-foreground/20 leading-none mt-1">
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className="rounded-lg border border-border bg-card p-3 font-mono text-xs text-muted-foreground">
                      {step.code}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold tracking-tight text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free. Upgrade when you need to.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${plan.highlighted ? "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary" : ""}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3">Most popular</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <h3 className="font-semibold text-lg">{plan.name}</h3>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground mb-1">/{plan.period.split(" ")[1] || "mo"}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-6">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.ctaVariant} className="w-full">
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-border/50 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by developers
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="flex flex-col">
                <CardContent className="flex flex-col flex-1 pt-6">
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-b border-border/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Common questions
            </h2>
          </div>
          <FaqSection />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-b border-border/50">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
              <Activity className="h-7 w-7 text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start monitoring in minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join 12,000+ developer teams who ship with confidence. No credit card required.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-10">
              Get started for free
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 gap-2">
              <Globe className="h-4 w-4" />
              Request a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 sm:col-span-4 lg:col-span-2">
              <a href="#" className="flex items-center gap-2 font-semibold">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                  <Activity className="h-4 w-4 text-primary-foreground" />
                </div>
                DevPulse
              </a>
              <p className="mt-3 text-sm text-muted-foreground max-w-xs">
                The API observability platform built for modern developer teams.
              </p>
            </div>
            {[
              {
                heading: "Product",
                links: ["Features", "Pricing", "Changelog", "Roadmap"],
              },
              {
                heading: "Developers",
                links: ["Documentation", "API Reference", "SDKs", "Status"],
              },
              {
                heading: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <h4 className="text-sm font-semibold mb-3">{col.heading}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} DevPulse, Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
