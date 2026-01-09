export interface Section {
  title: string;
  description: string;
  placeholderText?: string;
  content?: string;
  image?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectNarrative {
  introduction: {
    company: string;
    industry: string;
    year: string;
    summary: string;
  };
  role: {
    title: string;
    responsibilities: string[];
  };
  challenge: {
    summary: string;
    painPoints: string[];
    constraints: string[];
    insights: string[];
  };
  approach: string[];
  outcome: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: '8020REI' | 'Habi' | 'Freelance';
  type: string;
  role: string;
  duration: string;
  tools: string[];
  tags: string[];
  thumbnailGradient: string;
  narrative: ProjectNarrative;
  images: ProjectImage[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  secondaryRole?: string;
  secondaryPeriod?: string;
  secondaryLocation?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
