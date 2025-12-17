export interface Section {
  title: string;
  description: string;
  placeholderText: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: '8020REI' | 'Habi' | 'Personal';
  type: string; // e.g., "SaaS Product" or "Design System"
  tags: string[];
  thumbnailGradient: string; // CSS gradient string for abstract thumb
  sections: Section[]; // The structure for the case study
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