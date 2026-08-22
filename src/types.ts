export interface ScenarioItem {
  id: string;
  problemTitle: string;
  problemDescription: string;
  impactTag: string;
  solutionApproach: string;
  deliverables: string[];
}

export interface SubService {
  title: string;
  description: string;
}

export interface ServicePillar {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  strategicFocus: string;
  services: SubService[];
  idealFor: string[];
}

export interface ApproachStep {
  id: string;
  stepNumber: string;
  name: string;
  tagline: string;
  description: string;
  keyQuestion: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoDriveId?: string;
  credentials: string[];
  bioParagraphs: string[];
  specialties: string[];
  quote: string;
}

export interface WhyReason {
  id: string;
  title: string;
  highlight: string;
  description: string;
  contrastStatement: string;
}

export interface MethodologyStep {
  phase: string;
  title: string;
  description: string;
  outcome: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  category: 'Turismo de bienestar' | 'Gestión de destinos' | 'Marketing y comunicación' | 'Desarrollo organizacional' | 'Tendencias' | 'Casos y aprendizajes';
  title: string;
  readTime: string;
  date: string;
  summary: string;
  contentMarkdown: string;
  keyTakeaway: string;
}

export interface ContactFormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  originType: string;
  projectDescription: string;
  needCategory: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
