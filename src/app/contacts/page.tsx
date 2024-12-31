import React from 'react';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import contactPageBackground from '~/assets/images/contactusBG.png';

import EmailSection from './EmailSection';
import ScoialMediaSection from './ScoialMediaSection';
import TacDesignLab from './TacDesignLab';
import TopSection from './TopSection';

const Contacts = () => {
  const optimizedCareerPageBackground = getOptimizedBackgroundImage({
    src: contactPageBackground.src,
    width: contactPageBackground.width,
    height: contactPageBackground.height,
  });

  return (
    <section
      className="relative bg-[#EDD7C3] bg-contain py-16 font-primary bg-blend-soft-light"
      style={{
        backgroundImage: optimizedCareerPageBackground,
      }}
    >
      <div className="relative z-10 mt-12 px-[7%] py-12 lg:px-16">
        <div className="mb-12 text-center lg:text-left">
          <TopSection />
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1">
            <EmailSection />
          </div>
          <div className="flex-1">
            <TacDesignLab />
            <div className="mt-8">
              <ScoialMediaSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
