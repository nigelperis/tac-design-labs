'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import {
  OpacityCarousel,
  OpacityCarouselContainer,
  OpacityCarouselNextButton,
  OpacityCarouselPrevButton,
  OpacityCarouselSlide,
} from '~/components/opacity-carousel';

import type { DetailsCarouselProps } from './model';

function DetailsCarousel(props: DetailsCarouselProps) {
  const { images } = props;

  return (
    <div className="block lg:hidden">
      <OpacityCarousel className="relative max-w-[48rem]">
        <OpacityCarouselContainer>
          {images.map((itm, idx) => {
            return (
              <OpacityCarouselSlide
                key={idx}
                uniqueClass="w-full flex-shrink-0 flex-grow-0 basis-full"
              >
                <Image
                  src={itm}
                  alt="Portfolio image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-52 w-80 overflow-hidden rounded-[30px] border-[5px] border-[#EDDED4] object-cover"
                  style={{
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </OpacityCarouselSlide>
            );
          })}
        </OpacityCarouselContainer>
        <div>
          <OpacityCarouselPrevButton className="absolute left-0 top-1/2 -translate-y-1/2">
            <ChevronLeft size={32} className="text-primary-500" />
          </OpacityCarouselPrevButton>
          <OpacityCarouselNextButton className="absolute right-0 top-1/2 -translate-y-1/2">
            <ChevronRight size={32} className="text-primary-500" />
          </OpacityCarouselNextButton>
        </div>
      </OpacityCarousel>
    </div>
  );
}

export default DetailsCarousel;
