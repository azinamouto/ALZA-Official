export type PageRoute = 'home' | 'services' | 'work' | 'approach' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detailedPoints: string[];
  operationalProblemsSolved: string[];
  deliverables: string[];
  iconName: 'Code' | 'Building2' | 'Network' | 'BarChart3';
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  summary: string;
  verifiedStatus: 'Active Development' | 'Internal Tool' | 'Government Initiative Pilot';
  statusDescription: string;
  context: string;
  problemSolved: string;
  technicalFoundation: string[];
  keyCapabilities: string[];
  architecturalHighlights: string;
  confidentialityNote?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  focus: string;
  summary: string;
}

export interface ProcessStage {
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  disciplines: string[];
}

export interface InquiryFormData {
  fullName: string;
  organization: string;
  email: string;
  serviceInterest: string;
  projectDescription: string;
  timeline: string;
  estimatedBudget: string;
  agreeToPrivacy: boolean;
}
