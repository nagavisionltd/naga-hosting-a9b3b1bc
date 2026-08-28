export type Plan = {
  id: "launch" | "studio" | "foundry";
  name: string;
  tagline: string;
  monthly: number;
  annual: number; // per month, billed yearly
  highlight?: boolean;
  specs: { label: string; value: string }[];
  features: string[];
};

export const PLANS: Plan[] = [
  {
    id: "launch",
    name: "Starter",
    tagline: "Simple hosting for one website.",
    monthly: 10,
    annual: 8.33,
    specs: [
      { label: "NVMe storage", value: "10 GB" },
      { label: "Websites", value: "1" },
      { label: "Professional email", value: "2" },
    ],
    features: [
      "Full cPanel account access",
      "Control of your files and data",
      "Self-hosted WordPress support",
      "One-click app installs",
      "Automated daily backups",
      "Access to upcoming NagaVision AI tools and web apps",
    ],
  },
  {
    id: "studio",
    name: "Founder Pro",
    tagline: "More space and resources for growing sites.",
    monthly: 25,
    annual: 20.83,
    highlight: true,
    specs: [
      { label: "NVMe storage", value: "50 GB" },
      { label: "Websites", value: "Multiple" },
      { label: "Professional email", value: "Up to 10" },
    ],
    features: [
      "Dedicated RAM and CPU resources",
      "Full cPanel account access",
      "Control of your files and data",
      "Self-hosted WordPress support",
      "One-click app installs",
      "Automated daily backups",
      "Free SEO audit",
      "Access to upcoming NagaVision AI tools and web apps",
    ],
  },
  {
    id: "foundry",
    name: "Agency",
    tagline: "Hosting plus practical support for client work.",
    monthly: 99,
    annual: 82.5,
    specs: [
      { label: "NVMe storage", value: "Unlimited" },
      { label: "Websites", value: "Multiple" },
      { label: "Professional email", value: "Unlimited" },
    ],
    features: [
      "Website built for you",
      "AI chatbot or agent included",
      "Full cPanel account access",
      "Control of your files and data",
      "Self-hosted WordPress support",
      "One-click app installs",
      "Dedicated account manager",
      "Free SEO audit",
      "Access to upcoming NagaVision AI tools and web apps",
    ],
  },
];

export const getPlan = (id?: string | null): Plan =>
  PLANS.find((p) => p.id === id) ?? (PLANS[1] as Plan);
