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
      className="relative bg-[#EDD7C3] bg-contain py-16 font-primary bg-blend-soft-light"
      style={{ backgroundImage: optimizedCareerPageBackground }}
    >
      {/* Overlay for subtle dark effect */}
      <div className="pointer-events-none absolute inset-0 bg-opacity-20"></div>

      {/* Content Wrapper */}
      <div className="relative z-10" style={{ fontFamily: 'Comic Sans MS' }}>
        {/* Header Section */}
        <div className="text-[42px]">
          <h1
            className="xmt-[75px] mx-auto mb-[30px] w-[498px] text-center text-[42px] font-bold leading-[58.53px] text-[#552b0a]"
            style={{ fontFamily: 'Comic Sans MS' }}
          >
            We Work with Everyone
          </h1>
        </div>

        {/* Card Container Section */}
        <div className="mx-auto my-0 flex w-[1200px] flex-col items-center gap-[54px] p-[20px]">
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
