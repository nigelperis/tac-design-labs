'use client';

import { use } from 'react';
import { type MDXComponents, type MDXProps } from 'mdx/types';
import Image from 'next/image';

// MARK: Image imports
import blogPost1 from '~/assets/images/blog-images/blog-post-1-banner.jpg';
import blogPost2 from '~/assets/images/blog-images/blog-post-2.jpg';
import blogPost3 from '~/assets/images/blog-images/blog-post-3-banner.jpg';
import blogPost4 from '~/assets/images/blog-images/blog-post-4.jpg';

import BlogHero from '../components/blog-hero';
import MoreBlogs from '../components/more-blogs';
import Blog01 from '../markdown/blog-01.mdx';
import Blog02 from '../markdown/blog-02.mdx';
import Blog03 from '../markdown/blog-03.mdx';
import Blog04 from '../markdown/blog-04.mdx';
import type { StaticImageData } from 'next/image';

const overrideComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2
      className="text-3xl md:text-[36px]"
      style={{
        color: '#C6742B',
        fontWeight: '700',
        paddingBottom: '23px',
        lineHeight: '45px',
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="text-2xl md:text-[28px]"
      style={{
        color: '#C6742B',
        fontWeight: '700',
        paddingBottom: '23px',
        lineHeight: '45px',
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p
      className="text-justify text-base leading-7 md:text-2xl md:leading-10"
      style={{
        letterSpacing: '5%',
        paddingBottom: '23px',
      }}
    >
      {children}
    </p>
  ),
  a: ({ children }) => (
    <a
      className="text-base leading-7 md:text-2xl md:leading-10"
      style={{
        color: '#1270CE',
        letterSpacing: '5%',
        paddingBottom: '23px',
      }}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => {
    return src ? (
      <Image draggable={false} src={src} alt={alt ?? 'Blog image'} />
    ) : undefined;
  },
  li: ({ children }) => (
    <li
      className="list-inside list-decimal text-base leading-7 md:text-2xl md:leading-10"
      style={{
        letterSpacing: '5%',
        paddingBottom: '23px',
      }}
    >
      {children}
    </li>
  ),
};

type MDXData = (props: MDXProps) => JSX.Element;

interface BlogDetail {
  title: string;
  coverImgURL: StaticImageData;
  markdown: MDXData;
}

const blogs: Record<string, BlogDetail> = {
  '01': {
    title: 'Sustainable building materials in India',
    coverImgURL: blogPost1,
    markdown: Blog01,
  },
  '02': {
    title: 'The Benefits of Bamboo in Sustainable Architecture',
    coverImgURL: blogPost2,
    markdown: Blog02,
  },
  '03': {
    title:
      'How to reduce carbon footprint in building design, A Step-by-Step Guide',
    coverImgURL: blogPost3,
    markdown: Blog03,
  },
  '04': {
    title: 'How to design energy-efficient homes',
    coverImgURL: blogPost4,
    markdown: Blog04,
  },
};

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return (
    <>
      <div className="bg-[#EDD7C3] font-primary">
        <BlogHero title={blogs[slug].title} image={blogs[slug].coverImgURL} />
        <div className="p-5 md:p-28">
          {blogs[slug].markdown({ components: overrideComponents })}
        </div>
        <MoreBlogs currentBlogKey={Number(slug)} />
      </div>
    </>
  );
}
