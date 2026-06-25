export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  status: 'Active Prototype' | 'Iterating' | 'In Development';
  platform: 'Google AI Studio';
  features: string[];
  gradient: string;
  iconName: string;
  previewUrl?: string;
}

export interface Interest {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  highlight: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    icon: string;
  }[];
}

export interface RoadmapStep {
  number: string;
  title: string;
  description: string;
  status: 'Completed' | 'Current Focus' | 'Upcoming Goal';
  tags: string[];
}
