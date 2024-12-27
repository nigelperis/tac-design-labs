import React from 'react';
import Image from 'next/image';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import OurWorkBgButton from '~/assets/images/button-background.png';
import CanaanBgImg from '~/assets/images/canaan.jpg';
import landingPageArchitectureBackground from '~/assets/images/our-work-bg-img.png';
import WorkShopBgImg from '~/assets/images/our-work-cta-bg.jpeg';
import SanchiBgImg from '~/assets/images/saanchi.jpg';
import ShireBgImg from '~/assets/images/shire.jpg';

const OurWork = () => {
  const optimizedLandingPageArchitectureBackground =
    getOptimizedBackgroundImage({
      src: landingPageArchitectureBackground.src,
      width: landingPageArchitectureBackground.width,
      height: landingPageArchitectureBackground.height,
    });
  const optimizedWorkShopBgImg = getOptimizedBackgroundImage({
    src: WorkShopBgImg.src,
    width: WorkShopBgImg.width,
    height: WorkShopBgImg.height,
  });
  const optimizedOurWorkBgButton = getOptimizedBackgroundImage({
    src: OurWorkBgButton.src,
    width: OurWorkBgButton.width,
    height: OurWorkBgButton.height,
  });

  return (
    <div
      className="bg-[#E9D0B7] font-primary"
      style={{
        backgroundImage: optimizedLandingPageArchitectureBackground,
      }}
    >
      <div className="px-[18px] py-11 md:px-28 md:py-24">
        <div className="mb-8 md:mb-20">
          <h1 className="mb-4 text-center text-4xl text-primary-500 md:text-5xl">
            Designing <span className="text-accent-500">Spaces</span>, Shaping{' '}
            <span className="text-accent-500">Futures</span>
          </h1>
          <p className="text-center text-base text-[#173552] md:text-4xl">
            At TAC Design Lab, our portfolio reflects our dedication to
            sustainability, innovation and craftsmanship. Explore a curated
            selection of projects where thoughtful design meets environmental
            responsibility.
          </p>
        </div>
        <div className="mb-2 flex flex-wrap items-center gap-2 md:mb-20 md:flex-nowrap md:gap-10">
          <div className="w-full md:w-1/2">
            <div className="group relative aspect-[16/9] rounded-2xl border-8 border-[#F3F5E5] shadow-custom hover:cursor-pointer">
              <div className="absolute inset-0 z-10 rounded-2xl bg-[#000000] bg-opacity-40 transition delay-150 duration-300 ease-in-out group-hover:bg-opacity-0"></div>
              <Image
                src={CanaanBgImg}
                layout="fill"
                objectFit="cover"
                alt="CanaanBgImg"
                className="rounded-lg"
              />
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-2xl font-bold md:text-4xl">Canaan</p>
                <p className="text-sm text-[#FCBF89] md:text-xl">Trivandrum</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="group relative aspect-[16/9] rounded-2xl border-8 border-[#F3F5E5] shadow-custom hover:cursor-pointer">
              <div className="absolute inset-0 z-10 rounded-2xl bg-[#000000] bg-opacity-40 transition delay-150 duration-300 ease-in-out group-hover:bg-opacity-0"></div>
              <Image
                src={ShireBgImg}
                layout="fill"
                objectFit="cover"
                alt="ShireBgImg"
                className="rounded-lg"
              />
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-2xl font-bold md:text-4xl">Shire</p>
                <p className="text-sm text-[#FCBF89] md:text-xl">Udupi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-full justify-center">
          <div className="w-full md:w-1/2">
            <div className="group relative aspect-[16/9] rounded-2xl border-8 border-[#F3F5E5] hover:cursor-pointer">
              <div className="absolute inset-0 z-10 rounded-2xl bg-[#000000] bg-opacity-40 transition delay-150 duration-300 ease-in-out group-hover:bg-opacity-0"></div>
              <Image
                src={SanchiBgImg}
                layout="fill"
                objectFit="cover"
                alt="SanchiBgImg"
                className="rounded-lg"
              />
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-2xl font-bold md:text-4xl">Saanchi Bags</p>
                <p className="text-sm text-[#FCBF89] md:text-xl">Trivandrum</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="relative w-full items-center justify-center border-b-4 border-t-4 bg-cover bg-center px-1 py-8 text-white md:border-b-8 md:border-t-8 md:px-24 md:py-16"
          style={{
            backgroundImage: optimizedWorkShopBgImg,
          }}
        >
          <div className="absolute inset-0 bg-[#000000] bg-opacity-50 backdrop-blur-sm"></div>

          <div className="relative z-10 h-full items-center justify-center text-white">
            <h2 className="mb-7 text-center font-primary text-[32px] md:text-[64px]">
              WORKSHOPS: Learn, Build, Innovate
            </h2>
            <div className="text-center text-[13px] text-surface-500 md:text-[32px]">
              <p className="mb-10">
                Gain hands-on experience in sustainable construction through our
                expertly curated workshops. Explore the possibilities of bamboo,
                mud and brick while honing the skills that redefine modern
                architecture.
              </p>
              <div className="mb-8">Take the first step toward change.</div>
              <button
                className="relative rounded bg-cover bg-center p-6 text-[11px] font-bold text-primary-500 hover:bg-opacity-80 md:p-10 md:text-2xl"
                style={{
                  backgroundImage: optimizedOurWorkBgButton,
                }}
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
