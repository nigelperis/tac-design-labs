import React from 'react';
import Image from 'next/image';

import Fb from '~/assets/svgs/fb.svg';
import Insta from '~/assets/svgs/insta.svg';
import Yt from '~/assets/svgs/yt.svg';

const SocialMediaSection = () => {
  return (
    <section className="col m-4 flex w-[77vw] justify-between gap-2 rounded-lg rounded-tl-[10px] border-2 border-t-[5px] border-solid border-[#FFFFFF] border-white bg-[#FFFFFF66] p-[20px_40px_20px_40px] shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[9.1px] lg:ml-[100px] lg:h-[100px] lg:w-[400px] lg:gap-1">
      <a href="https://www.facebook.com/people/TAC-Design-LAB/100090743003401/">
        <Fb />
      </a>
      <a href="https://youtube.com/@tacdesignlab?si=tt1qKMFM3MHopeXa">
        <Yt style={{ marginLeft: '16px' }} />
      </a>
      <a href="https://www.instagram.com/tacdesignlab/profilecard/?igsh=MWo5MXl0cGluajdieg==F">
        <Insta style={{ marginLeft: '15px' }} />
      </a>
    </section>
  );
};

export default SocialMediaSection;
