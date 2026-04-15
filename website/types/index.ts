export type Locale = 'pl' | 'en';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Metric {
  id: string;
  value: string;
  unit?: string;
  label: string;
  description?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoText: string;
  category?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageAlt: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface JobOffer {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface Document {
  id: string;
  title: string;
  type: string;
  date: string;
  fileSize?: string;
}
