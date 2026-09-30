export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: "development" | "enterprise" | "marketing" | "design" | "cloud";
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  technologies: string[];
  highlight: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "web" | "erp" | "branding" | "packaging";
  categoryLabel: string;
  image: string;
  metrics: string;
  description: string;
  tech: string[];
  liveUrl?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
  image: string;
  demoUrl?: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  location: string;
  service: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const SITE_CONFIG = {
  name: "Webiz Square Software Solutions LLP",
  shortName: "Webiz Square",
  tagline: "Innovating Code. Engineering Global Digital Growth.",
  description: "Webiz Square is a premier software development and digital transformation agency in Nashik, India. We build high-performance websites, custom ERPs, mobile apps, and scalable digital marketing engines for global enterprises.",
  url: "https://webizsquare.com",
  phone: "+91 91729 44434",
  phoneDisplay: "+91 91729 44434",
  email: "info@webizsquare.com",
  whatsapp: "919172944434",
  address: "Nashik, Maharashtra, India - 422009",
  workingHours: "Monday - Saturday: 9:30 AM - 7:00 PM IST",
  socials: {
    linkedin: "https://www.linkedin.com/company/webiz-square/",
    facebook: "https://www.facebook.com/webizsquare",
    instagram: "https://www.instagram.com/webizsquare",
    github: "https://github.com/webizsquare",
  },
  stats: [
    { value: "150+", label: "Projects Delivered" },
    { value: "99.4%", label: "Client Satisfaction" },
    { value: "12+", label: "Countries Served" },
    { value: "< 1.2s", label: "Average Page Speed" },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Custom Website Development",
    slug: "website-development",
    category: "development",
    iconName: "Globe",
    shortDesc: "Ultra-fast, responsive web applications engineered with Next.js, React, and modern TypeScript.",
    fullDesc: "We build bespoke, lightning-fast web applications designed for conversion and global search rankings. Zero bloat, maximum performance, and custom-tailored UX.",
    deliverables: ["Custom App Router Architecture", "100% Mobile-First Responsive UI", "SEO-Engineered Semantic Code", "Lighthouse 95+ Performance"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    highlight: "Sub-Second LCP Speed"
  },
  {
    id: "erp-dev",
    title: "Enterprise ERP & Custom Software",
    slug: "erp-software-development",
    category: "enterprise",
    iconName: "Cpu",
    shortDesc: "End-to-end bespoke ERP, CRM, inventory, and automated billing software built to scale your business operations.",
    fullDesc: "Transform operational chaos into streamlined automated workflows. We build robust enterprise ERP solutions covering inventory, finance, multi-branch billing, and supply chain.",
    deliverables: ["Role-Based Access Control", "GST & Invoice Automation", "Inventory & Warehouse Tracking", "Custom Analytics Dashboards"],
    technologies: ["PostgreSQL", "Node.js", "Python", "React", "Docker", "Supabase"],
    highlight: "Zero Licensing Lock-in"
  },
  {
    id: "ecommerce-dev",
    title: "E-Commerce Web Solutions",
    slug: "ecommerce-development",
    category: "development",
    iconName: "ShoppingBag",
    shortDesc: "High-converting online stores with instantaneous checkout, payment gateway integrations, and real-time inventory.",
    fullDesc: "Scale your direct-to-consumer or B2B sales with high-performance storefronts. Optimized for peak traffic loads, frictionless checkout, and high retention.",
    deliverables: ["Custom Cart & 1-Click Checkout", "Payment Gateway Integration", "Automated Order Notifications", "Omnichannel Inventory Sync"],
    technologies: ["Next.js Commerce", "Razorpay / Stripe", "PostgreSQL", "Tailwind"],
    highlight: "+45% Higher Conversion Rate"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    slug: "application-development",
    category: "development",
    iconName: "Smartphone",
    shortDesc: "Cross-platform iOS and Android applications delivering native performance and fluid 60 FPS interactions.",
    fullDesc: "Deliver delightful mobile experiences on both App Store and Google Play from a single clean codebase. Offline-ready, push notifications enabled, and cloud synchronized.",
    deliverables: ["iOS & Android Unified Codebase", "Offline Data Sync & Storage", "Push Notification Pipelines", "Biometric Authentication"],
    technologies: ["Flutter", "React Native", "Firebase", "Node.js REST / GraphQL"],
    highlight: "Native 60 FPS Performance"
  },
  {
    id: "uiux-design",
    title: "UI/UX Design & Brand Identity",
    slug: "graphics-designing",
    category: "design",
    iconName: "Palette",
    shortDesc: "Human-centric digital product interfaces, brand systems, typography, and interactive design prototypes.",
    fullDesc: "We craft captivating visual identities, design systems, interactive prototypes, and packaging solutions that elevate your brand value in crowded markets.",
    deliverables: ["Interactive Figma Prototypes", "Comprehensive Design Systems", "Packaging & Print Collaterals", "Brand Identity & Guidelines"],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects"],
    highlight: "Award-Caliber Aesthetics"
  },
  {
    id: "seo-marketing",
    title: "SEO & Performance Growth",
    slug: "search-engine-optimization",
    category: "marketing",
    iconName: "TrendingUp",
    shortDesc: "Data-driven organic search engine ranking, content clustering, technical SEO, and Google Ads management.",
    fullDesc: "Dominate Google search results for commercial-intent keywords. We combine technical audits, schema implementation, authoritative backlinks, and conversion rate optimization.",
    deliverables: ["Comprehensive Technical Audit", "Keyword Clustering & Content Plan", "Entity Schema & Local SEO", "Conversion Rate Optimization"],
    technologies: ["Google Search Console", "GA4", "Schema.org", "SEMrush", "Google Ads"],
    highlight: "Top 3 Ranking Strategies"
  },
  {
    id: "bulk-sms-whatsapp",
    title: "Bulk SMS & WhatsApp Business API",
    slug: "bulk-sms-whatsapp-api",
    category: "marketing",
    iconName: "MessageSquare",
    shortDesc: "Automated customer broadcast campaigns, verified green-badge WhatsApp chatbots, and OTP verification pipelines.",
    fullDesc: "Engage your customers where they are with 98% open rates. Official WhatsApp Cloud API integration, automated CRM triggers, and high-volume transactional SMS delivery.",
    deliverables: ["Official WhatsApp Business API", "Automated Drip Sequences", "High-Speed OTP SMS Gateway", "Interactive Chatbot Flows"],
    technologies: ["Meta Cloud API", "SMS Gateway", "Webhooks", "Node.js"],
    highlight: "98% Message Open Rate"
  },
  {
    id: "cloud-hosting",
    title: "Cloud Infrastructure & Maintenance",
    slug: "website-hosting",
    category: "cloud",
    iconName: "ShieldCheck",
    shortDesc: "Managed cloud hosting, automated SSL, daily encrypted backups, uptime monitoring, and 24/7 security hardening.",
    fullDesc: "Never worry about downtime, server crashes, or security vulnerabilities. We manage and protect your digital assets with enterprise-grade cloud reliability.",
    deliverables: ["99.9% Uptime SLA", "Automated Daily Backups", "WAF & DDoS Mitigation", "Continuous Security Patches"],
    technologies: ["AWS", "Vercel", "Cloudflare", "Supabase", "Docker"],
    highlight: "99.9% Guaranteed Uptime"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "easyvendor",
    title: "EasyVendor B2B Multi-Vendor Platform",
    client: "EasyVendor Global",
    category: "web",
    categoryLabel: "Web & E-Commerce",
    image: "/portfolio/easyvendor-responsive-showcase.png",
    metrics: "+280% GMV Growth",
    description: "Enterprise multi-vendor procurement and wholesale marketplace with automated vendor settlements, real-time RFQ bidding, and multi-currency billing.",
    tech: ["Next.js", "React", "PostgreSQL", "Tailwind CSS", "Redis"]
  },
  {
    id: "egr59foods",
    title: "EGR59 Gourmet Food Showcase & Store",
    client: "EGR59 Foods Pvt Ltd",
    category: "web",
    categoryLabel: "E-Commerce",
    image: "/portfolio/egr59foods-responsive-showcase.png",
    metrics: "1.1s Load Time",
    description: "Ultra-fast headless food ordering experience with live kitchen dispatch tracking, recipe discovery, and streamlined 1-click mobile checkout.",
    tech: ["Next.js App Router", "Stripe / Razorpay", "Tailwind", "Supabase"]
  },
  {
    id: "eternaldevalaya",
    title: "Eternal Devalaya Cultural Portal",
    client: "Eternal Devalaya Trust",
    category: "web",
    categoryLabel: "Digital Experience",
    image: "/portfolio/eternaldevalaya-responsive-showcase.png",
    metrics: "45k+ Monthly Visitors",
    description: "Immersive spiritual and cultural heritage portal with 3D temple walkthrough previews, live donation processing, and multilingual content delivery.",
    tech: ["React", "Next.js", "Cloudflare CDN", "Tailwind CSS"]
  },
  {
    id: "theavocompany",
    title: "The Avo Company DTC Superfood Brand",
    client: "The Avocado Co.",
    category: "web",
    categoryLabel: "Brand & E-Commerce",
    image: "/portfolio/theavocompany-responsive-showcase.png",
    metrics: "4.8x ROI on Ads",
    description: "Vibrant direct-to-consumer superfood brand experience with custom subscription billing, influencer referral tracking, and interactive nutrition guides.",
    tech: ["Headless E-Commerce", "Next.js", "Figma", "Tailwind"]
  },
  {
    id: "mechmoto",
    title: "Mech Moto Automotive Service Hub",
    client: "Mech Moto Automotives",
    category: "web",
    categoryLabel: "Service Platform",
    image: "/portfolio/mech-moto-responsive-showcase.png",
    metrics: "+190% Lead Inquiries",
    description: "Comprehensive vehicle diagnostics booking, emergency breakdown dispatch, and doorstep automobile servicing web platform.",
    tech: ["React", "Node.js", "Google Maps API", "Tailwind"]
  },
  {
    id: "polymercrafts",
    title: "Polymer Crafts Industrial Showcase",
    client: "Polymer Crafts Inc.",
    category: "web",
    categoryLabel: "Industrial Web",
    image: "/portfolio/polymercrafts-responsive-showcase.png",
    metrics: "Top 3 Google Ranking",
    description: "SEO-optimized technical product catalog for advanced polymer manufacturing, RFQ generators, and technical datasheet downloads.",
    tech: ["Next.js", "Technical SEO", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "photofactory",
    title: "Photo Factory Studio & Booking",
    client: "Photo Factory Studios",
    category: "web",
    categoryLabel: "Creative Web",
    image: "/portfolio/photofactory-responsive-showcase.png",
    metrics: "100% Automated Bookings",
    description: "High-resolution photography portfolio and client proofing gallery with automated calendar slot booking and digital delivery.",
    tech: ["React", "Next.js", "Figma UI/UX", "Tailwind"]
  },
  {
    id: "dadashri-farms",
    title: "Dadashri Organic Farms Brand Identity",
    client: "Dadashri Agro Farms",
    category: "branding",
    categoryLabel: "Brand Identity",
    image: "/graphics/logo-and-business-card-for-dadashri-farms.png",
    metrics: "Complete Brand Ecosystem",
    description: "Organic farm branding package including minimalist agricultural emblem logo, premium business stationery, and eco-friendly packaging vectors.",
    tech: ["Figma", "Adobe Illustrator", "Brand Strategy"]
  },
  {
    id: "marvel-foods",
    title: "Marvel Foods Packaging & Brochure Design",
    client: "Marvel Gourmet Foods",
    category: "packaging",
    categoryLabel: "Packaging & Print",
    image: "/graphics/brochure-design-for-marvel-foods.png",
    metrics: "Retail Shelf Ready",
    description: "Modern food packaging line and corporate multi-page product brochure design crafted for domestic supermarket launch and export markets.",
    tech: ["Adobe Illustrator", "Photoshop", "Print Pre-Press"]
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment Social Campaign",
    client: "Community Impact Campaign",
    category: "branding",
    categoryLabel: "Campaign Design",
    image: "/graphics/Women Empowerment_1_Instagram Post.jpg.jpeg",
    metrics: "250k+ Impressions",
    description: "Viral social media visual campaign series highlighting grassroots female entrepreneurs and community leadership initiatives.",
    tech: ["Visual Storytelling", "Social Media Graphics", "Figma"]
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "webiz-square-one",
    name: "Webiz Square One",
    tagline: "The Unified All-in-One Cloud ERP & Business OS",
    description: "Empower your entire enterprise with seamless inventory management, multi-branch GST invoicing, sales pipeline tracking, and real-time financial reporting.",
    badge: "Flagship Enterprise ERP",
    image: "/products/bachat-gat-online-logo.png",
    features: [
      "Real-time Multi-Warehouse Inventory & Batch Tracking",
      "One-Click Automated GST Invoicing & e-Way Bill Generation",
      "Role-Based Security & Granular Staff Access Control",
      "Comprehensive P&L, Balance Sheet, and Cashflow Analytics",
      "Supplier Procurement & Automated Reorder Workflows"
    ],
    stats: [
      { label: "Active Business Users", value: "2,500+" },
      { label: "Invoices Processed", value: "1.2M+" },
      { label: "Admin Time Saved", value: "65%" }
    ]
  },
  {
    id: "bachat-gat-online",
    name: "Bachat Gat Online",
    tagline: "India's #1 Cloud Platform for Self-Help Groups (SHG)",
    description: "A comprehensive digital ecosystem built to digitize micro-savings, monthly member contributions, interest calculations, and bank loan distribution for Bachat Gats.",
    badge: "Community Finance SaaS",
    image: "/graphics/bachat-gat-online-logo.png",
    features: [
      "Individual Member Passbooks with Automated SMS Alerts",
      "Transparent Monthly Contribution & Penalty Calculators",
      "Internal Loan Disbursement & EMI Amortization Schedules",
      "Instant Audit-Ready PDF Reports & Government Compliance",
      "Regional Language Support (Marathi, Hindi, English)"
    ],
    stats: [
      { label: "Registered Groups", value: "450+" },
      { label: "Women Empowered", value: "6,000+" },
      { label: "Ledger Accuracy", value: "100%" }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Solution Blueprint",
    desc: "We analyze your business objectives, target audience, competitive landscape, and technical requirements to design an airtight architecture plan.",
    deliverable: "Technical Specification & Architecture Blueprint"
  },
  {
    step: "02",
    title: "UI/UX Prototyping & Design",
    desc: "Our design team crafts human-centered interactive wireframes and Figma high-fidelity prototypes following modern glassmorphic aesthetics.",
    deliverable: "Interactive Design System & Clickable Prototype"
  },
  {
    step: "03",
    title: "Agile Sprint Development",
    desc: "We write clean, modular, and type-safe code in bi-weekly agile sprints. You receive staging preview links to inspect progress at every stage.",
    deliverable: "Production-Ready Next.js & API Modules"
  },
  {
    step: "04",
    title: "Rigorous QA, Security & CWV Audit",
    desc: "Automated end-to-end testing, responsive cross-device testing, OWASP vulnerability scanning, and Lighthouse 95+ Core Web Vitals optimization.",
    deliverable: "QA Certification & Performance Scorecard"
  },
  {
    step: "05",
    title: "Zero-Downtime Launch & Growth",
    desc: "Seamless deployment on high-speed CDN infrastructure, search engine indexing submission, analytics configuration, and 24/7 post-launch support.",
    deliverable: "Live Deployment & 24/7 SLA Support"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Rajendra Deshmukh",
    role: "Managing Director",
    company: "Deshmukh Agro Exports",
    rating: 5,
    content: "Webiz Square engineered our global export portal and custom inventory ERP. Our export inquiries tripled within 60 days of launch, and the loading speed on international mobile networks is astounding.",
    location: "Nashik, Maharashtra",
    service: "Custom ERP & Web Platform"
  },
  {
    id: "2",
    name: "Pooja Patil",
    role: "Founder & Creative Director",
    company: "Sweet Affairs Confectioneries",
    rating: 5,
    content: "The team at Webiz Square transformed our branding and e-commerce store. The dark aesthetic, fluid product transitions, and 1-click checkout increased our direct online revenue by over 240%.",
    location: "Pune, India",
    service: "E-Commerce & Branding"
  },
  {
    id: "3",
    name: "Vikram Mehta",
    role: "Operations Head",
    company: "Polymer Crafts Manufacturing",
    rating: 5,
    content: "We replaced our sluggish legacy software with Webiz Square One. The automated GST billing and real-time inventory tracking saved our accounts team over 25 hours every week. Highly recommended!",
    location: "Mumbai, India",
    service: "Enterprise ERP Software"
  },
  {
    id: "4",
    name: "Dr. Aniket Joshi",
    role: "Chief Medical Officer",
    company: "LifeCare Dental & Healthcare",
    rating: 5,
    content: "Their SEO strategy ranked our clinic #1 across Nashik for high-intent dental search terms. We receive consistent daily appointment bookings directly through the automated WhatsApp integration.",
    location: "Nashik, India",
    service: "SEO & WhatsApp Integration"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "1",
    question: "How long does it take to develop a custom website or software?",
    answer: "A standard high-performance marketing website or e-commerce storefront typically takes 2 to 4 weeks. Custom enterprise ERP software or multi-module applications take between 4 to 8 weeks depending on scope and integrations. We operate in bi-weekly agile sprints so you see tangible progress every week.",
    category: "General"
  },
  {
    id: "2",
    question: "Why should we choose Next.js and custom code over WordPress or page builders?",
    answer: "WordPress and heavy page builders often suffer from code bloat, slow mobile speeds, plugin vulnerability risks, and high maintenance costs. Our Next.js App Router solution delivers instant pre-rendered HTML, 95+ mobile Lighthouse scores, bank-grade security, and superior Google SEO rankings.",
    category: "Technology"
  },
  {
    id: "3",
    question: "Can we manage content and updates without coding knowledge?",
    answer: "Yes, 100%! We provide an intuitive, modern headless CMS admin dashboard where your team can easily create, edit, draft, and publish pages, blogs, case studies, client logos, and SEO meta tags with live preview capabilities.",
    category: "Management"
  },
  {
    id: "4",
    question: "How do you handle website migration from our existing site without losing SEO rankings?",
    answer: "We follow a strict 10-step zero-loss migration protocol: complete URL inventory crawling, 1-to-1 301 redirect mapping, preserving existing search metadata, JSON-LD schema preservation, and instant XML sitemap updates to ensure your Google rankings are preserved and enhanced.",
    category: "SEO"
  },
  {
    id: "5",
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes! Every project includes complimentary 30-day post-launch warranty support. We also offer ongoing monthly maintenance packages covering cloud server monitoring, daily encrypted backups, security patch updates, and feature enhancements.",
    category: "Support"
  },
  {
    id: "6",
    question: "How does the project pricing work?",
    answer: "We offer transparent, milestone-based pricing tailored to your project scope. After our initial discovery call, you receive a detailed proposal with fixed deliverables, clear sprint timelines, and no hidden surprises.",
    category: "Pricing"
  }
];

export const CLIENT_LOGOS = [
  { name: "Client 1", src: "/clients/1.png" },
  { name: "Client 2", src: "/clients/2.png" },
  { name: "Client 3", src: "/clients/3.png" },
  { name: "Client 4", src: "/clients/4.png" },
  { name: "Client 5", src: "/clients/5.png" },
  { name: "Client 6", src: "/clients/6.png" },
  { name: "Client 7", src: "/clients/7.png" },
  { name: "Client 8", src: "/clients/8.png" },
  { name: "Client 9", src: "/clients/9.png" },
  { name: "Client 10", src: "/clients/10.png" },
  { name: "Client 11", src: "/clients/11.png" },
  { name: "Client 12", src: "/clients/12.png" },
];

export const TECH_STACK = [
  { name: "Next.js 15", category: "Frontend" },
  { name: "React 19", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Cloud DB" },
  { name: "Python", category: "AI & Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS / Vercel", category: "Cloud" },
  { name: "Figma", category: "Design" },
];
