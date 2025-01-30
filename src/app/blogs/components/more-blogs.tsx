'use client';

import React, { useRef, useState } from 'react';

import { env } from '~/env';

import { getPlaceholderImage } from '~/utils/get-placeholder-image';

import { type BlogListItem } from '~/services/list-blogs';

import { BlogCard } from './blog-card';
import NoBlogFound from './no-blog-found';

function MoreBlogs(props: { blogs?: BlogListItem[]; currentBlogSlug: string }) {
  const otherBlogs = props.blogs
    ?.filter((blog) => blog.slug !== props.currentBlogSlug)
    .slice(0, 3);

  return (
    <div className="flex flex-col gap-5 border-y-[10px] bg-surface-500 py-5 md:gap-12 md:px-28 md:py-16">
      <h2 className="text-center text-3xl font-bold text-accent-500 md:text-left md:text-5xl">
        More Blogs
      </h2>
      <div className="hidden gap-5 md:grid lg:grid-cols-2 xl:grid-cols-3">
        {otherBlogs && otherBlogs.length > 0 ? (
          otherBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              blogURL={`/blogs/${blog.slug}`}
              description={blog.shortDescription}
              postedBy={blog.authorName}
              publishedDate={new Date(blog.publishedOn)}
              imageUrl={
                blog.coverImage.url
                  ? new URL(
                      blog.coverImage.url,
                      env.NEXT_PUBLIC_STRAPI_URL,
                    ).toString()
                  : getPlaceholderImage()
              }
              imageWidth={blog.coverImage.width ?? 0}
              imageHeight={blog.coverImage.height ?? 0}
            />
          ))
        ) : (
          <NoBlogFound className="md:col-span-2 md:w-1/2 xl:col-span-3" />
        )}
      </div>
      <div className="relative block md:hidden">
        <MobileMoreBlogs otherBlogs={otherBlogs} />
      </div>
    </div>
  );
}

function MobileMoreBlogs(props: { otherBlogs: BlogListItem[] | undefined }) {
  const { otherBlogs } = props;

  const [scrollPosition, setScrollPosition] = useState({
    scrollWidth: 0,
    scrollLeft: 0,
    offsetWidth: 0,
  });
  const scrollDemoRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollDemoRef.current) {
      const { scrollWidth, scrollLeft, offsetWidth } = scrollDemoRef.current;
      setScrollPosition({ scrollWidth, scrollLeft, offsetWidth });
    }
  };

  const blogCardWidth = 80; // Each blog card is 80vw
  const activeIndex: number =
    Math.round(
      scrollPosition.scrollLeft /
        (scrollPosition.offsetWidth * (blogCardWidth / 100)),
    ) || 0;

  return (
    <>
      <div
        className="no-scrollbar relative flex w-[99dvw] snap-x snap-mandatory gap-6 overflow-x-auto pb-14"
        onScroll={handleScroll}
        ref={scrollDemoRef}
      >
        <div className="shrink-0 snap-center">
          <div className="w-3 shrink-0"></div>
        </div>
        {otherBlogs && otherBlogs.length > 0 ? (
          otherBlogs.map((blog, index) => (
            <div
              key={index}
              className={`max-w-[80vw] shrink-0 snap-center transition duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-50'} `}
            >
              <BlogCard
                title={blog.title}
                blogURL={`/blogs/${blog.slug}`}
                description={blog.shortDescription}
                postedBy={blog.authorName}
                publishedDate={new Date(blog.publishedOn)}
                imageUrl={
                  blog.coverImage.url
                    ? new URL(
                        blog.coverImage.url,
                        env.NEXT_PUBLIC_STRAPI_URL,
                      ).toString()
                    : getPlaceholderImage()
                }
                imageWidth={blog.coverImage.width ?? 0}
                imageHeight={blog.coverImage.height ?? 0}
              />
            </div>
          ))
        ) : (
          <NoBlogFound className="md:col-span-2 md:w-1/2 xl:col-span-3" />
        )}
        <div className="shrink-0 snap-center">
          <div className="w-3 shrink-0"></div>
        </div>
      </div>
      <div className="-mt-2 flex justify-center gap-2 pb-4">
        {otherBlogs ? (
          otherBlogs.map((_, i) => (
            <div
              key={i}
              className={`h-[10px] w-[10px] rounded-full ${i === activeIndex ? 'w-[27px] border-none bg-primary-600' : 'border border-secondary-200 bg-white'}`}
            ></div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default MoreBlogs;
