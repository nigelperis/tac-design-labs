import React from 'react';
import Image from 'next/image';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import OurWorkBgButton from '~/assets/images/button-background.png';
import CanaanBgImg from '~/assets/images/canaan.jpg';
import HavenBgImg from '~/assets/images/haven.jpg';
import landingPageArchitectureBackground from '~/assets/images/our-work-bg-img.png';
import WorkShopBgImg from '~/assets/images/our-work-cta-bg.jpeg';
import SanchiBgImg from '~/assets/images/sanchi.jpg';
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
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="w-full md:w-[48%] lg:w-[45%] xl:w-[40%]">
            <div className="group relative aspect-[16/9] transform rounded-2xl border-8 border-[#F3F5E5] shadow-custom transition-transform duration-300 ease-out hover:scale-105 hover:cursor-pointer">
              <div className="absolute inset-0 z-10 rounded-2xl bg-[#000000] bg-opacity-40 transition delay-150 duration-300 ease-in-out group-hover:bg-opacity-0"></div>
              <Image
                src={CanaanBgImg}
                layout="fill"
                objectFit="cover"
                alt="CanaanBgImg"
                className="rounded-lg"
              />
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-3xl font-bold md:text-5xl">Canaan</p>
                <p className="text-base text-[#FCBF89] md:text-lg xl:text-xl">
                  Trivandrum
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-[45%] xl:w-[40%]">
            <div className="group relative aspect-[16/9] transform rounded-2xl border-8 border-[#F3F5E5] shadow-custom transition-transform duration-300 ease-out hover:scale-105 hover:cursor-pointer">
              <div className="absolute inset-0 z-10 rounded-2xl bg-[#000000] bg-opacity-40 transition delay-150 duration-300 ease-in-out group-hover:bg-opacity-0"></div>
              <Image
                src={ShireBgImg}
                layout="fill"
                objectFit="cover"
                alt="ShireBgImg"
                className="rounded-lg"
              />
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-3xl font-bold md:text-5xl">Shire</p>
                <p className="text-base text-[#FCBF89] md:text-lg xl:text-xl">
                  Udupi
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-[45%] xl:w-[40%]">
            <div className="group relative aspect-[16/9] transform rounded-2xl border-8 border-[#F3F5E5] shadow-custom transition-transform duration-300 ease-out hover:scale-105 hover:cursor-pointer">
              <div className="absolute inset-0 z-10 rounded-2xl bg-[#000000] bg-opacity-40 transition delay-150 duration-300 ease-in-out group-hover:bg-opacity-0"></div>
              <Image
                src={SanchiBgImg}
                layout="fill"
                objectFit="cover"
                alt="SanchiBgImg"
                className="rounded-lg"
              />
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-3xl font-bold md:text-5xl">Sanchi Bags</p>
                <p className="text-base text-[#FCBF89] md:text-lg xl:text-xl">
                  Trivandrum
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-[45%] xl:w-[40%]">
            <div className="group relative aspect-[16/9] transform rounded-2xl border-8 border-[#F3F5E5] shadow-custom transition-transform duration-300 ease-out hover:scale-105 hover:cursor-pointer">
              <div className="absolute inset-0 z-10 rounded-2xl bg-[#000000] bg-opacity-40 transition delay-150 duration-300 ease-in-out group-hover:bg-opacity-0"></div>
              <Image
                src={HavenBgImg}
                layout="fill"
                objectFit="cover"
                alt="HavenBgImg"
                className="rounded-lg"
              />
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-3xl font-bold md:text-5xl">Haven</p>
                <p className="text-base text-[#FCBF89] md:text-lg xl:text-xl">
                  Manvilla
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr className="mx-auto w-full border-t-4 border-white md:border-t-8"></hr>
        <div
          className="relative w-full items-center justify-center bg-cover bg-center px-1 py-8 text-white md:px-24 md:py-16"
          style={{
            backgroundImage: optimizedWorkShopBgImg,
          }}
        >
          <div className="absolute inset-0 bg-[#000000] bg-opacity-50 backdrop-blur-sm"></div>

          <div className="relative z-10 h-full items-center justify-center text-white">
            <h2 className="mb-7 text-center font-primary text-[32px] md:text-[64px]">
              <span className="font-bold">Workshops:</span> Learn, Build,
              Innovate
            </h2>
            <div className="text-center text-[16px] text-surface-500 md:text-[32px]">
              <p className="mb-10">
                Gain hands-on experience in sustainable construction through our
                expertly curated workshops. Explore the possibilities of bamboo,
                mud and brick while honing the skills that redefine modern
                architecture.
              </p>
              <div className="mb-8">Take the first step toward change.</div>
              <button
                className="relative rounded bg-cover bg-center p-6 text-[11px] font-bold text-primary-500 duration-200 hover:scale-105 hover:bg-opacity-80 md:p-10 md:text-2xl"
                style={{
                  backgroundImage: optimizedOurWorkBgButton,
                }}
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
        <hr className="mx-auto w-full border-t-4 border-white md:border-t-8"></hr>
      </div>
    </div>
  );
};

export default OurWork;
