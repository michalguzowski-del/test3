import type { Metric, Partner, Article, UseCase, JobOffer, Document } from '@/types';

export const METRICS: Metric[] = [
  { id: '1', value: '30M+', label: 'Profili użytkowników', description: 'User Profiles' },
  { id: '2', value: '5B+', label: 'Zdarzeń miesięcznie', description: 'Events/Month' },
  { id: '3', value: '12', label: 'Rynków europejskich', description: 'European Markets' },
  { id: '4', value: '500+', label: 'Klientów i partnerów', description: 'Clients & Partners' },
  { id: '5', value: '99.9%', label: 'Dostępność platformy', description: 'Platform Uptime' },
  { id: '6', value: '200+', label: 'Segmentów danych', description: 'Data Segments' },
];

export const PARTNERS: Partner[] = [
  { id: '1', name: 'Google', logoText: 'Google', category: 'Technology' },
  { id: '2', name: 'Meta', logoText: 'Meta', category: 'Technology' },
  { id: '3', name: 'The Trade Desk', logoText: 'The Trade Desk', category: 'AdTech' },
  { id: '4', name: 'DV360', logoText: 'DV360', category: 'AdTech' },
  { id: '5', name: 'Xandr', logoText: 'Xandr', category: 'AdTech' },
  { id: '6', name: 'Salesforce', logoText: 'Salesforce', category: 'CRM' },
  { id: '7', name: 'Oracle', logoText: 'Oracle', category: 'Technology' },
  { id: '8', name: 'Adobe', logoText: 'Adobe', category: 'MarTech' },
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'przyszlosc-cookie-less',
    title: 'Przyszłość marketingu w świecie bez cookies third-party',
    excerpt: 'Analiza zmian w ekosystemie reklamowym po wycofaniu cookies trzecich stron przez Google Chrome.',
    date: '2024-03-15',
    category: 'Trendy',
    imageAlt: 'Cookie-less future',
  },
  {
    id: '2',
    slug: 'ai-segmentacja-danych',
    title: 'Jak AI rewolucjonizuje segmentację danych reklamowych',
    excerpt: 'Uczenie maszynowe i sztuczna inteligencja otwierają nowe możliwości precyzyjnego targetowania.',
    date: '2024-02-28',
    category: 'Technologia',
    imageAlt: 'AI data segmentation',
  },
  {
    id: '3',
    slug: 'rodo-dane-first-party',
    title: 'RODO a dane first-party: strategie dla marketerów',
    excerpt: 'Praktyczny przewodnik po zgodnym z prawem zbieraniu i wykorzystywaniu danych własnych.',
    date: '2024-02-10',
    category: 'Prawo',
    imageAlt: 'GDPR first party data',
  },
  {
    id: '4',
    slug: 'retail-media-2024',
    title: 'Retail Media 2024: Dane transakcyjne jako przewaga konkurencyjna',
    excerpt: 'Dlaczego dane zakupowe stają się najcenniejszym aktywem w ekosystemie reklamowym.',
    date: '2024-01-22',
    category: 'Retail Media',
    imageAlt: 'Retail media data',
  },
];

export const USE_CASES: UseCase[] = [
  {
    id: '1',
    title: 'Targetowanie reklamowe',
    description: 'Precyzyjne dotarcie do właściwych odbiorców w kampaniach programmatic i display.',
    icon: '🎯',
    tags: ['Programmatic', 'Display', 'Video'],
  },
  {
    id: '2',
    title: 'Personalizacja treści',
    description: 'Dostosowanie komunikacji i ofert do indywidualnych preferencji użytkowników.',
    icon: '✨',
    tags: ['E-commerce', 'CRM', 'Email'],
  },
  {
    id: '3',
    title: 'Analityka i insights',
    description: 'Głęboka analiza zachowań konsumentów i trendów rynkowych.',
    icon: '📊',
    tags: ['Analytics', 'Research', 'BI'],
  },
  {
    id: '4',
    title: 'Lookalike Audiences',
    description: 'Znajdowanie nowych klientów o podobnych profilach do najlepszych obecnych klientów.',
    icon: '👥',
    tags: ['Acquisition', 'Prospecting'],
  },
  {
    id: '5',
    title: 'Retargeting',
    description: 'Ponowne dotarcie do użytkowników, którzy wykazali zainteresowanie produktem.',
    icon: '🔄',
    tags: ['Retargeting', 'Conversion'],
  },
  {
    id: '6',
    title: 'Data Enrichment',
    description: 'Wzbogacanie własnych danych klientów o dodatkowe atrybuty i segmenty.',
    icon: '💎',
    tags: ['Enrichment', 'DMP', 'CDP'],
  },
];

export const JOB_OFFERS: JobOffer[] = [
  { id: '1', title: 'Senior Data Engineer', department: 'Technologia', location: 'Warszawa / Remote', type: 'Pełny etat' },
  { id: '2', title: 'Machine Learning Engineer', department: 'AI & Data Science', location: 'Warszawa', type: 'Pełny etat' },
  { id: '3', title: 'Product Manager — Data Platform', department: 'Produkt', location: 'Warszawa / Remote', type: 'Pełny etat' },
  { id: '4', title: 'Data Analyst', department: 'Analytics', location: 'Warszawa', type: 'Pełny etat' },
  { id: '5', title: 'Account Executive — AdTech', department: 'Sprzedaż', location: 'Warszawa', type: 'Pełny etat' },
];

export const INVESTOR_DOCS: Document[] = [
  { id: '1', title: 'Raport roczny 2023', type: 'Raport roczny', date: '2024-03-30', fileSize: '4.2 MB' },
  { id: '2', title: 'Raport Q4 2023', type: 'Raport kwartalny', date: '2024-01-15', fileSize: '1.8 MB' },
  { id: '3', title: 'Raport Q3 2023', type: 'Raport kwartalny', date: '2023-10-15', fileSize: '1.6 MB' },
  { id: '4', title: 'Strategia 2024-2026', type: 'Prezentacja', date: '2024-02-20', fileSize: '3.1 MB' },
  { id: '5', title: 'Statut spółki', type: 'Dokument prawny', date: '2023-06-01', fileSize: '0.8 MB' },
];

export const EUROPEAN_MARKETS = [
  { country: 'Polska', code: 'PL', primary: true },
  { country: 'Niemcy', code: 'DE', primary: true },
  { country: 'Francja', code: 'FR', primary: false },
  { country: 'Wielka Brytania', code: 'GB', primary: false },
  { country: 'Czechy', code: 'CZ', primary: true },
  { country: 'Słowacja', code: 'SK', primary: false },
  { country: 'Węgry', code: 'HU', primary: false },
  { country: 'Rumunia', code: 'RO', primary: false },
  { country: 'Bułgaria', code: 'BG', primary: false },
  { country: 'Austria', code: 'AT', primary: false },
  { country: 'Szwajcaria', code: 'CH', primary: false },
  { country: 'Holandia', code: 'NL', primary: false },
];
