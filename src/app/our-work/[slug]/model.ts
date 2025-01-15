export enum Work {
  HAVEN = 'haven',
  CANAAN = 'canaan',
  SHIRE = 'shire',
  SANCHIBAGS = 'sanchi-bags',
}

interface BulletPoint {
  title: string;
  description: string;
}

export interface WorkDetails {
  title: string;
  subTitle: string;
  location: string;
  completionYear: string;
  area: string;
  duration: string;
  budget: string;
  overview: string;
  designIntent: string;
  keyFeatures: BulletPoint[];
  materialPallete?: BulletPoint[];
  functionalLayout?: BulletPoint[];
  sustainabilityMeasures?: BulletPoint[];
  culturalConsiderations?: string;
  outcome: string;
  testimonial: string;
  admiration: string;
}

export interface PageParams {
  params: Promise<{
    slug: Work;
  }>;
}

export interface WorkImages {
  [Work.HAVEN]: string[];
  [Work.CANAAN]: string[];
  [Work.SHIRE]: string[];
  [Work.SANCHIBAGS]: string[];
}
