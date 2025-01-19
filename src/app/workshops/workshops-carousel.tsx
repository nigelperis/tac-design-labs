'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import {
  OpacityCarousel,
  OpacityCarouselContainer,
  OpacityCarouselIndicator,
  OpacityCarouselNextButton,
  OpacityCarouselPrevButton,
  OpacityCarouselSlide,
} from '~/components/opacity-carousel';

import { cn } from '~/utils/cn';

import type { StaticImageData } from 'next/image';

interface CarouselProps {
  images: { src: string | StaticImageData; alt?: string }[];
  className?: string;
}

const WorkshopsMobileCarousel: React.FC<CarouselProps> = ({
  images,
  className,
}) => {
  return (
    <div className={cn('md:hidden', className)}>
      <OpacityCarousel className="relative mx-[-1rem] max-w-[48rem] pb-4">
        <OpacityCarouselContainer>
          {images.map((image, index) => (
            <OpacityCarouselSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt ?? 'Carousel image'}
                className="h-[300px] w-[300px] overflow-hidden rounded-[30px] border-[5px] border-[#EDDED4] object-cover"
                style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                }}
              />
            </OpacityCarouselSlide>
          ))}
        </OpacityCarouselContainer>
        <div>
          <OpacityCarouselPrevButton className="absolute left-0 top-1/2 -translate-y-1/2">
            <ChevronLeft size={32} className="text-primary-500" />
          </OpacityCarouselPrevButton>
          <OpacityCarouselNextButton className="absolute right-0 top-1/2 -translate-y-1/2">
            <ChevronRight size={32} className="text-primary-500" />
          </OpacityCarouselNextButton>
        </div>
        <OpacityCarouselIndicator>
          {(activeIndex) => (
            <div className="mt-4 flex justify-center">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    'mx-1 size-2 origin-left rounded-full border border-primary-500 opacity-50 transition-all duration-200 ease-out',
                    {
                      'w-4 rounded-3xl bg-primary-500 opacity-100':
                        index === activeIndex,
                    },
                  )}
                />
              ))}
            </div>
          )}
        </OpacityCarouselIndicator>
      </OpacityCarousel>
    </div>
  );
};

export { WorkshopsMobileCarousel };
