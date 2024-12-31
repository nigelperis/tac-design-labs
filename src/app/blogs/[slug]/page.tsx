'use client';

import React from 'react';
import { MDXComponents } from 'mdx/types';
import { StaticImageData } from 'next/image';

import blogPost1 from '~/assets/images/blog-images/blog-post-1.jpg';

import Blog01 from '../components/blog-01.mdx';
import BlogHero from '../components/BlogHero';

const overrideComponents: MDXComponents = {
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
  img: ({ src, alt }) => <img draggable={false} src={src} alt={alt} />,
};

export default function Page() {
  return (
    <>
      <div className="bg-[#EDD7C3] font-primary">
        <BlogHero
          title="Sustainable building materials in India"
          image={blogPost1}
        />
        <div className="p-5 md:p-28">
          <Blog01 components={overrideComponents} />
        </div>
      </div>
    </>
  );
}
