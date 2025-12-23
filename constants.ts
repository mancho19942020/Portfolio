import { Project, ExperienceItem, SkillGroup, Section } from './types';

// The reusable template structure required by the prompt
// The reusable template structure required by the prompt
const CASE_STUDY_TEMPLATE: Section[] = [
  {
    title: "Project Overview",
    description: "Summary, product type, and role ownership.",
    content: "Overview of the project goals and results.",
    placeholderText: "Briefly describe the product and your specific role. Was this a solo lead or team effort?"
  },
  {
    title: "Context & Problem",
    description: "Business context, user needs, and why this mattered.",
    content: "Deep dive into the problem space.",
    placeholderText: "Explain the 'Why'. What was the business trying to achieve? What pain points were users facing?"
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
    role: "Lead UX/UI Designer",
    duration: "4 Months",
    tools: ["Figma", "Gemini AI", "React Foundations"],
    tags: ["Product Strategy", "Automation Flow", "Complex Logic"],
    thumbnailGradient: "from-emerald-900 to-zinc-900",
    sections: [
      {
        title: "Project Overview",
        description: "Transforming manual direct mail into an automated engine.",
        content: "Led the design of a 'set-and-forget' automation system for real estate investors. The goal was to reduce the time spent on manual campaign creation by 80% while maintaining high personalization standards."
      },
      {
        title: "The Problem",
        description: "High friction in campaign setup.",
        content: "Users were spending hours manually filtering lists and uploading creatives. Error rates in address verification were high, leading to wasted marketing spend and lost leads."
      },
      {
        title: "The Solution",
        description: "Proactive AI-driven workflows.",
        content: "Implemented a wizard-based flow that uses AI to suggest the best performing templates based on lead demographics. Added a real-time 'heat map' of mail delivery to give investors confidence in their reach."
      },
      {
        title: "Results",
        description: "Quantifiable impact.",
        content: "Launched to 500+ beta users, resulting in a 65% increase in campaign volume and a 30% reduction in setup errors within the first 60 days."
      }
    ]
  },
  {
    id: "8020-buybox",
    title: "BuyBox Editor Redesign",
    subtitle: "Core Feature Redesign",
    category: "8020REI",
    type: "Complex Interaction Design",
    role: "Product Designer",
    duration: "3 Months",
    tools: ["Figma", "D3.js (Prototyping)"],
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
    role: "Lead UX/UI Designer",
    duration: "2 Months",
    tools: ["Figma", "UserTesting.com"],
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
    role: "Design System Lead",
    duration: "Ongoing",
    tools: ["Figma Variables", "Storybook", "React"],
    tags: ["Scalability", "Component Architecture", "Documentation"],
    thumbnailGradient: "from-blue-950 to-zinc-950",
    sections: [
      {
        title: "Foundations",
        description: "Building for scale.",
        content: "Established Kairo, a multi-brand design system designed to support three distinct SaaS products. Focused on tokenization (Figma Variables) to allow for rapid white-labeling and dark-mode toggling."
      },
      {
        title: "Component Strategy",
        description: "Atomic design principles.",
        content: "Architected a library of 40+ responsive components. Each component includes high-fidelity documentation, accessibility audits, and 'developer-handoff' blueprints."
      }
    ]
  },
  // Habi (Priority 2)
  {
    id: "habi-funnels",
    title: "Acquisition Funnels",
    subtitle: "Growth & Optimization",
    category: "Habi",
    type: "Growth Design",
    role: "Product Designer",
    duration: "10 Months",
    tools: ["Mixpanel", "Figma", "A/B Testing"],
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
    role: "Senior Product Designer",
    duration: "8 Months",
    tools: ["Figma", "Notion", "Service Blueprints"],
    tags: ["Workflow", "Enterprise UX", "Service Design"],
    thumbnailGradient: "from-fuchsia-950 to-zinc-900",
    sections: CASE_STUDY_TEMPLATE
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
    sections: CASE_STUDY_TEMPLATE
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