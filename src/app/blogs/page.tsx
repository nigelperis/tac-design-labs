import React from 'react';
import Link from 'next/link';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import OurWorkBgButton from '~/assets/images/button-background.png';
import designDreamDeliverBG from '~/assets/images/design-dream-deliver-bg.jpg';
import landingPageBlogLeavesBackground from '~/assets/images/landing-page-blog-main-leaves-bg.png';

import { BlogCard } from './components/blog-card';
import { blogs } from './constants/blogs';

const BlogMainPage = () => {
  const optimizedLandingPageArchitectureBackground =
    getOptimizedBackgroundImage({
      src: landingPageBlogLeavesBackground.src,
      width: landingPageBlogLeavesBackground.width,
      height: landingPageBlogLeavesBackground.height,
    });
  return (
    <div className="relative font-primary">
      <section
        className="bg-[#EDD7C3] px-10 py-16 bg-blend-overlay"
        style={{
          backgroundImage: optimizedLandingPageArchitectureBackground,
        }}
      >
        <h1 className="mb-10 text-center text-[26px] font-bold text-primary-500 md:text-start md:text-5xl">
          BLOGS
        </h1>
        <div className="grid-cols1 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </section>
      <ConsultationCTA />
    </div>
  );
};

const ConsultationCTA = () => {
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
    <div className="bg-white py-2">
      <div
        className="flex h-[320px] w-full items-center justify-center bg-cover bg-center px-4 sm:h-[380px] sm:px-8 md:h-[460px] md:px-16 lg:px-16"
        style={{
          backgroundImage: optimizedBG,
        }}
      >
        <div className="m-auto max-w-5xl text-center">
          <h2 className="mb-2 text-center text-[24px] font-semibold text-[#4B2300] md:text-[48px] md:font-medium">
            See Sustainability in Action{' '}
          </h2>{' '}
          <p className="mt-4 text-base font-[400] tracking-wide text-[#000000] md:text-[32px] md:leading-10">
            Explore behind-the-scenes moments, design inspirations, updates and
            more on our Instagram
          </p>
          <div className="flex justify-center">
            <Link
              href="https://www.instagram.com/tacdesignlab/profilecard/?igsh=MWo5MXl0cGluajdieg==F"
              style={{ backgroundImage: optimizedOurWorkBgButton }}
              className="rounded bg-cover bg-center p-8 text-[13px] font-bold text-[#331803] duration-200 hover:scale-105 hover:bg-opacity-80 md:mt-2 md:p-14 md:text-2xl"
            >
              Visit Profile{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className="flex flex-col items-center gap-y-6 border-2 border-white bg-cover px-6 py-8 md:flex-row md:border-y-4 md:px-32 md:py-12"
    //   style={{
    //     backgroundImage: optimizedBG,
    //   }}
    // >
    //   <div className="flex justify-evenly gap-x-2 text-center text-[32px] md:flex-col md:text-left md:text-[72px]">
    //     <div className="flex">
    //       <h2 className="inline text-primary-500">Dream</h2>
    //       <span className="text-black">.</span>
    //     </div>
    //     <div className="flex">
    //       <h2 className="text-[#7D1F0E]">Design</h2>
    //       <span className="text-[#420C03]">.</span>
    //     </div>
    //     <div className="flex">
    //       <h2 className="text-[#6A4729]">Deliver</h2>
    //       <span className="text-[#552B0A]">.</span>
    //     </div>
    //   </div>
    //   <div className="flex flex-col items-center justify-center gap-6 leading-8 tracking-[2%] md:leading-[45px]">
    //     <h3 className="text-md text-balance text-center md:text-[32px]">
    //       Every great project starts with a conversation. Let&apos;s design
    //       something extraordinary together—talk to us!
    //     </h3>
    //     <button
    //       className="relative h-[70px] w-[225] rounded bg-cover bg-center text-base font-bold text-primary-500 duration-200 hover:scale-105 md:h-[120px] md:w-[380px] md:p-10 md:text-2xl md:font-bold"
    //       style={{
    //         backgroundImage: optimizedOurWorkBgButton,
    //       }}
    //     >
    //       <div className="flex max-h-full max-w-full items-center px-5 text-center">
    //         Schedule A Free Consultation
    //       </div>
    //     </button>
    //   </div>
    // </div>
  );
};

export default BlogMainPage;
