import { SERVICES_CATALOG } from "./servicesData";

export const SERVICES_DATA = SERVICES_CATALOG;

export const PROJECTS_DATA = [
  {
    id: "haiwa",
    slug: "haiwa",
    name: "Haiwa",
    title: "Haiwa",
    tagline: "Modern real-time social networking and interactive community web application.",
    category: "Web Applications",
    // No live demo or external website link for this project
    liveUrl: null,
    // Main cover/preview image: (e.g., "/images/projects/haiwa-cover.png")
    image: "",
    imageAlt: "Haiwa - Real-time social networking and community platform interface",
    shortDescription: "A feature-rich social and community web application built for real-time discussions, dynamic multimedia sharing, user profiles, interactive feeds, and collaborative group hubs.",
    fullOverview: "Haiwa is an engaging, full-stack community web application designed to foster meaningful digital connections. It allows users to create personalized profiles, publish rich multimedia posts, join topic-driven discussion channels, and communicate through low-latency direct and group messaging.",
    theChallenge: "Building a modern social application requires delivering instantaneous feed updates, media uploads, and notification streams while maintaining 60fps scrolling and tight data privacy controls.",
    ourApproach: "We architected a responsive Single Page Application with optimized WebSocket connections for real-time events, optimistic UI updates for instant interactions, and modular state management.",
    solution: "A scalable web application featuring algorithmically organized activity feeds, threaded comment discussions, real-time message notifications, customizable user bios, and robust community moderation tools.",
    keyFeatures: [
      "Real-time dynamic activity feeds with image and rich-text publishing",
      "Interactive social engagements including likes, bookmarks, and nested replies",
      "Direct one-on-one and group messaging with live typing and presence indicators",
      "Customizable user profiles with media galleries and follower management",
      "Topic tags, full-text content search, and community discovery hubs"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "WebSockets", "MongoDB"],
    industry: "Social Media & Community",
    timeline: "6 Weeks",
    mockupType: "haiwa",
    accentGradient: "from-[#06B6D4] to-[#3B82F6]",
    deliverables: ["Social Web Application", "Real-Time Chat Engine", "User Profile System", "Moderation Dashboard"]
  },
  {
    id: "rentride",
    slug: "rentride",
    name: "RentRide",
    title: "RentRide",
    tagline: "Seamless vehicle rental booking, fleet management, and reservation platform.",
    category: "Web Applications",
    // No live demo or external website link for this project
    liveUrl: null,
    // Main cover/preview image: (e.g., "/images/projects/rentride-cover.png")
    image: "",
    imageAlt: "RentRide - Vehicle rental booking and fleet management platform interface",
    shortDescription: "An end-to-end vehicle rental web application enabling customers to search, compare, and book rental vehicles instantly while providing owners with comprehensive fleet and reservation tools.",
    fullOverview: "RentRide transforms personal mobility into a streamlined digital experience. Customers can search available cars, SUVs, and bikes based on pickup location and rental duration, view transparent daily rates, select insurance packages, and complete reservations online. Fleet operators receive a dedicated dashboard to monitor vehicle status, schedule maintenance, and verify customer credentials.",
    theChallenge: "Traditional vehicle rental operators struggle with manual reservation logs, phone scheduling errors, uncoordinated vehicle handovers, and delayed customer identity verifications.",
    ourApproach: "We designed an intuitive location and date-driven vehicle search engine paired with a clear multi-step booking funnel, digital KYC document uploads, and an automated calendar availability manager.",
    solution: "A robust full-stack web application featuring real-time vehicle availability, instant reservation confirmation, dynamic duration-based pricing, fleet tracking, and automated customer trip receipts.",
    keyFeatures: [
      "Interactive vehicle catalog filtered by category, transmission, and fuel type",
      "Real-time calendar booking engine preventing overlapping reservations",
      "Transparent pricing calculator factoring in trip duration, deposits, and insurance",
      "Digital driver's license and identity document upload for swift verification",
      "Fleet operator management console for vehicle availability and maintenance logs",
      "Automated booking confirmation and digital trip itinerary dispatch"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "PostgreSQL", "REST APIs"],
    industry: "Mobility & Car Rental",
    timeline: "5 Weeks",
    mockupType: "rentride",
    accentGradient: "from-[#10B981] to-[#3B82F6]",
    deliverables: ["Customer Booking Portal", "Fleet Management Console", "KYC Verification Module", "Payment & Invoice Engine"]
  },
  {
    id: "nestparty",
    slug: "nestparty",
    name: "NestParty",
    title: "NestParty",
    tagline: "Modern event planning, venue discovery, and private celebration booking platform.",
    category: "Web Development",
    // No live demo or external website link for this project
    liveUrl: null,
    // Main cover/preview image: (e.g., "/images/projects/nestparty-cover.png")
    image: "",
    imageAlt: "NestParty - Event planning and venue discovery platform interface",
    shortDescription: "A dynamic web platform for discovering party venues, managing private gatherings and celebrations, organizing digital invitations, and booking event services seamlessly.",
    fullOverview: "NestParty is an all-in-one event hosting and venue discovery web platform. It connects party hosts with curated spaces—ranging from rooftop terraces and private villas to celebration lounges—while offering automated RSVP management, package customization, and direct vendor coordination.",
    theChallenge: "Organizing private events traditionally requires navigating scattered venue directories, dealing with opaque pricing structures, and manually keeping track of RSVPs across endless messaging threads.",
    ourApproach: "We created a streamlined, visually engaging web experience with facet-filtered venue discovery, instant date availability inquiries, transparent budget calculators, and frictionless guest RSVP portals.",
    solution: "A fast, responsive web application featuring curated space listings, multi-media venue tours, interactive booking workflows, digital guestlist management, and automated attendee reminders.",
    keyFeatures: [
      "Curated party venue catalog with amenity filters and interactive maps",
      "Frictionless booking inquiry workflow with dynamic price estimation",
      "Digital invitations with real-time RSVP tracking and guest management",
      "Automated SMS/Email event reminders and location instructions",
      "Vendor add-on selections including catering, sound systems, and decor"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "REST APIs", "Vite"],
    industry: "Events & Hospitality",
    timeline: "4 Weeks",
    mockupType: "nestparty",
    accentGradient: "from-[#EC4899] to-[#8B5CF6]",
    deliverables: ["Venue Discovery Portal", "Host Management Dashboard", "Guest RSVP Engine", "Responsive Design System"]
  },
  {
    id: "builtmart",
    slug: "builtmart",
    name: "BuiltMart",
    title: "BuiltMart",
    tagline: "B2B & B2C construction materials marketplace and procurement platform.",
    category: "Web Development",
    // No live demo or external website link for this project
    liveUrl: null,
    // Main cover/preview image: (e.g., "/images/projects/builtmart-cover.png")
    image: "",
    imageAlt: "BuiltMart - Construction materials marketplace and procurement platform interface",
    shortDescription: "A comprehensive digital marketplace connecting contractors, builders, and homeowners with verified construction material suppliers, instant quotes, and bulk order fulfillment.",
    fullOverview: "BuiltMart modernizes construction supply procurement. It connects builders, contractors, architects, and property owners directly with certified manufacturers and distributors for cement, steel, bricks, electricals, sanitaryware, and finishing materials at competitive wholesale rates.",
    theChallenge: "The building supplies sector has historically suffered from fragmented supply chains, opaque middleman markups, slow paper quotations, and frequent project delays due to untracked deliveries.",
    ourApproach: "We engineered an accessible e-commerce and RFQ (Request for Quote) platform featuring structured product categorizations, automated volumetric material quantity calculators, and real-time vendor dispatch tracking.",
    solution: "A scalable, high-performance marketplace web application equipped with bulk order bidding, verified supplier profiles, automated GST invoicing, and a contractor mobile management view.",
    keyFeatures: [
      "Extensive construction materials catalog with technical specification sheets",
      "Interactive material quantity and volumetric estimation calculator",
      "Request for Quote (RFQ) workflow with multi-vendor competitive bidding",
      "Verified supplier badges, customer reviews, and compliance certificates",
      "Mobile-optimized order tracking and delivery milestone updates"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "REST APIs", "PostgreSQL"],
    industry: "Construction & B2B E-Commerce",
    timeline: "5 Weeks",
    mockupType: "builtmart",
    accentGradient: "from-[#F59E0B] to-[#EF4444]",
    deliverables: ["B2B Marketplace Portal", "RFQ Bidding Engine", "Supplier Directory", "Order Management System"]
  },
  {
    id: "dsa-web-app",
    slug: "dsa-web-app",
    name: "DSA Web App",
    title: "DSA Web App",
    tagline: "Interactive Data Structures & Algorithms learning and challenge platform.",
    category: "Web Development",
    liveUrl: "https://ajeetlodhii.github.io/Dsa-Game/",
    image: "/images/projects/dsa-game-hub.svg",
    imageAlt: "DSA Web App - Interactive Data Structures and Algorithms learning platform",
    screenshots: [
      {
        url: "/images/projects/dsa-game-hub.svg",
        caption: "DSA Game Hub - Interactive Tree Visualizer & Algorithm Challenges"
      }
    ],
    shortDescription: "An interactive DSA learning and game platform designed to make learning Data Structures and Algorithms intuitive and engaging through interactive visualizers and algorithm challenges.",
    fullOverview: "DSA Web App transforms abstract algorithmic theory into intuitive visual puzzles and interactive challenges. Computer science students and engineers can inspect data structures like binary search trees, sorting pipelines, and graph traversals in real time while solving problem-solving challenges.",
    theChallenge: "Static textbook explanations and traditional code problem runners lack spatial feedback, making it difficult for developers to develop deep intuition for how data structures mutate in memory.",
    ourApproach: "We built an interactive canvas visualizer where pointers, nodes, and arrays update live with step-by-step traversal controls, algorithm execution speed sliders, and instant problem feedback.",
    solution: "A high-performance web platform featuring interactive trees, sorting race visualizers, dynamic complexity analysis breakdowns, and gamified progress tracking.",
    keyFeatures: [
      "Interactive binary search tree & graph traversal visualizers",
      "Gamified algorithm challenges with instant execution feedback",
      "Real-time time and space complexity analysis breakdowns",
      "Engaging streak counter, scoring badges, and levels"
    ],
    technologies: ["JavaScript", "Data Structures", "Algorithms", "HTML5 Canvas", "Tailwind CSS"],
    industry: "EdTech & Developer Tools",
    timeline: "4 Weeks",
    mockupType: "dsa",
    accentGradient: "from-[#A98BE3] to-[#7C3AED]",
    deliverables: ["Interactive Web Application", "Canvas Animation Engine", "Problem Solver Modules", "Responsive UI"]
  },
  {
    id: "resume-analyzer",
    slug: "resume-analyzer",
    name: "Resume Analyzer",
    title: "Resume Analyzer",
    tagline: "AI-driven resume evaluation, ATS score matching, and career improvement engine.",
    category: "Web Development",
    liveUrl: "https://ajeetlodhii.github.io/Resume-Analyzer/index.html",
    image: "/images/projects/smart-resume-analyzer.svg",
    imageAlt: "Resume Analyzer - AI-powered resume evaluation and ATS score optimizer",
    screenshots: [
      {
        url: "/images/projects/smart-resume-analyzer.svg",
        caption: "Smart Resume Analyzer - ATS Score Breakdown & Keyword Optimization"
      }
    ],
    shortDescription: "A smart resume analysis web platform that evaluates candidate resumes, calculates ATS compatibility scores, and suggests actionable enhancements for better job prospects.",
    fullOverview: "Resume Analyzer provides automated, intelligent resume auditing for job seekers. It parses resume text, computes ATS compatibility scores, identifies missing critical skills against targeted job titles, and suggests actionable enhancements to maximize interview callbacks.",
    theChallenge: "Job candidates often face low interview response rates due to formatting incompatibilities with modern Applicant Tracking Systems (ATS) and omitted high-value technical keywords.",
    ourApproach: "We built a client-first parsing and scoring engine that analyzes uploaded resumes, compares them against industry target role profiles, and generates an intuitive breakdown of strengths and gaps.",
    solution: "An accessible web platform featuring instant ATS score calculation, highlighted missing technical competencies, actionable impact verb recommendations, and clear visual reports.",
    keyFeatures: [
      "ATS compatibility score calculation and format auditing",
      "AI-driven skill gap identification & keyword suggestions",
      "Action verb impact recommendations for work experience",
      "Instant report generation with exportable summary"
    ],
    technologies: ["JavaScript", "AI Resume Parsing", "NLP Analysis", "Tailwind CSS", "Web APIs"],
    industry: "Career Tech & Recruitment",
    timeline: "3 Weeks",
    mockupType: "resume",
    accentGradient: "from-[#A98BE3] to-[#CDB7F6]",
    deliverables: ["Resume Analysis Engine", "ATS Scoring Module", "Interactive Dashboard", "Performance Optimization"]
  },
  {
    id: "portfolio",
    slug: "portfolio",
    name: "Portfolio",
    title: "Portfolio",
    tagline: "Modern developer portfolio showcasing engineering projects, technical skills, and experience.",
    category: "Web Development",
    liveUrl: "https://ajeetlodhii.github.io/Portfolio/",
    image: "/images/projects/ajeet-patel-portfolio.svg",
    imageAlt: "Developer Portfolio showcasing projects, skills, and web development experience",
    screenshots: [
      {
        url: "/images/projects/ajeet-patel-portfolio.svg",
        caption: "Developer Portfolio - Modern Web Presence & Project Showcase"
      }
    ],
    shortDescription: "A modern developer portfolio website highlighting technical proficiencies, live production projects, and software engineering capabilities with fast performance.",
    fullOverview: "A high-performance personal developer portfolio engineered to showcase full-stack web development expertise, open-source projects, and frontend engineering craftsmanship. Built with modern web standards, fluid responsive design, and optimized Core Web Vitals.",
    theChallenge: "Creating a memorable, high-performance developer portfolio that balances comprehensive project case studies with clean typography and rapid mobile responsiveness.",
    ourApproach: "We designed an uncluttered, modern layout with high-contrast typography, interactive project previews, and smooth micro-interactions across desktop and mobile.",
    solution: "A polished developer showcase featuring categorized project grids, live interactive demos, technical skills matrix, and frictionless contact touchpoints.",
    keyFeatures: [
      "Clean, high-performance developer portfolio layout",
      "Interactive project cards with direct live demo links",
      "Modern technical stack matrix and experience timeline",
      "Mobile-optimized responsive architecture with sub-second loads"
    ],
    technologies: ["React", "JavaScript", "Responsive UI", "Tailwind CSS", "Web Performance"],
    industry: "Developer Portfolio & Personal Brand",
    timeline: "2 Weeks",
    mockupType: "portfolio",
    accentGradient: "from-[#A98BE3] to-[#7C3AED]",
    deliverables: ["Personal Developer Portfolio", "Live Project Showcase", "Responsive Design System", "SEO Optimization"]
  }
];
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business and requirements.",
    details: [
      "In-depth discussion on business objectives and target users",
      "Analysis of technical requirements and functional scope",
      "Transparent timeline, budget, and milestone roadmap"
    ]
  },
  {
    number: "02",
    title: "Plan",
    description: "Create the structure and project plan.",
    details: [
      "Information architecture and user journey mapping",
      "Component blueprints and data flow planning",
      "Clear milestone deliverables and sign-off criteria"
    ]
  },
  {
    number: "03",
    title: "Build",
    description: "Design and develop the solution.",
    details: [
      "Figma design system and ergonomic user experience",
      "Fast, responsive frontend with clean TypeScript code",
      "Rigorous speed optimization and cross-device testing"
    ]
  },
  {
    number: "04",
    title: "Launch",
    description: "Test, deploy, and deliver.",
    details: [
      "Production deployment with domain and security setup",
      "Complete code repository and asset ownership transfer",
      "Post-launch warranty support and team walkthrough"
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "lumina",
    clientName: "Elena Vance",
    role: "Founder & Creative Director",
    company: "Lumina Artisan Living",
    quote: "AAKRISH transformed our online store completely. Our mobile checkout speed dropped below 1 second, and our sales conversion rate increased by 42% in the very first month. Communicating directly with the engineers made all the difference.",
    rating: 5,
    projectType: "E-Commerce Storefront",
    metrics: "+42% Conversion Rate"
  },
  {
    id: "apex",
    clientName: "Marcus Sterling",
    role: "VP of Operations",
    company: "Apex Freight & Logistics",
    quote: "We replaced manual phone calls and paperwork with a custom dispatch platform built by AAKRISH. The team delivered ahead of schedule, with zero software bloat, saving our dispatchers hours every single day.",
    rating: 5,
    projectType: "Custom Operations Software",
    metrics: "Saved 15+ Hours/Week"
  },
  {
    id: "salon",
    clientName: "Priya Sharma",
    role: "Managing Director",
    company: "The Luxe Salon Network",
    quote: "Our multi-station booking platform is intuitive and fast. Stylists learned it in minutes on their tablets, and clients love booking online without double-bookings. The fixed-scope transparency was refreshing.",
    rating: 5,
    projectType: "Web Application",
    metrics: "100% Booking Automation"
  },
  {
    id: "metropolis",
    clientName: "David Chen",
    role: "Principal Architect",
    company: "Metropolis Architecture",
    quote: "Our previous site was slow and clunky. AAKRISH gave us an editorial, high-performance portfolio that loads our large photography files instantly. High-end clients comment on how polished the site feels.",
    rating: 5,
    projectType: "Website Redesign",
    metrics: "99/100 Lighthouse Score"
  }
];

export const FAQ_DATA = [
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer: "A standard modern business website or landing page typically takes 2 to 3 weeks. Custom web applications, portals, and e-commerce platforms typically range from 4 to 8 weeks depending on complexity. We always provide a clear, fixed timeline before starting."
  },
  {
    id: "ownership",
    question: "Do I own 100% of the code, design, and assets?",
    answer: "Yes. Once the agreed project is completed and all payments are fulfilled, you receive ownership of the project code, designs, and agreed project assets. There are no unnecessary recurring agency ownership fees."
  },
  {
    id: "communication",
    question: "Who will I be working with directly?",
    answer: "You'll communicate directly with the people working on your project. We keep communication simple and avoid unnecessary layers between you and the development/design team."
  },
  {
    id: "redesign",
    question: "Can you redesign or speed up our existing website?",
    answer: "Yes. We can redesign outdated websites, improve their UI/UX, make them mobile-friendly, improve loading performance, and help preserve existing SEO where appropriate."
  },
  {
    id: "payment",
    question: "How do project milestones and payments work?",
    answer: "Projects are divided into clear milestones with specific deliverables. The timeline, scope, milestones, and payment structure are agreed upon before development begins so everything remains transparent."
  },
  {
    id: "post-launch",
    question: "What happens after the website or app is launched?",
    answer: "After launch, we provide the agreed post-launch support, help with the final handover, and provide the required project code and assets. Additional maintenance or future improvements can be discussed separately."
  }
];

export const COMPANY_STATS = [
  { value: "100%", label: "Client Commitment", description: "Direct collaboration with dedicated engineers" },
  { value: "100%", label: "Tailored Solutions", description: "Engineered specifically to your business goals" },
  { value: "100%", label: "On-Time Delivery", description: "Predictable, transparent project milestones" },
  { value: "Direct", label: "Clear Communication", description: "Direct interaction with no middle layers" }
];
export const WHY_CHOOSE_US = [
  {
    title: "Business-Focused",
    description: "We first understand the business problem before building the solution. We ensure every feature serves a clear, measurable business objective.",
    iconName: "Target",
    highlight: "Strategy First"
  },
  {
    title: "Simple Experiences",
    description: "We create interfaces that are easy for customers to understand and use. Minimal cognitive friction leads to higher engagement and satisfaction.",
    iconName: "Sparkles",
    highlight: "Intuitive UX"
  },
  {
    title: "Modern Technology",
    description: "We use modern technologies and development practices \u2014 clean TypeScript, modular React, and optimized styling for longevity and speed.",
    iconName: "Code2",
    highlight: "Clean Code"
  },
  {
    title: "Long-Term Thinking",
    description: "We build scalable solutions that can evolve with the business. Clean architectures that your team can maintain and expand over time.",
    iconName: "TrendingUp",
    highlight: "Built to Scale"
  }
];
export const COMPANY_INFO = {
  name: "AAKRISH Techso",
  shortName: "AAKRISH Techso",
  tagline: "Modern Digital Product Agency",
  email: "aakrish0805@gmail.com",
  phone: "+91 96918 22276",
  phoneNumbers: [
    {
      number: "9691822276",
      display: "9691822276",
      formatted: "+91 96918 22276",
      tel: "tel:9691822276",
      whatsappUrl: "https://wa.me/919691822276?text=Hi%20AAKRISH%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
    },
    {
      number: "7089626593",
      display: "7089626593",
      formatted: "+91 70896 26593",
      tel: "tel:7089626593",
      whatsappUrl: "https://wa.me/917089626593?text=Hi%20AAKRISH%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
    }
  ],
  whatsapp: "+919691822276",
  whatsappMessage: "Hi AAKRISH, I would like to discuss a new digital project with your team.",
  location: "Pune, India",
  workingHours: "Monday \u2013 Saturday: 9:00 AM \u2013 7:00 PM IST",
  socials: {
    linkedin: "https://linkedin.com/company/aakrish-digital",
    instagram: "https://instagram.com/aakrish.digital",
    github: "https://github.com/aakrish-digital"
  }
};
