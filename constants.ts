import { Project, ExperienceItem, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  // 8020REI (Priority 1)
  {
    id: "8020-dm-campaign",
    title: "DM campaign",
    subtitle: "New Product Initiative",
    category: "8020REI",
    type: "SaaS Feature • 0 to 1",
    role: "Lead UX/UI Designer",
    duration: "4 Months",
    tools: ["Figma", "Gemini AI", "React Foundations"],
    tags: ["Product Strategy", "Automation Flow", "Complex Logic"],
    thumbnailGradient: "from-emerald-900 to-zinc-900",
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2024",
        summary: "8020REI helps real-estate investors run data-driven outreach. This project created a set-and-forget direct mail automation that removed hours of manual setup, preserved personalization, and scaled campaign volume."
      },
      role: {
        title: "Lead UX/UI Designer",
        responsibilities: [
          "Owned product strategy and UX direction for the automation flow",
          "Translated complex rules into a guided, human-readable wizard",
          "Partnered with PM and engineering on feasibility and beta rollout",
          "Defined validation, error handling, and system feedback states"
        ]
      },
      challenge: {
        summary: "Campaign creation was manual, error-prone, and lacked confidence-building feedback.",
        painPoints: [
          "Hours spent filtering lists and uploading creatives",
          "High address verification error rates",
          "Low trust in deliverability and timing"
        ],
        constraints: [
          "Legacy data model and vendor integrations",
          "Postal compliance rules and variable lead data quality",
          "Limited engineering bandwidth for the beta window"
        ],
        insights: [
          "Investors trusted automation only when visibility was high",
          "Template guidance reduced decision fatigue",
          "Progressive disclosure improved completion rates"
        ]
      },
      approach: [
        "Designed a step-by-step campaign builder that surfaced only the next best action",
        "Introduced AI-assisted template recommendations with explainable rationale",
        "Built a delivery heat map to visualize coverage and gaps in real time",
        "Added smart defaults and validation to prevent costly setup errors"
      ],
      outcome: [
        "Launched to 500+ beta users within 60 days",
        "65% increase in campaign volume after release",
        "30% reduction in setup errors",
        "Manual setup time reduced by ~80%"
      ]
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
        alt: "Campaign performance dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
        alt: "Automation analytics overview"
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
        alt: "Data visualization detail"
      },
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
        alt: "Team planning session"
      }
    ]
  },
  {
    id: "8020-buybox",
    title: "Buybox editor redesign",
    subtitle: "Core Feature Redesign",
    category: "8020REI",
    type: "Complex Interaction Design",
    role: "Product Designer",
    duration: "3 Months",
    tools: ["Figma", "D3.js (Prototyping)"],
    tags: ["Data Visualization", "Filtering Logic", "Legacy Redesign"],
    thumbnailGradient: "from-emerald-950 to-zinc-900",
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2024",
        summary: "Redesigned the BuyBox editor to help investors define acquisition criteria with clarity and speed. The project focused on turning a dense rules engine into an intuitive, visual builder."
      },
      role: {
        title: "Product Designer",
        responsibilities: [
          "Led interaction design and information architecture",
          "Prototyped complex filtering behaviors for validation",
          "Aligned product, engineering, and research on scope"
        ]
      },
      challenge: {
        summary: "The legacy editor was powerful but opaque, leading to frequent misconfigurations.",
        painPoints: [
          "Hard-to-debug filter logic and unclear dependencies",
          "Overwhelming density for new users",
          "Limited feedback on rule impacts"
        ],
        constraints: [
          "Backward compatibility with existing rule sets",
          "Performance limits for large data sets",
          "Strict timeline tied to quarterly growth goals"
        ],
        insights: [
          "Users prefer visual grouping over long field lists",
          "Previewing results reduces trial-and-error loops",
          "Defaults and presets increase adoption"
        ]
      },
      approach: [
        "Rebuilt the editor into modular, collapsible rule groups",
        "Added a live preview panel that surfaced estimated match counts",
        "Introduced saved presets and a guided onboarding path",
        "Simplified language to match investor mental models"
      ],
      outcome: [
        "Shortened time to create a valid BuyBox",
        "Increased adoption of advanced filters",
        "Reduced support tickets tied to misconfigured rules"
      ]
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
        alt: "Complex filter configuration interface"
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
        alt: "Productivity workspace"
      },
      {
        src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
        alt: "Design iteration review"
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        alt: "Engineering collaboration"
      }
    ]
  },
  {
    id: "8020-property-list",
    title: "Property list",
    subtitle: "Core Feature Redesign",
    category: "8020REI",
    type: "Workflow Optimization",
    role: "Lead UX/UI Designer",
    duration: "2 Months",
    tools: ["Figma", "UserTesting.com"],
    tags: ["Information Density", "Efficiency", "Data Tables"],
    thumbnailGradient: "from-zinc-800 to-zinc-950",
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2024",
        summary: "Reimagined the property list and rapid response workflow so investors could scan leads faster and act with confidence. The goal was to reduce the time from lead arrival to first outreach."
      },
      role: {
        title: "Lead UX/UI Designer",
        responsibilities: [
          "Redesigned the data table and prioritization model",
          "Defined interaction patterns for rapid triage",
          "Ran usability testing to validate speed gains"
        ]
      },
      challenge: {
        summary: "Investors were overwhelmed by dense tables and slow actions.",
        painPoints: [
          "Critical lead signals were buried in rows",
          "Too many clicks to send first outreach",
          "Limited visibility into response status"
        ],
        constraints: [
          "Large datasets with slow load times",
          "Multiple user personas sharing the same view",
          "Existing analytics pipeline dependencies"
        ],
        insights: [
          "Users prioritize urgency over completeness",
          "Inline actions outperform bulk menus",
          "Status visibility drives follow-up confidence"
        ]
      },
      approach: [
        "Introduced priority scoring and visual tiers for lead urgency",
        "Streamlined row-level actions with quick response CTAs",
        "Added compact status chips for at-a-glance progress",
        "Reduced cognitive load with smart column defaults"
      ],
      outcome: [
        "Faster lead triage during usability testing",
        "Higher engagement with rapid response actions",
        "Improved perceived clarity in dense tables"
      ]
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
        alt: "Operational dashboard review"
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
        alt: "Lead management analytics"
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
        alt: "Lead pipeline metrics"
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
        alt: "Team working session"
      }
    ]
  },
  {
    id: "8020-kairo",
    title: "Kairo design system",
    subtitle: "Foundational Initiative",
    category: "8020REI",
    type: "Design Systems",
    role: "Design System Lead",
    duration: "Ongoing",
    tools: ["Figma Variables", "Storybook", "React"],
    tags: ["Scalability", "Component Architecture", "Documentation"],
    thumbnailGradient: "from-blue-950 to-zinc-950",
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "Design Systems",
        year: "2024",
        summary: "Built Kairo, a multi-brand design system to power three SaaS products with shared foundations and distinct visual skins. The initiative reduced design debt and accelerated delivery."
      },
      role: {
        title: "Design System Lead",
        responsibilities: [
          "Defined token architecture and component standards",
          "Partnered with engineering to align Figma and Storybook",
          "Created documentation and contribution workflows"
        ]
      },
      challenge: {
        summary: "Teams were duplicating UI patterns and shipping inconsistent experiences.",
        painPoints: [
          "Inconsistent components across products",
          "Slow design-to-dev handoff",
          "Difficult to support brand variations"
        ],
        constraints: [
          "Multiple products with different audiences",
          "Limited bandwidth for refactors",
          "Need to support legacy UI during transition"
        ],
        insights: [
          "Token-driven theming unlocks fast white-labeling",
          "Clear contribution rules reduce system drift",
          "Shared primitives speed up new feature builds"
        ]
      },
      approach: [
        "Established a token-based foundation using Figma Variables",
        "Built a core library of responsive, accessible components",
        "Created usage guidelines and review workflows",
        "Aligned Storybook with design source of truth"
      ],
      outcome: [
        "Improved consistency across three product lines",
        "Faster UI delivery through reusable components",
        "Reduced design debt and ad-hoc variants"
      ]
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
        alt: "Design system components"
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
        alt: "Design toolkit workspace"
      },
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
        alt: "Documentation review session"
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        alt: "Component development"
      }
    ]
  },
  // Habi (Priority 2)
  {
    id: "habi-funnels",
    title: "Smart funnel",
    subtitle: "Growth & Optimization",
    category: "Habi",
    type: "Growth Design",
    role: "Product Designer",
    duration: "10 Months",
    tools: ["Mixpanel", "Figma", "A/B Testing"],
    tags: ["Conversion Rate", "A/B Testing", "Mobile First"],
    thumbnailGradient: "from-purple-950 to-zinc-900",
    narrative: {
      introduction: {
        company: "Habi",
        industry: "PropTech",
        year: "2023",
        summary: "Optimized Habi's acquisition funnels to improve buyer and seller conversion across mobile-first journeys. The work focused on trust signals, drop-off reduction, and localized growth."
      },
      role: {
        title: "Product Designer",
        responsibilities: [
          "Owned funnel UX from landing to qualification",
          "Instrumented experiments with analytics partners",
          "Collaborated with marketing on localized messaging"
        ]
      },
      challenge: {
        summary: "Lead qualification rates lagged behind growth targets.",
        painPoints: [
          "Sharp drop-offs on generic forms",
          "Low trust on mobile touchpoints",
          "Inconsistent messaging across cities"
        ],
        constraints: [
          "Fast iteration cycle with weekly experiments",
          "Multiple locales with different trust signals",
          "Legacy CMS limitations"
        ],
        insights: [
          "City-specific trust markers improve completion",
          "Clear value propositions reduce bounce rates",
          "Fewer fields increase intent capture"
        ]
      },
      approach: [
        "Redesigned landing pages with focused value props",
        "Added localized trust badges and MLS signals",
        "Simplified forms with progressive profiling",
        "Partnered on A/B testing to validate copy and layout"
      ],
      outcome: [
        "Higher qualified-lead rates in pilot markets",
        "Reduced mobile drop-offs across key steps",
        "Stronger alignment between marketing and product"
      ]
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1559027615-5c6a1a234d8b?auto=format&fit=crop&w=1400&q=80",
        alt: "Mobile user experience"
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
        alt: "Funnel performance analytics"
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
        alt: "Conversion dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
        alt: "Growth team collaboration"
      }
    ]
  },
  {
    id: "habi-internal",
    title: "Internal OPS",
    subtitle: "Efficiency Tooling",
    category: "Habi",
    type: "Internal Tool",
    role: "Senior Product Designer",
    duration: "8 Months",
    tools: ["Figma", "Notion", "Service Blueprints"],
    tags: ["Workflow", "Enterprise UX", "Service Design"],
    thumbnailGradient: "from-fuchsia-950 to-zinc-900",
    narrative: {
      introduction: {
        company: "Habi",
        industry: "Internal Tools",
        year: "2023",
        summary: "Designed an internal ops platform that unified task management, case tracking, and communication for field teams. The goal was to reduce handoff friction and increase operational clarity."
      },
      role: {
        title: "Senior Product Designer",
        responsibilities: [
          "Mapped service workflows across departments",
          "Designed end-to-end UX for operations teams",
          "Facilitated cross-functional alignment sessions"
        ]
      },
      challenge: {
        summary: "Operations teams relied on fragmented tools and manual tracking.",
        painPoints: [
          "Duplicated data across spreadsheets",
          "Unclear ownership during handoffs",
          "Limited visibility into case status"
        ],
        constraints: [
          "Complex process differences by region",
          "Strict access control requirements",
          "Need to onboard teams quickly"
        ],
        insights: [
          "Unified timelines reduce follow-up errors",
          "Role-based views speed up daily workflows",
          "Status clarity builds stakeholder trust"
        ]
      },
      approach: [
        "Created a shared case timeline with role-based visibility",
        "Standardized intake and handoff flows across teams",
        "Introduced notification rules to surface next actions",
        "Documented service blueprints for long-term scaling"
      ],
      outcome: [
        "Reduced operational handoff friction",
        "Higher confidence in case tracking",
        "Improved onboarding for new ops staff"
      ]
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
        alt: "Operations workflow overview"
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
        alt: "Internal dashboard analytics"
      },
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
        alt: "Ops team planning"
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        alt: "Platform development"
      }
    ]
  },
  // Freelance (Priority 3)
  {
    id: "freelance-1",
    title: "Freelance 1",
    subtitle: "Project Description Placeholder",
    category: "Freelance",
    type: "Web Design",
    role: "Lead Designer",
    duration: "1 Month",
    tools: ["Figma", "Webflow"],
    tags: ["UI Design", "Branding"],
    thumbnailGradient: "from-zinc-800 to-zinc-900",
    narrative: {
      introduction: {
        company: "Independent Client",
        industry: "Commercial Web",
        year: "2022",
        summary: "Delivered a new marketing site for a commercial services brand, focusing on clarity, trust, and lead capture. The redesign modernized the visual system and improved conversion readiness."
      },
      role: {
        title: "Lead Designer",
        responsibilities: [
          "Led discovery, visual design, and UI system",
          "Defined content hierarchy and conversion paths",
          "Collaborated with development on Webflow build"
        ]
      },
      challenge: {
        summary: "The existing site lacked credibility and clear pathways to inquiry.",
        painPoints: [
          "Outdated visuals and inconsistent branding",
          "Unclear service differentiation",
          "Low-quality lead capture experience"
        ],
        constraints: [
          "Tight budget and aggressive timeline",
          "Limited content inventory",
          "Need to preserve SEO value"
        ],
        insights: [
          "Stronger proof points increase trust quickly",
          "Simplified navigation reduces bounce",
          "Clear primary CTA improves lead intent"
        ]
      },
      approach: [
        "Rebuilt information architecture around priority services",
        "Created a modular visual system for fast page assembly",
        "Designed conversion-focused hero and case study sections",
        "Partnered on launch QA and performance checks"
      ],
      outcome: [
        "Modernized brand perception",
        "Cleaner funnel from landing to inquiry",
        "Reusable components for future content updates"
      ]
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
        alt: "Marketing site design"
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
        alt: "Client collaboration"
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
        alt: "Visual identity exploration"
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        alt: "Site build review"
      }
    ]
  },
  {
    id: "freelance-2",
    title: "Freelance 2",
    subtitle: "Project Description Placeholder",
    category: "Freelance",
    type: "App Design",
    role: "Product Designer",
    duration: "2 Months",
    tools: ["Figma", "React Native"],
    tags: ["Mobile", "UX"],
    thumbnailGradient: "from-zinc-900 to-zinc-800",
    narrative: {
      introduction: {
        company: "Independent Client",
        industry: "Consumer App",
        year: "2021",
        summary: "Designed a mobile-first product concept focused on habit tracking and lightweight coaching. The project balanced playful visual design with a clear onboarding flow."
      },
      role: {
        title: "Product Designer",
        responsibilities: [
          "Defined onboarding, core flows, and UI patterns",
          "Produced high-fidelity prototypes for stakeholder demos",
          "Collaborated with engineering on React Native handoff"
        ]
      },
      challenge: {
        summary: "The product needed to feel motivating without adding friction.",
        painPoints: [
          "Drop-offs during onboarding",
          "Limited clarity on daily actions",
          "Overly dense tracking screens"
        ],
        constraints: [
          "Small team with limited development resources",
          "Need to ship an MVP quickly",
          "Multiple feature ideas with no prioritization"
        ],
        insights: [
          "Short onboarding increases first-week retention",
          "Daily prompts outperform long forms",
          "Clear progress visualization improves engagement"
        ]
      },
      approach: [
        "Streamlined onboarding to a three-step flow",
        "Built a simple daily check-in and streak mechanic",
        "Used visual progress cards to reinforce momentum",
        "Defined an MVP roadmap with phased feature rollout"
      ],
      outcome: [
        "Stronger prototype clarity for fundraising demos",
        "Faster iteration cycle for MVP scope",
        "Foundation for a cohesive mobile design system"
      ]
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1559027615-5c6a1a234d8b?auto=format&fit=crop&w=1400&q=80",
        alt: "Mobile app experience"
      },
      {
        src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
        alt: "Mobile UI exploration"
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
        alt: "Prototype review"
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
        alt: "Engagement metrics sketch"
      }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "8020REI",
    role: "Lead UX/UI Designer",
    period: "Jun 2024 – Present",
    location: "Remote, Miami, FL",
    description: [
      "Leading UX/UI across a real-estate data platform, managing the Kairo Design System.",
      "Conducting research with Customer Success and Product to validate complex workflows.",
      "Leveraging AI (Gemini, ChatGPT) for research synthesis and UX audits."
    ]
  },
  {
    company: "Habi",
    role: "Product Designer",
    period: "Aug 2023 – Jun 2024",
    location: "Bogotá, Colombia",
    description: [
      "Designed and optimized acquisition funnels and internal platforms.",
      "Partnered with engineers to improve workflow efficiency.",
      "Introduced AI-driven ideation to accelerate iterations."
    ]
  },
  {
    company: "Habi",
    role: "Creative Designer",
    period: "Aug 2022 – Aug 2023",
    location: "Bogotá, Colombia",
    description: [
      "Developed brand and marketing materials across multiple verticals.",
      "Ensured visual consistency across campaigns and landing pages."
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Core Strategy",
    items: ["Design Systems (Kairo)", "UX Research", "Product Discovery", "UX Strategy", "Information Architecture"]
  },
  {
    category: "AI & Tools",
    items: ["ChatGPT & Gemini", "Cursor (Prototyping)", "Figma", "Heap Analytics", "Jira", "Notion"]
  },
  {
    category: "Technical",
    items: ["Frontend Foundations (HTML/CSS)", "Agile/Scrum", "Data Visualization", "Accessibility"]
  }
];
