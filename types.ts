export interface Section {
  title: string;
  description: string;
  placeholderText?: string;
  content?: string;
  image?: string;
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
  sections: Section[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}