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

import landingPagePortfolioHouse1 from '~/assets/images/landing-page-portfolio-house-1.png';
import landingPagePortfolioHouse2 from '~/assets/images/landing-page-portfolio-house-2.png';
import landingPagePortfolioHouse3 from '~/assets/images/landing-page-portfolio-house-3.png';
import landingPagePortfolioHouse4 from '~/assets/images/landing-page-portfolio-house-4.png';
import landingPagePortfolioHouse5 from '~/assets/images/landing-page-portfolio-house-5.png';

function LandingPageCarousel() {
  const images = [
    landingPagePortfolioHouse1,
    landingPagePortfolioHouse2,
    landingPagePortfolioHouse3,
    landingPagePortfolioHouse4,
    landingPagePortfolioHouse5,
  ] as const;

  return (
    <div className="md:hidden">
      <OpacityCarousel className="relative max-w-[48rem]">
        <OpacityCarouselContainer>
          {images.map((itm) => {
            return (
              <OpacityCarouselSlide key={itm.src}>
                <Image
                  src={itm}
                  alt="Portfolio image"
                  className="h-52 w-80 overflow-hidden rounded-[30px] border-[5px] border-[#EDDED4] object-cover"
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
        <OpacityCarouselIndicator>
          {(activeIndex) => {
            return (
              <div className="mt-4 flex justify-center">
                {images.map((_, index) => {
                  return (
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
                  );
                })}
              </div>
            );
          }}
        </OpacityCarouselIndicator>
      </OpacityCarousel>
    </div>
  );
}

export { LandingPageCarousel };
