import React from 'react';

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
    <div
      className="flex flex-col items-center gap-y-6 border-2 border-white bg-cover px-6 py-8 md:flex-row md:border-y-4 md:px-32 md:py-12"
      style={{
        backgroundImage: optimizedBG,
      }}
    >
      <div className="flex justify-evenly gap-x-2 text-center text-[32px] md:flex-col md:text-left md:text-[72px]">
        <div className="flex">
          <h2 className="inline text-primary-500">Dream</h2>
          <span className="text-black">.</span>
        </div>
        <div className="flex">
          <h2 className="text-[#7D1F0E]">Design</h2>
          <span className="text-[#420C03]">.</span>
        </div>
        <div className="flex">
          <h2 className="text-[#6A4729]">Deliver</h2>
          <span className="text-[#552B0A]">.</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 leading-8 tracking-[2%] md:leading-[45px]">
        <h3 className="text-md text-balance text-center md:text-[32px]">
          Every great project starts with a conversation. Let&apos;s design
          something extraordinary together—talk to us!
        </h3>
        <button
          className="relative h-[70px] w-[225] rounded bg-cover bg-center text-base font-bold text-primary-500 duration-200 hover:scale-105 md:h-[120px] md:w-[380px] md:p-10 md:text-2xl md:font-bold"
          style={{
            backgroundImage: optimizedOurWorkBgButton,
          }}
        >
          <div className="flex max-h-full max-w-full items-center px-5 text-center">
            Schedule A Free Consultation
          </div>
        </button>
      </div>
    </div>
  );
};

export default BlogMainPage;
