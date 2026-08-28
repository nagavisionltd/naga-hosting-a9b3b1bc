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
    name: "Launch",
    tagline: "For the first site that has to look serious.",
    monthly: 4.5,
    annual: 3.6,
    specs: [
      { label: "NVMe storage", value: "20 GB" },
      { label: "Websites", value: "1" },
      { label: "Monthly visits", value: "~40k" },
    ],
    features: [
      "Full cPanel account, yours on day one",
      "Free SSL, renewed automatically",
      "Free migration from your old host",
      "Daily off-site backups (14 days)",
      "Email accounts included",
    ],
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "For agencies running a shelf of client sites.",
    monthly: 11,
    annual: 8.8,
    highlight: true,
    specs: [
      { label: "NVMe storage", value: "100 GB" },
      { label: "Websites", value: "15" },
      { label: "Monthly visits", value: "~300k" },
    ],
    features: [
      "Everything in Launch",
      "LiteSpeed + object cache tuned for WordPress",
      "Staging environments, one click",
      "Daily backups (30 days) with self-restore",
      "Priority human support, 24/7",
    ],
  },
  {
    id: "foundry",
    name: "Foundry",
    tagline: "For stores and apps where downtime is money.",
    monthly: 24,
    annual: 19.2,
    specs: [
      { label: "NVMe storage", value: "300 GB" },
      { label: "Websites", value: "Unlimited" },
      { label: "Monthly visits", value: "~1.2M" },
    ],
    features: [
      "Everything in Studio",
      "Dedicated resources, no noisy neighbours",
      "Edge CDN across 34 locations",
      "Hourly backups (90 days)",
      "Named onboarding engineer",
    ],
  },
];

export const getPlan = (id?: string | null): Plan =>
  PLANS.find((p) => p.id === id) ?? (PLANS[1] as Plan);
