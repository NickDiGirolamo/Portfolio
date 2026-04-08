import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Handshake,
  LineChart,
  MessageSquareQuote,
  Network,
  Settings2,
  Target,
  Users,
  Wrench,
} from "lucide-react";

export const siteContent = {
  person: {
    name: "Nicholas DiGirolamo",
    image: {
      src: "/nick-headshot.png",
      alt: "Professional headshot of Nicholas DiGirolamo",
    },
    headline: "Channel growth architect, commercial operator, and partnerships leader.",
    subheadline:
      "Building partnership ecosystems that drive scalable, predictable revenue.",
    description:
      "Copy designed for a senior operator shaping go-to-market strategy, channel ecosystems, and measurable commercial outcomes.",
    primaryCta: {
      label: "View Experience",
      href: "#experience",
    },
    secondaryCta: {
      label: "See Results",
      href: "#results",
    },
    tertiaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
    spotlight: [
      "Channel sales leadership",
      "Revenue acceleration",
      "Partner ecosystems",
      "Commercial systems",
    ],
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Results", href: "#results" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Wins", href: "#wins" },
    { label: "Strengths", href: "#strengths" },
    { label: "Contact", href: "#contact" },
  ],
  heroStats: [
    { value: "5+", label: "Years Leading Commercial Growth" },
    { value: "7", label: "Figure channel opportunities shaped" },
    { value: "40%", label: "YoY Revenue Growth" },
    { value: "50+", label: "Partners activated" },
  ],
  metrics: [
    {
      value: 40,
      suffix: "%",
      label: "Year-over-Year Growth",
      description: "First year leading EV Connect's Channel Sales Program",
    },
    {
      value: 42,
      prefix: "$",
      suffix: "M",
      label: "Pipeline influenced",
      description: "Structured for enterprise and strategic partner-sourced impact.",
    },
    {
      value: 58,
      suffix: "+",
      label: "Partners launched or reactivated",
      description: "Useful for channel buildout, enablement, and activation proof.",
    },
    {
      value: 31,
      suffix: "%",
      label: "Operational cycle-time improvement",
      description: "For quoting, handoff, forecasting, or process redesign outcomes.",
    },
    {
      value: 12,
      suffix: "x",
      label: "Regional coverage expansion",
      description: "Supports territory, channel density, or ecosystem scale messaging.",
    },
    {
      value: 6,
      suffix: "",
      label: "New Markets Activated",
      description: "Signals scalable expansion, cross-functional coordination, and growth beyond existing coverage.",
    },
  ],
  about: {
    eyebrow: "Executive Summary",
    title: "A commercial leader built for complex markets, ambitious growth targets, and cross-functional execution.",
    summary:
      "This section is structured for a polished executive profile. Use it to frame a career story around channel strategy, partner ecosystems, enterprise selling, and the ability to turn ambiguity into repeatable commercial systems.",
    bullets: [
      "Best at building channel programs, partner motions, and scalable go-to-market infrastructure.",
      "Solves growth problems that sit between sales, operations, product, and field execution.",
      "Leads with clarity, accountability, commercial judgment, and high standards for follow-through.",
      "Brings a rare blend of technical fluency and revenue ownership in infrastructure, energy, and technology environments.",
    ],
    highlights: [
      "Revenue strategy",
      "Partner enablement",
      "Executive communication",
      "Systems thinking",
    ],
  },
  experience: [
    {
      company: "Schneider Electric / EV Connect",
      role: "Head of National Channel Sales - EV Charging",
      logo: {
        src: "https://sunsuppv.com/wp-content/uploads/2024/12/Schneider-Electric-logo-jpg-.png",
        alt: "Schneider Electric logo",
      },
      timeframe: "Nov 2025 - Present",
      summary:
        "United States · Hybrid. Lead national go-to-market strategy for EV Connect's channel ecosystem across 60+ distributors, VARs, and solution providers.",
      achievements: [
        "Own partner engagement across go-to-market execution, pricing, enablement, and performance tracking.",
        "Lead marquee channel programs with top enterprise clients while advancing open-network EV charging adoption.",
        "Streamline partner operations through automation and tooling that improve scalability and execution.",
      ],
      impact: "Focused on helping partners win with open-network EV charging solutions that scale.",
    },
    {
      company: "EV Connect",
      role: "National Channel Sales, Senior Lead",
      logos: [
        {
          src: "https://sunsuppv.com/wp-content/uploads/2024/12/Schneider-Electric-logo-jpg-.png",
          alt: "Schneider Electric logo",
        },
        {
          src: "/ev-connect-logo.png",
          alt: "EV Connect logo",
        },
      ],
      timeframe: "Nov 2023 - Nov 2025",
      summary:
        "Los Angeles, California · Hybrid. Advanced EV charging network solutions through channel strategy, distribution management, and value-added reseller partnerships.",
      achievements: [
        "Managed and enhanced distribution channels and VAR relationships to expand market reach and improve customer outcomes.",
        "Built strategic relationships across manufacturers, utilities, and policy stakeholders to strengthen the EV charging ecosystem.",
        "Developed scalable channel systems, operational processes, and market intelligence frameworks to support growth.",
      ],
      impact: "Created the foundation for scalable channel growth and operational excellence at EV Connect.",
    },
    {
      company: "EV Connect",
      role: "Account Executive",
      logos: [
        {
          src: "https://sunsuppv.com/wp-content/uploads/2024/12/Schneider-Electric-logo-jpg-.png",
          alt: "Schneider Electric logo",
        },
        {
          src: "/ev-connect-logo.png",
          alt: "EV Connect logo",
        },
      ],
      timeframe: "Jan 2022 - Nov 2023",
      summary:
        "San Diego, California. Sold EV charging solutions across commercial, enterprise, hospitality, university, and government segments for one of the industry's leading open-network platforms.",
      achievements: [
        "Consistently exceeded sales targets and earned recognition in the 100%+ Club.",
        "Positioned EV Connect through deep product expertise, clear technical translation, and tailored customer strategy.",
        "Negotiated favorable commercial terms while helping clients design charging strategies that balanced current needs with future scalability.",
      ],
      impact: "Helped enterprise and institutional clients adopt flexible EV charging strategies with confidence.",
    },
    {
      company: "Ethos Mask",
      role: "Co-Founder, COO",
      logo: {
        src: "/ethos-mask-clean-transparent.png",
        alt: "Ethos Mask logo",
      },
      timeframe: "Feb 2020 - Jan 2022",
      summary:
        "San Diego, California. Co-founded a mission-driven venture focused on creating affordable, protective mask solutions during the COVID-19 pandemic.",
      achievements: [
        "Helped build and scale a rapid-response product and operating model during a period of urgent market need.",
        "Contributed to a COVID Innovation Award win in the 2020 Fowler Global Social Innovation Challenge.",
        "Supported the donation of thousands of masks to 20+ organizations nationwide.",
      ],
      impact: "Translated entrepreneurial execution into tangible community impact during a national crisis.",
    },
    {
      company: "University of California San Diego",
      role: "MBA Graduate Student",
      logo: {
        src: "https://logos-world.net/wp-content/uploads/2022/12/UCSD-Symbol.png",
        alt: "UC San Diego logo",
      },
      timeframe: "Sep 2019 - Jun 2021",
      summary:
        "San Diego, California. Completed an MBA while building operating experience across startups, sales, and commercialization.",
      achievements: [
        "Strengthened commercial strategy, leadership, and finance foundations during a pivotal transition into growth-oriented roles.",
      ],
      impact: "Added formal business training to an already strong execution background.",
    },
    {
      company: "Structure Tone",
      role: "Project Superintendent",
      logo: {
        src: "https://www.durasteel.net/wp-content/uploads/sites/2/2020/01/Structure-Tone-Final.png",
        alt: "Structure Tone logo",
      },
      timeframe: "Jun 2018 - Aug 2019",
      summary:
        "Greater New York City Area. Led on-site project execution in one of the country's most demanding commercial construction environments.",
      achievements: [
        "Managed more than 100,000 square feet of a project valued at over $200 million at Wells Fargo Headquarters in Hudson Yards.",
        "Became the inaugural recipient of the Structure Tone Medallion for Exceptional Performance for contributions to Comcast Technology & Innovation Tower, a project valued at over $1.2 billion.",
        "Mentored and supervised two rotational project engineers on-site.",
      ],
      impact: "Built leadership credibility by delivering under pressure on high-visibility, high-value projects.",
    },
    {
      company: "LF Driscoll",
      role: "Project Superintendent / Estimator",
      logo: {
        src: "https://www.durasteel.net/wp-content/uploads/sites/2/2020/01/Structure-Tone-Final.png",
        alt: "Structure Tone logo",
      },
      timeframe: "Jan 2018 - Jun 2018",
      summary:
        "Greater Philadelphia. Supported one of the region's most prominent construction projects through a unique cross-functional assignment.",
      achievements: [
        "Assisted cost engineers in reconciling project finances on Comcast Innovation and Technology Center.",
        "Supported project estimators in managing budgets, allowances, and cost control.",
      ],
      impact: "Deepened commercial discipline by pairing field execution with financial and estimating exposure.",
    },
    {
      company: "Structure Tone",
      role: "Rotational Project Engineer",
      logo: {
        src: "https://www.durasteel.net/wp-content/uploads/sites/2/2020/01/Structure-Tone-Final.png",
        alt: "Structure Tone logo",
      },
      timeframe: "Jul 2015 - Jun 2018",
      summary:
        "New York, New York. Completed a rotational engineering program spanning estimating, project operations, and engineering across marquee projects.",
      achievements: [
        "Worked across engineering, MEPS estimating, superintendent support, assistant project management, and special projects estimating.",
        "Contributed to projects including Boston Consulting Group NYC Headquarters, the Apple Fifth Avenue flagship store, Saturday Night Live at 30 Rockefeller Plaza, and Wells Fargo at Hudson Yards.",
      ],
      impact: "Developed the operational rigor and cross-functional range that still informs leadership today.",
    },
  ],
  caseStudies: [
    {
      brand: "Schneider Electric",
      logo: {
        src: "https://sunsuppv.com/wp-content/uploads/2024/12/Schneider-Electric-logo-jpg-.png",
        alt: "Schneider Electric logo",
      },
      title: "Scaled the Schneider Electric / EV Connect channel program into a major revenue engine",
      challenge:
        "The channel sales motion was a very small part of the company's overall go-to-market strategy and lacked the systems, process discipline, and operating structure needed to scale.",
      action:
        "Built the underlying channel infrastructure across partner segmentation, pricing frameworks, enablement, performance tracking, and operational workflows so the program could grow in a structured and repeatable way.",
      result:
        "Established a scalable channel operating model that gave leadership clearer visibility, improved partner execution, and made channel a far more central part of commercial strategy.",
      impact: "Helped grow the channel program from a miniscule part of go-to-market strategy to roughly 50% of annual sales revenue.",
    },
    {
      brand: "Ethos Mask",
      brandColor: "teal",
      logo: {
        src: "/ethos-mask-clean-transparent.png",
        alt: "Ethos Mask logo",
      },
      title: "Co-founded Ethos Mask to deliver safer, lower-waste protective equipment during COVID-19",
      challenge:
        "As the COVID-19 pandemic accelerated, protective equipment shortages exposed the need for safer, more accessible mask solutions that could be produced efficiently and deployed quickly.",
      action:
        "Co-founded Ethos Mask and helped launch an innovative 3D-printed facemask designed to improve wearer safety while drastically reducing material waste compared with conventional alternatives.",
      result:
        "Built a mission-driven operating model that enabled rapid production, broad distribution, and meaningful community support during a critical period.",
      impact: "Donated tens of thousands of masks to hospitals, first responders, and organizations across the country during the COVID-19 pandemic.",
    },
    {
      brand: "Structure Tone",
      brandColor: "blue",
      logo: {
        src: "https://www.durasteel.net/wp-content/uploads/sites/2/2020/01/Structure-Tone-Final.png",
        alt: "Structure Tone logo",
      },
      title: "Led large-scale project execution on Wells Fargo Headquarters at Hudson Yards",
      challenge:
        "One of the most prominent developments in New York City required disciplined coordination across an enormous workforce, complex scheduling demands, and high-stakes budget accountability.",
      action:
        "Served in a project management leadership role overseeing more than 200 subcontractors while driving coordination, budgeting, scheduling, and execution across a major portion of the Wells Fargo Headquarters project in Hudson Yards.",
      result:
        "Maintained structure, accountability, and progress across a highly complex construction environment where execution quality and operational discipline were critical.",
      impact: "Helped deliver a marquee project at scale while building the leadership foundation that later translated into commercial and operational roles.",
    },
  ],
  strengths: [
    {
      title: "Channel partnerships",
      description: "Builds partner ecosystems with clear segmentation, value exchange, enablement, and accountability.",
      icon: Handshake,
    },
    {
      title: "Go-to-market systems",
      description: "Turns scattered commercial effort into operating rhythms, processes, and dashboards that scale.",
      icon: Settings2,
    },
    {
      title: "Revenue leadership",
      description: "Drives growth with disciplined execution across pipeline creation, deal progression, and strategic focus.",
      icon: LineChart,
    },
    {
      title: "Cross-functional execution",
      description: "Aligns sales, ops, product, and leadership teams around decisions that move revenue forward.",
      icon: Users,
    },
    {
      title: "Technical-commercial fluency",
      description: "Explains complex infrastructure and technology solutions in language that wins executive trust.",
      icon: Wrench,
    },
    {
      title: "Executive presence",
      description: "Communicates with clarity, confidence, and judgment in high-stakes internal and external conversations.",
      icon: Target,
    },
  ],
  testimonials: [
    {
      quote:
        "Nicholas combines operator discipline with frontline commercial instincts. He sees the system, not just the deal.",
      name: "Manager Name",
      title: "Former VP of Sales",
    },
    {
      quote:
        "He brought structure, momentum, and credibility to partner conversations that had previously been inconsistent and reactive.",
      name: "Partner Name",
      title: "Strategic Channel Partner",
    },
    {
      quote:
        "One of the rare leaders who can move comfortably from technical details to executive-level commercial positioning in the same conversation.",
      name: "Peer Name",
      title: "Cross-Functional Executive Partner",
    },
  ],
  contact: {
    title: "Let’s connect around growth, partnerships, and leadership opportunities.",
    description:
      "Use this section for recruiter outreach, executive opportunities, advisory conversations, or strategic partnerships.",
    email: "NickDiGirolamo4@gmail.com",
    linkedin: "https://www.linkedin.com/in/nicholas-digirolamo/",
    resume: "#",
  },
  footer: {
    note: "Let's make things happen together",
  },
  badges: [
    { label: "Revenue Builder", icon: LineChart },
    { label: "Partner Strategist", icon: Network },
    { label: "Commercial Leader", icon: BriefcaseBusiness },
    { label: "Enterprise Credibility", icon: Building2 },
    { label: "Storytelling Operator", icon: MessageSquareQuote },
    { label: "Outcome Focused", icon: ArrowUpRight },
  ],
};

export type SiteContent = typeof siteContent;
