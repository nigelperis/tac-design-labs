import type { Work } from '../model';

export interface BannerProps {
  work: Work;
  imagePath: string;
}

export interface HighlightsProps {
  work: Work;
}

export interface MainContentProps {
  work: Work;
}

export interface ImageSliderProps {
  images: string[];
}

export interface TestimonialProps {
  work: Work;
}

export interface DetailsCarouselProps {
  images: string[];
}
