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
      className="bg-[#EDD7C3] bg-contain py-16 font-primary bg-blend-soft-light"
      style={{ backgroundImage: optimizedCareerPageBackground }}
    >
      <div className="font-primary text-[42px]">
        <h1 className="mx-auto mt-[75px] w-[498px] text-center font-primary text-[42px] font-bold leading-[58.53px] text-[#552b0a]">
          We Work with Everyone
        </h1>
      </div>

      <div className="mx-auto my-0 flex w-[1200px] flex-col items-center gap-[54px] bg-white/80 p-[20px]">
        <CardContainer />
      </div>
    </div>
  );
};

export default ServicePage;
