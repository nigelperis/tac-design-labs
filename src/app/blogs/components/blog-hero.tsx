import React from 'react';
import { format } from 'date-fns';
import { type StaticImageData } from 'next/image';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

interface BlogHeroProps {
  title: string;
  image: StaticImageData | string;
  imageWidth: number;
  imageHeight: number;
  altText: string;
  author: string;
  publishedDate: string;
}

const BlogHero = (props: BlogHeroProps) => {
  const optimizedBG = getOptimizedBackgroundImage({
    src: props.image,
    width: props.imageWidth,
    height: props.imageHeight,
  });
  return (
    <div
      className="relative flex h-[25vh] w-full items-center justify-center bg-black bg-opacity-50 bg-cover bg-center text-white bg-blend-overlay md:h-[50vh]"
      style={{
        backgroundImage: optimizedBG,
        boxShadow: '4px 4px 8px 6px #00000040 inset',
      }}
      aria-label={props.altText}
    >
      <h1 className="text-balance px-5 text-center text-2xl font-bold leading-10 md:text-4xl">
        {props.title}
      </h1>
      <h3 className="absolute bottom-5 right-5 text-sm leading-[5%] md:text-2xl">
        by {props.author} | {format(props.publishedDate, 'dd-MM-yyyy')}
      </h3>
    </div>
  );
};

export default BlogHero;
