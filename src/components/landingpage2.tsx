'use client';

import React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
// import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import CanaanBgImg from '~/assets/images/canaan.jpg';
import HavenBgImg from '~/assets/images/haven.jpg';
import SanchiBgImg from '~/assets/images/sanchi.jpg';
import ShireBgImg from '~/assets/images/shire.jpg';

import './embla.css';

const images = [
  { src: SanchiBgImg, name: 'Sanchi Bags', place: 'Trivandrum' },
  { src: ShireBgImg, name: 'Shire', place: 'Udupi' },
  { src: CanaanBgImg, name: 'Canaan', place: 'Trivandrum' },
  { src: HavenBgImg, name: 'Haven', place: 'Manvilla' },
] as const;

const WorksCarousel = () => {
  // const OPTIONS: EmblaOptionsType = { loop: true };
  // const SLIDE_COUNT = 5;
  // const slides = Array.from(Array(SLIDE_COUNT).keys());
  // const { slides } = props;
  // const OPTIONS: EmblaOptionsType = { loop: true };

  const [emblaRef] = useEmblaCarousel(
    {
      align: 'center',
      loop: true,
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <section className="embla font-primary">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))} */}
          {images.map((itm, index) => {
            return (
              <div className="embla__slide cursor-pointer p-1" key={index}>
                <div className="w-full">
                  <div className="group relative aspect-[16/9] transform rounded-lg border-2 border-[#F3F5E5] shadow-custom md:rounded-2xl md:border-4">
                    <div className="absolute inset-0 z-10 rounded-lg bg-gradient-to-t from-[#000000] to-transparent opacity-70 mix-blend-multiply transition delay-150 duration-300 ease-in-out group-hover:opacity-20 md:rounded-2xl"></div>
                    <Image
                      src={itm.src}
                      layout="fill"
                      objectFit="cover"
                      alt="SanchiBgImg"
                      className="rounded-md md:rounded-xl"
                    />
                    <div className="absolute bottom-3 left-4 z-20 text-white">
                      <p className="text-2xl font-bold tracking-widest md:text-4xl lg:text-[42px]">
                        {itm.name}
                      </p>
                      <p className="text-base text-[#FCBF89] md:text-lg lg:text-xl xl:text-2xl">
                        {itm.place}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <Image
                  src={itm}
                  alt="Portfolio image"
                  className="aspect-square rounded-lg border-[5px] border-[#F0E0D6] object-cover lg:h-[300px]"
                /> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorksCarousel;
