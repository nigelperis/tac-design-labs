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
  materialsAndTechniques?: BulletPoint[];
  keyFeatures: BulletPoint[];
  materialPallete?: BulletPoint[];
  functionalLayout?: BulletPoint[];
  sustainabilityMeasures?: BulletPoint[];
  culturalConsiderations?: string | BulletPoint[];
  outcome: string;
  testimonial: string;
  testimonialVideo: string;
  admiration: string;
  featuredVideos?: FeaturedVideo[];
  callToAction: CallToAction;
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

export interface FeaturedVideo {
  title: string;
  description: string;
  video: string;
}

export interface CallToAction {
  title: string;
  nextWorkTitle: string;
  nextWorkLocation: string;
  nextWorkLink: string;
  nextWorkImage: string;
  nextWorkViewImage: string;
}
