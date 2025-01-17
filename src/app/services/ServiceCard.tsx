'use client';

import React from 'react';
import Image from 'next/image';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import OurWorkBgButton from '~/assets/images/button-background.png';
import designDreamDeliverBG from '~/assets/images/design-dream-deliver-bg.jpg';

import { ServiceCardInfo } from './page';

export const ServiceCard = ({ service }: { service: ServiceCardInfo }) => {
  const optimizedBG = getOptimizedBackgroundImage({
    src: designDreamDeliverBG.src,
    width: designDreamDeliverBG.width,
    height: designDreamDeliverBG.height,
  });
  const optimizedOurWorkBgButton = getOptimizedBackgroundImage({
    src: OurWorkBgButton.src,
    width: OurWorkBgButton.width,
    height: OurWorkBgButton.height,
  });
  return (
    <>
      <div className="flex flex-col rounded-[22px] bg-white bg-opacity-[40%] shadow-sm md:flex-row xl:max-w-screen-xl">
        <div className="aspect-square h-auto w-full p-5 md:h-auto md:w-1/3 md:p-2">
          <Image
            src={service.image}
            alt={service.title}
            className="h-full w-full rounded-[22px] border-4 border-[#ECC19A] object-cover"
            width={500}
            height={500}
            style={{
              boxShadow: '0px 4px 4px 0px #00000040',
            }}
          />
        </div>
        {/* Info Section */}
        <div className="-mt-5 ml-2 flex flex-col justify-center p-4 lg:w-1/2">
          <h3 className="mb-2 font-primary text-[20px] font-bold text-[#552B0A] md:text-[32px]">
            {service.title}
          </h3>
          <div className="mb-4 flex flex-wrap space-x-2">
            {service.categories.map((tag, index) => (
              <span
                key={index}
                className="cursor-default rounded-full border border-[#C6742B] bg-white px-2 py-1 text-[14px] font-bold text-[#C6742B] md:px-2 md:text-[18px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[14px] leading-6 tracking-[5%] text-black md:text-[20px]">
            {service.description}
          </p>
        </div>
      </div>
    </>
  );
};
