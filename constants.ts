import { Project, ExperienceItem, SkillGroup, Section } from './types';

// The reusable template structure required by the prompt
const CASE_STUDY_TEMPLATE: Section[] = [
  {
    title: "Project Overview",
    description: "Summary, product type, and role ownership.",
    placeholderText: "Briefly describe the product and your specific role. Was this a solo lead or team effort?"
  },
  {
    title: "Context & Problem",
    description: "Business context, user needs, and why this mattered.",
    placeholderText: "Explain the 'Why'. What was the business trying to achieve? What pain points were users facing?"
  },
  {
    title: "Goals & Success Criteria",
    description: "Business goals, user goals, and success metrics.",
    placeholderText: "List 2-3 specific KPIs or qualitative outcomes you aimed for."
  },
  {
    title: "Constraints & Challenges",
    description: "Technical, business, time, or organizational constraints.",
    placeholderText: "What made this difficult? Legacy code? Tight deadlines? Stakeholder misalignment?"
  },
  {
    title: "UX Process",
    description: "Research inputs, insights, and strategy.",
    placeholderText: "Describe the discovery phase. Did you use AI tools? Conduct interviews? Audit existing flows?"
  },
  {
    title: "Design Exploration",
    description: "IA, flows, interactions, and trade-offs.",
    placeholderText: "Show the messy middle. Wireframes, rejected ideas, and the rationale behind key decisions."
  },
  {
    title: "Final Solution",
    description: "What was built and how it improved the experience.",
    placeholderText: "Describe the shipped solution. Focus on the 'Before vs After' narrative."
  },
  {
    title: "Impact & Results",
    description: "Business and user impact.",
    placeholderText: "Quantifiable metrics (e.g., +20% conversion) or strong qualitative feedback."
  },
  {
    title: "Reflection",
    description: "Learnings and growth.",
    placeholderText: "What would you do differently? How did this project mature your perspective as a Senior Designer?"
  }
];

export const PROJECTS: Project[] = [
  // 8020REI (Priority 1)
  {
    id: "8020-dm-campaign",
    title: "DM Campaign Automation",
    subtitle: "New Product Initiative",
    category: "8020REI",
    type: "SaaS Feature • 0 to 1",
    tags: ["Product Strategy", "Automation Flow", "Complex Logic"],
    thumbnailGradient: "from-emerald-900 to-zinc-900",
    sections: CASE_STUDY_TEMPLATE
  },
  {
    id: "8020-buybox",
    title: "BuyBox Editor Redesign",
    subtitle: "Core Feature Redesign",
    category: "8020REI",
    type: "Complex Interaction Design",
    tags: ["Data Visualization", "Filtering Logic", "Legacy Redesign"],
    thumbnailGradient: "from-emerald-950 to-zinc-900",
    sections: CASE_STUDY_TEMPLATE
  },
  {
    id: "8020-property-list",
    title: "Property List & Rapid Response",
    subtitle: "Core Feature Redesign",
    category: "8020REI",
    type: "Workflow Optimization",
    tags: ["Information Density", "Efficiency", "Data Tables"],
    thumbnailGradient: "from-zinc-800 to-zinc-950",
    sections: CASE_STUDY_TEMPLATE
  },
  {
    id: "8020-kairo",
    title: "Kairo Design System",
    subtitle: "Foundational Initiative",
    category: "8020REI",
    type: "Design Systems",
    tags: ["Scalability", "Component Architecture", "Documentation"],
    thumbnailGradient: "from-blue-950 to-zinc-950",
    sections: CASE_STUDY_TEMPLATE
  },
  // Habi (Priority 2)
  {
    id: "habi-funnels",
    title: "Acquisition Funnels",
    subtitle: "Growth & Optimization",
    category: "Habi",
    type: "Growth Design",
    tags: ["Conversion Rate", "A/B Testing", "Mobile First"],
    thumbnailGradient: "from-purple-950 to-zinc-900",
    sections: CASE_STUDY_TEMPLATE
  },
  {
    id: "habi-internal",
    title: "Internal Ops Platform",
    subtitle: "Efficiency Tooling",
    category: "Habi",
    type: "Internal Tool",
    tags: ["Workflow", "Enterprise UX", "Service Design"],
    thumbnailGradient: "from-fuchsia-950 to-zinc-900",
    sections: CASE_STUDY_TEMPLATE
  },
  // Personal (Priority 3)
  {
    id: "personal-exploration",
    title: "Personal Exploration",
    subtitle: "Experimental Case Study",
    category: "Personal",
    type: "Concept",
    tags: ["Visual Design", "Interaction", "Curiosity"],
    thumbnailGradient: "from-neutral-800 to-neutral-900",
    sections: CASE_STUDY_TEMPLATE
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