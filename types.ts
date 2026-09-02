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

export interface TeamMember {
  name: string;
  role: string;
  contribution: string;
}

export interface ProjectTeam {
  note?: string;
  members: TeamMember[];
}

export interface ProjectNarrativeChapter {
  label: string;
  title: string;
  paragraphs: string[];
  highlights?: string[];
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
  chapters?: ProjectNarrativeChapter[];
}

export interface CaseStudySnapshot {
  businessProblem: string;
  discoveryAndConstraints: string;
  keyDesignDecision: string;
  observedImpact: string;
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
  previewImageIndex?: number;
  previewImagePosition?: string;
  coverImage?: ProjectImage;
  team?: ProjectTeam;
  caseStudySnapshot?: CaseStudySnapshot;
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
