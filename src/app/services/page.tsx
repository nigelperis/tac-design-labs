import React from 'react';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import servicePageBackground from '~/assets/images/servicesBG.png';

import CardContainer from './CardContainer/page';

const ServicePage = () => {
  const optimizedCareerPageBackground = getOptimizedBackgroundImage({
    src: servicePageBackground.src,
    width: servicePageBackground.width,
    height: servicePageBackground.height,
  });

  return (
    <div
      className="relative bg-[#EDD7C3] bg-contain py-16 font-primary bg-blend-overlay"
      style={{ backgroundImage: optimizedCareerPageBackground }}
    >
      {/* Overlay for subtle dark effect */}
      <div className="pointer-events-none absolute inset-0 bg-opacity-20"></div>

      <div className="z-10 lg:relative" style={{ fontFamily: 'Comic Sans MS' }}>
        <div className="text-[42px]">
          <h1
            className="lg:xmt-[75px] top-[20px] h-[33px] w-[393px] text-center text-[24px] font-bold text-[#552b0a] lg:mx-auto lg:mb-[30px] lg:w-[498px] lg:text-[42px] lg:leading-[58.53px]"
            style={{ fontFamily: 'Comic Sans MS' }}
          >
            We Work with Everyone
          </h1>
        </div>

        <div className="flex flex-col items-center lg:mx-auto lg:my-0 lg:w-[1200px] lg:gap-[54px] lg:p-[20px]">
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
