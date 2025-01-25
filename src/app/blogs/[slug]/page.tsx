'use client';

import { use } from 'react';
import Image from 'next/image';

import blogPost1 from '~/assets/images/blog-images/blog-post-1.jpg';
import blogPost2 from '~/assets/images/blog-images/blog-post-2.jpg';
import blogPost3 from '~/assets/images/blog-images/blog-post-3-banner.jpg';
import blogPost4 from '~/assets/images/blog-images/blog-post-4.jpg';

import BlogHero from '../components/blog-hero';
import MoreBlogs from '../components/more-blogs';
import Blog01 from '../markdown/blog-01.mdx';
import Blog02 from '../markdown/blog-02.mdx';
import Blog03 from '../markdown/blog-03.mdx';
import Blog04 from '../markdown/blog-04.mdx';
import type { MDXComponents, MDXProps } from 'mdx/types';
import type { StaticImageData } from 'next/image';

enum LinkTarget {
  Internal = '_self',
  External = '_blank',
}

const getLinkTarget = (url: string): LinkTarget => {
  return url.startsWith('https') ? LinkTarget.External : LinkTarget.Internal;
};

const overrideComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2
      className="text-[26px] md:text-[36px]"
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
      className="text-[23px] md:text-[28px]"
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
  h4: ({ children }) => (
    <h4
      className="text-center text-[10px] italic md:text-[20px] md:text-xl"
      style={{
        paddingBottom: '23px',
      }}
    >
      {children}
    </h4>
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
  a: ({ children, ...rest }) => (
    <a
      className="text-base leading-7 md:text-2xl md:leading-10"
      style={{
        color: '#1270CE',
        letterSpacing: '5%',
        paddingBottom: '23px',
      }}
      target={getLinkTarget(rest.href as unknown as string)}
      {...rest}
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

interface BlogDetail {
  title: string;
  coverImgURL: StaticImageData;
  markdown: MDXData;
  altText?: string;
}

const blogs: Record<string, BlogDetail> = {
  '01': {
    title: 'Sustainable Building Materials in India',
    coverImgURL: blogPost1,
    markdown: Blog01,
  },
  '02': {
    title: 'The Benefits of Bamboo in Sustainable Architecture',
    coverImgURL: blogPost2,
    markdown: Blog02,
    altText:
      'Laurie Baker Centre for Habitat Studies, designed & built by COSTFORD',
  },
  '03': {
    title:
      'How to Reduce Carbon Footprint in Building Design, A Step-by-Step Guide',
    coverImgURL: blogPost3,
    markdown: Blog03,
    altText: 'Sanchi Bags, Trivandrum. Designed & built by TAC Design LAB',
  },
  '04': {
    title: 'How to Design Energy-Efficient Homes',
    coverImgURL: blogPost4,
    markdown: Blog04,
  },
};

type MDXData = (props: MDXProps) => JSX.Element;

interface BlogDetail {
  title: string;
  coverImgURL: StaticImageData;
  markdown: MDXData;
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return (
    <>
      <div className="bg-[#EDD7C3] font-primary">
        <BlogHero
          title={blogs[slug].title}
          image={blogs[slug].coverImgURL}
          altText={blogs[slug].altText ?? 'Banner Image'}
        />
        <div className="p-5 md:p-28">
          {blogs[slug].markdown({ components: overrideComponents })}
        </div>
        <MoreBlogs currentBlogKey={Number(slug)} />
      </div>
    </>
  );
}
