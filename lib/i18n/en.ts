import type { Dictionary } from "@/lib/i18n/ja";

const en: Dictionary = {
  meta: {
    siteName: "NOVATYNC",
    title: "NOVATYNC | Full-Stack AI Engineer",
    description:
      "A full-stack AI engineer who takes web services, SaaS, business systems, and AI products from planning and design through development and operations.",
    keywords: ["AI development", "Full stack", "Cloud", "DX", "Next.js", "React", "NOVATYNC"],
    ogLocale: "en_US",
    pages: {
      about: {
        title: "About",
        description:
          "Profile of full-stack AI engineer Hira Suido. End-to-end delivery from requirements through design, development, infrastructure, and operations. AI workflow automation and web/SaaS development.",
      },
      career: {
        title: "Careers",
        description:
          "NOVATYNC is looking for people to build the future together. Now hiring frontend, backend, AI, and cloud engineers.",
      },
      contact: {
        title: "Contact",
        description: "Reach out here for project consultations and questions. We will reply within 3 business days.",
      },
      service: {
        title: "Services",
        description:
          "AI development, web development, cloud, mobile, UI/UX, and consulting — the six services NOVATYNC provides.",
      },
      technology: {
        title: "Technology",
        description:
          "The modern technology stack and development flow NOVATYNC uses: React, Next.js, Python, AWS, OpenAI, and more.",
      },
      works: {
        title: "Work & Case Studies",
        description: "A look at the projects NOVATYNC has built so far, organized by stack.",
      },
    },
  },

  nav: {
    home: "Home",
    service: "Services",
    works: "Work",
    technology: "Technology",
    about: "About",
    career: "Careers",
    contact: "Contact",
  },

  header: {
    menu: "Menu",
    contact: "Contact",
  },

  controls: {
    language: "Switch language",
    toLight: "Switch to white background",
    toSpace: "Switch to space background",
  },

  pageHeader: {
    about: {
      title: "About Us",
      desc: "As a full-stack AI engineer, I handle everything from requirements to operations, proposing solutions that improve how you work and help your business grow.",
    },
    career: {
      title: "Careers",
      desc: "Why not build the future with Team NOVATYNC? We welcome applications for every position, full-time or contract.",
    },
    contact: {
      title: "Contact",
      desc: "From project consultations to technical questions, feel free to get in touch.",
    },
    service: {
      title: "Services",
      desc: "From AI to the cloud, we offer a broad range of solutions to your challenges. Click a card to see the details.",
    },
    technology: {
      title: "Technology",
      desc: "We build scalable, highly maintainable systems on a world-class technology stack.",
    },
    works: {
      title: "Work & Case Studies",
      desc: "A stack-by-stack overview of the sites NOVATYNC has built.",
    },
  },

  hero: {
    taglineLead: "AI is transforming business.",
    taglineBody: "We build that future.",
    body: "NOVATYNC is an IT partner that fuses generative AI, web systems, and the cloud to accelerate your digital transformation.",
    bodyStrong: "We embed AI into the business itself — building world-class software from Japan.",
    ctaService: "Explore services",
    ctaWorks: "See our work",
    ctaContact: "Contact us →",
  },

  brand: {
    title: "The Meaning Behind the Name",
    nova: ["A new star", "Innovation", "Explosive growth"],
    sync: ["Synchronization", "Connection", "Teamwork", "Fusion of technologies"],
    quote: ["“Synchronizing innovation,", "connecting people, companies, and AI.”"],
    note: "— That is what our name stands for.",
  },

  mission: {
    headingLead: "Unlocking every company's full potential",
    headingAccent: " with AI.",
    body: [
      "Beyond improving day-to-day operations, we create new value",
      "and build software that can take on the world.",
    ],
    visionLead: "Creating a future where",
    visionAccent: "every company uses AI",
    visionTail: " as a matter of course.",
    values: {
      innovation: "We keep exploring cutting-edge technology to deliver innovative solutions.",
      quality: "We hold ourselves to world-class standards of code quality and design.",
      trust: "Above all, we value long-term, trusting relationships with our clients.",
      speed: "We deliver value fast, with the agility of a startup.",
      ownership: "Everyone takes ownership and works with a sense of responsibility for the business.",
      learning: "Technology never stops evolving. Continuous learning is our strength.",
    },
  },

  why: {
    title: "Why Choose Us",
    teamSuffix: "",
    stats: {
      years: "A deep delivery track record",
      remote: "Fully remote by design",
      team: "A small, senior team",
    },
  },

  reviews: {
    title: "What Our Clients Say",
    lead: "Feedback from clients who have entrusted their projects to us.",
    avatarAlt: (name: string) => `Avatar of ${name}`,
    showing: (shown: number, total: number) => `Showing ${shown} of ${total}`,
    items: [
      {
        name: "Kenta Sato",
        role: "CTO",
        company: "Tech Frontier Inc.",
        body: "Introducing generative AI let us automate our internal help-desk responses. From scoping requirements through production operations, the balance of speed and quality was outstanding.",
      },
      {
        name: "Misaki Suzuki",
        role: "Product Manager",
        company: "CloudWorks LLC",
        body: "I was impressed by both their full-stack development skills and how carefully they communicate. They stayed with us after launch with improvement proposals, so we can rely on them with confidence.",
      },
      {
        name: "Sho Tanaka",
        role: "President & CEO",
        company: "Northern Green Inc.",
        body: "Their development setup kept pace with the speed a startup needs, which was a huge help. The UI is polished too, and our customers' feedback has improved.",
      },
      {
        name: "Akari Ito",
        role: "Head of Marketing",
        company: "Branding Lab",
        body: "Because design and implementation move forward together, we had almost no rework. They deliver world-class experience design on a realistic schedule.",
      },
      {
        name: "Naoki Watanabe",
        role: "Head of Information Systems",
        company: "East Japan Logistics",
        body: "We asked them to migrate our legacy internal systems to the cloud. Their proposal covered security and cost optimization as well, which made it easy to explain to management.",
      },
      {
        name: "Riko Yamamoto",
        role: "UX Designer",
        company: "Mobile Studio",
        body: "They translate a Figma design system straight into production-quality implementation. Their attention to detail raised our product's level of finish a full notch.",
      },
      {
        name: "Yuto Nakamura",
        role: "Engineering Manager",
        company: "DataBridge Inc.",
        body: "The code quality is high and their review culture is thorough. For our internal LLM-powered tools, we received consistent support from PoC all the way to production.",
      },
      {
        name: "Megumi Kobayashi",
        role: "Business Planning",
        company: "Retail Next",
        body: "They dig deep when listening to business challenges and think alongside us as a partner rather than a mere contractor. They also responded quickly to operational questions after delivery.",
      },
      {
        name: "Daiki Kato",
        role: "CEO",
        company: "Smart Factory LLC",
        body: "They built an IoT data visualization dashboard in a short time. The UI prioritizes ease of use on the factory floor and has been well received — adoption exceeded our expectations.",
      },
      {
        name: "Mayu Yoshida",
        role: "Head of HR",
        company: "PeopleTech Inc.",
        body: "They overhauled our recruiting site and applicant management workflow. Our application completion rate improved, and the hiring team's workload dropped significantly.",
      },
    ],
  },

  about: {
    photoAlt: "Hira Suido — Full-Stack AI Engineer",
    name: "Hira Suido",
    nameSub: "水藤 飛来",
    role: "Full-Stack AI Engineer",
    position: "Representative Director & CEO / NOVATYNC",
    teamCount: "1 person",
    teamLabel: "Lean & elite",
    profileTitle: "Profile",
    greeting: ["Nice to meet you.", "Thank you for taking the time to read my profile."],
    intro: [
      "As a full-stack AI engineer, I take web services, SaaS, business systems, and AI products from planning and design through development and operations.",
      "What matters to me is not simply “building a system,” but shaping ideas and problems that do not yet have a form, and turning them into services people actually use.",
      "I have worked on membership and payment systems, booking and admin systems, e-commerce, AI chatbots, RAG, and workflow automation tools, among many other services.",
      "“I know what I want to build, but not where to start.”\n“I have a business idea, but I don’t know if it can be built.”\n“I want to streamline existing work with AI or software.”",
      "Even from that stage, I work through requirements, UI/UX, database design, AI adoption, payments, infrastructure, and operations after launch, putting the necessary technology in place one piece at a time.",
      "I prefer not to start with a large build. I am most effective when we ship a small MVP or proof of concept, then improve it from how real users and the business respond.",
      "I treat a client’s ideas and business information with care. For past work, I share only what can be shown within the scope of NDAs and confidentiality.",
      "For people starting a new service, bringing AI into an existing business, or turning operations into software, I want to be the technical partner they feel they can talk to first.",
      "An idea-stage conversation is welcome.",
      "This is not development for the sake of technology. I turn ideas into real services while keeping the business and the user’s outcome in view.",
    ],
    specialties: {
      title: "Areas of Expertise",
      body: [
        "I specialize in AI-powered systems that streamline operations and in web applications built for maintainability and extensibility.",
        "From MVP (minimum viable product) development through production operations, I use agile practices to deliver value quickly.",
        "I can cover a wide range of work, from launching new services to improving and rebuilding existing systems.",
      ],
      tags: [
        "AI workflow automation systems",
        "Maintainable, extensible web apps",
        "MVP to production",
        "Agile development",
        "New service launches",
        "Improving & rebuilding existing systems",
      ],
    },
    works: {
      title: "Development Track Record",
      items: [
        "AI business-support systems",
        "AI chatbots",
        "RAG search systems",
        "OCR document management systems",
        "Enterprise admin systems",
        "Membership web services",
        "SaaS products",
        "Booking management systems",
        "Payment systems",
        "Donation platforms",
        "Corporate websites",
        "Media sites",
        "Landing pages",
      ],
      portfolioLabel: "Portfolio: ",
    },
    values: {
      title: "What I Value in My Work",
      body: [
        "I value building alongside clients while thinking together about what they truly need.",
        "My proposals consider not only the technology but also the business and its operations, so that what I deliver is not “built and done” but a system that stays useful for years.",
        "I also hold myself to the following:",
      ],
      commitments: [
        "Same-day replies, as a rule",
        "Regular progress updates",
        "Deadlines strictly met",
        "Maintenance & operations support",
      ],
      concerns: ["“Our requirements aren't settled yet.”", "“We don't know where to start.”"],
      closing: [
        "Please feel free to reach out even at that stage.",
        "I'll support you carefully from the first conversation and propose the system that fits you best.",
        "I take responsibility through to the very end, and I look forward to working with you.",
      ],
      cta: "Get in touch",
    },
  },

  company: {
    title: "Company Profile",
    rows: [
      { label: "Company", value: "NOVATYNC" },
      { label: "CEO", value: "Hira Suido" },
      { label: "Business", value: "AI development, web system development, cloud infrastructure, DX support" },
      { label: "Location", value: "Japan" },
      { label: "Founded", value: "2026" },
      { label: "Employees", value: "1" },
      { label: "Work style", value: "Fully remote" },
      { label: "Coverage", value: "Japan & overseas" },
    ],
  },

  services: {
    hint: "Click a card to see the details",
    more: "View details",
    modal: {
      process: "Process",
      scope: "Scope",
      cta: "Talk to us about this service",
      close: "Close",
    },
    items: {
      ai: {
        subtitle: "",
        description: "From designing and building generative AI to integrating LLMs into your business.",
        overview:
          "Using the latest LLMs such as ChatGPT, Claude, and Gemini, we develop and integrate RAG systems, AI agents, and custom models — handled end to end, from PoC (proof of concept) to production.",
        steps: [
          "Requirements & PoC design",
          "LLM selection & architecture design",
          "RAG / fine-tuning implementation",
          "Integration into production systems",
          "Monitoring & continuous improvement",
        ],
        features: [
          "RAG system development",
          "AI agent development",
          "Fine-tuning",
          "Prompt engineering",
          "Vector DB design",
          "MLOps setup",
          "LLM evaluation infrastructure",
        ],
      },
      web: {
        subtitle: "",
        description: "We build web apps on modern frameworks that balance performance with maintainability.",
        overview:
          "Centered on modern frameworks such as React and Next.js, we develop full stack — from the frontend to backend APIs — implementing Core Web Vitals, SEO, and accessibility to a high standard.",
        steps: [
          "Requirements & tech selection",
          "UI/UX design",
          "Frontend development",
          "Backend API development",
          "Testing & QA",
          "Deployment & operations",
        ],
        features: [
          "SPA / SSR / SSG",
          "API design & development",
          "Database design",
          "E2E testing",
          "Performance optimization",
          "SEO",
          "Accessibility",
        ],
      },
      cloud: {
        subtitle: "",
        description: "From AWS and Azure infrastructure to CI/CD pipelines, we build cloud-native environments.",
        overview:
          "We design and build cloud-native infrastructure centered on AWS and Azure. With IaC via Terraform, Docker containerization, and CI/CD pipelines on GitHub Actions, we establish a stable operating foundation.",
        steps: [
          "Current-state analysis & requirements",
          "Architecture design",
          "IaC implementation (Terraform)",
          "CI/CD pipeline setup",
          "Monitoring & alerting",
          "Migration & production rollout",
        ],
        features: [
          "AWS / Azure architecture",
          "Terraform IaC",
          "Docker / Kubernetes",
          "CI/CD setup",
          "Cost optimization",
          "Security design",
          "Incident response readiness",
        ],
      },
      mobile: {
        subtitle: "",
        description: "Cross-platform iOS and Android app development that maximizes the mobile experience.",
        overview:
          "Using Flutter and React Native, we develop cross-platform apps for both iOS and Android, combining native-quality UX with high performance.",
        steps: [
          "Requirements & screen design",
          "UI design",
          "Cross-platform development",
          "Testing (iOS / Android)",
          "Store submission & release",
          "Operations & updates",
        ],
        features: [
          "Flutter / React Native",
          "Push notifications",
          "Offline support",
          "In-App Purchase",
          "Store submission support",
          "Performance optimization",
        ],
      },
      design: {
        subtitle: "",
        description: "A user-centered design process that shapes world-class experiences.",
        overview:
          "From building Figma-based design systems to user research, prototyping, and usability testing, we cover it comprehensively and deliver designs compliant with accessibility standards (WCAG 2.1).",
        steps: [
          "User research",
          "Information architecture",
          "Wireframing",
          "UI design & prototyping",
          "Usability testing",
          "Design system delivery",
        ],
        features: [
          "Figma design systems",
          "Prototyping",
          "User research",
          "Accessibility",
          "Storybook integration",
          "Component libraries",
        ],
      },
      consulting: {
        subtitle: "",
        description:
          "From technology strategy to CTO support, consulting that works alongside you at the core of your business.",
        overview:
          "From driving DX and designing technical architecture to team building and CTO support, we provide consulting that bridges technology and business — not stopping at proposals, but running with you through execution.",
        steps: [
          "Current-state analysis & problem definition",
          "Technology strategy",
          "Roadmap planning",
          "Execution support & team building",
          "KPI design & measurement",
          "Ongoing improvement support",
        ],
        features: [
          "DX enablement",
          "Technical architecture design",
          "CTO support",
          "Engineering team building",
          "Code review",
          "Hiring & training support",
          "Technology selection consulting",
        ],
      },
    },
  },

  technology: {
    title: "The Technology We Use",
    lead: "A world-class stack for scalable development.",
    flowTitle: "Development Flow",
    flow: {
      requirement: "Requirements & discovery",
      architecture: "Design & tech selection",
      design: "UI/UX design",
      development: "Frontend & backend development",
      testing: "QA & testing",
      deployment: "Release & production rollout",
      maintenance: "Operations, maintenance & improvement",
    },
  },

  works: {
    title: "Work & Case Studies",
    lead: "Browse our work, organized by technology stack.",
    searchPlaceholder: "Search by site name, URL, or stack",
    emptyTitle: "No matching projects found",
    emptyBody: "Try changing your search keywords or stack filter.",
  },

  career: {
    lead: "We're looking for people to build the future with us.",
    hint: "Pick a card to see the details of each open position.",
    types: {
      both: "Full-time / Contract",
      contract: "Contract",
    },
    positions: {
      frontend: "We're hiring frontend engineers to build world-class UIs.",
      backend: "We're hiring engineers to design and build scalable backend systems.",
      ai: "We're hiring AI engineers to integrate generative AI into real businesses.",
      cloud: "We're hiring engineers to design and operate cloud infrastructure.",
      design: "We're hiring UI designers to craft world-class user experiences.",
    },
    viewDetails: (role: string) => `View details for ${role}`,
    apply: "Apply / Contact us",
    closeBackdrop: "Click the background to close",
  },

  contact: {
    lead: "From project consultations to simple questions, feel free to reach out.",
    fields: {
      company: { label: "Company", placeholder: "NOVATYNC Inc." },
      name: { label: "Your name", placeholder: "Taro Yamada" },
      email: { label: "Email address", placeholder: "contact@example.com" },
      phone: { label: "Phone number", placeholder: "03-0000-0000" },
      message: { label: "Message", placeholder: "Tell us about your project and what you need." },
    },
    required: (label: string) => `${label} is required`,
    invalidEmail: "Please enter a valid email address",
    messageTooShort: "Please enter at least 10 characters",
    sendFailed: "Failed to send. Please try again in a moment.",
    sentTitle: "Message sent",
    sentBody: ["Thank you for contacting us.", "We will get back to you within 3 business days."],
    sendAnother: "Send another inquiry →",
    sending: "Sending...",
    submit: "Send message",
    privacy: "The information you submit is handled in accordance with our privacy policy.",
  },

  chatbot: {
    subtitle: "Questions or inquiries? Start here.",
    greeting: ["Hello. This is NOVATYNC support.", "We can guide you through our services and how to contact us."],
    quick: {
      service: "About our services",
      works: "See our work",
      contact: "Contact us",
    },
    cta: "Go to the contact form",
    open: "Open chat",
    close: "Close chat",
  },

  scrollTop: "Back to top",
};

export default en;
