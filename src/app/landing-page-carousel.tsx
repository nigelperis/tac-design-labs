/* eslint-disable @typescript-eslint/no-unused-vars -- componented to implemented in future */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem } from '~/components/carousel';

import landingPagePortfolioHouse1 from '~/assets/images/landing-page-portfolio-house-1.png';
import landingPagePortfolioHouse2 from '~/assets/images/landing-page-portfolio-house-2.png';
import landingPagePortfolioHouse3 from '~/assets/images/landing-page-portfolio-house-3.png';
import landingPagePortfolioHouse4 from '~/assets/images/landing-page-portfolio-house-4.png';
import landingPagePortfolioHouse5 from '~/assets/images/landing-page-portfolio-house-5.png';

import type { CarouselApi } from '~/components/carousel';

function LandingPageCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const images = [
    landingPagePortfolioHouse1,
    landingPagePortfolioHouse2,
    landingPagePortfolioHouse3,
    landingPagePortfolioHouse4,
    landingPagePortfolioHouse5,
  ] as const;

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="overflow-hidden md:hidden">
      <Carousel
        className="w-full overflow-hidden"
        style={{ maxWidth: '100%' }}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((itm) => {
            return (
              <CarouselItem key={itm.src}>
                <div className="p-1">
                  <Image
                    src={itm}
                    alt="Portfolio image"
                    className="aspect-square rounded-3xl border-[5px] border-[#F0E0D6] object-cover"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export { LandingPageCarousel };
