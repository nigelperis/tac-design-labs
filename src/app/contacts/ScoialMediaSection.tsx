import React from 'react';
import Image from 'next/image';

import Fb from '~/assets/svgs/fb.svg';
import Insta from '~/assets/svgs/insta.svg';
import Yt from '~/assets/svgs/yt.svg';

const SocialMediaSection = () => {
  return (
    <section className="ml-700 flex h-[100px] w-[400px] justify-between gap-0 rounded-lg rounded-tl-[10px] border-2 border-t-[5px] border-solid border-[#FFFFFF] border-white bg-[#FFFFFF66] p-4 p-[20px_50px_20px_50px] shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[9.1px]">
      <Fb />
      <Yt />
      <Insta />
    </section>
  );
};

export default SocialMediaSection;
