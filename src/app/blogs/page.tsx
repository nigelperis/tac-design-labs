import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';


import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import blogPost1 from '~/assets/images/blog-images/blog-post-1.jpg';
import blogPost2 from '~/assets/images/blog-images/blog-post-2.jpg';
import blogPost3 from '~/assets/images/blog-images/blog-post-3.png';
import blogPost4 from '~/assets/images/blog-images/blog-post-4.jpg';
import OurWorkBgButton from '~/assets/images/button-background.png';
import designDreamDeliverBG from '~/assets/images/design-dream-deliver-bg.jpg';
import landingPageBlogLeavesBackground from '~/assets/images/landing-page-blog-main-leaves-bg.png';

export const blogs: BlogCardDetail[] = [
  {
    title: 'Sustainable building materials in India',
    description: `When it comes to sustainable architecture, the materials you choose play a crucial role in determining the environmental impact of your building project. Sustainable building materials in India and around the world are increasingly being recognized for their ability to reduce this impact. However, not all materials are created equal, and understanding the environmental footprint of different building materials is essential for making eco-conscious decisions.`,
    postedBy: 'admin',
    publishedDate: new Date(),
    imageUrl: blogPost1,
    blogURL: '/blogs/01',
  },
  {
    title: 'The Benefits of Bamboo in Sustainable Architecture',
    description: `Bamboo, often called “green steel,” is gaining popularity in sustainable architecture. This versatile plant is not only eco-friendly but also incredibly strong, making it a compelling alternative to building materials like steel and concrete. However, not all materials are ...`,
    postedBy: 'admin',
    publishedDate: new Date(),
    imageUrl: blogPost2,
    blogURL: '/blogs/02',
  },
  {
    title: 'How to reduce carbon footprint in building design ...',
    description: `Incorporating carbon reduction strategies from the initial planning stages of a building project is essential for creating sustainable structures. Addressing carbon footprints early can reduce long-term operational costs and contribute positively to the environment.`,
    postedBy: 'admin',
    publishedDate: new Date(),
    imageUrl: blogPost3,
    blogURL: '/blogs/03',
  },
  {
    title: 'How to design energy-efficient homes',
    description: `Insulating your home effectively doesn't have to break the bank. By choosing cost-effective and sustainable insulation materials, you can ensure that your home stays cool in the summer and warm in the winter, all while reducing energy consumption. Here are some budget-friendly ...`,
    postedBy: 'admin',
    publishedDate: new Date(),
    imageUrl: blogPost4,
    blogURL: '/blogs/04',
  },
];

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

export interface BlogCardDetail {
  title: string;
  description: string;
  postedBy: string;
  publishedDate: Date;
  imageUrl: StaticImageData;
  blogURL: string;
}

export const BlogCard = (props: BlogCardDetail) => {
  return (
    <div className="line-clamp-4 flex flex-col rounded-[22px] bg-white bg-opacity-60">
      <Image
        className="h-80 w-full object-cover"
        src={props.imageUrl}
        alt="blog-image"
        height={400}
        style={{
          boxShadow: '0px 4px 4px 0px #00000040',
        }}
      />
      <div className="flex flex-col gap-2 p-5">
        <h1 className="line-clamp-1 text-xl font-semibold text-primary-500 md:text-2xl">
          {props.title}
        </h1>
        <span className="text-xs">
          by <span className="underline">{props.postedBy}</span> |{' '}
          {props.publishedDate.toDateString()}
        </span>
        <div className="line-clamp-3 leading-[33px] tracking-[5%]">
          {props.description}
        </div>
        <Link href={props.blogURL} className="self-center text-accent-500">
          Read More ...
        </Link>
      </div>
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
          Every great project starts with a conversation. Let&apos;s design something
          extraordinary together—talk to us!
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
