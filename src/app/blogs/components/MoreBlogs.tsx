import React from 'react';

import { BlogCard, blogs } from '../page';

const MoreBlogs = (props: { currentBlogKey: number }) => {
  return (
    <div className="flex flex-col gap-5 border-y-[10px] bg-surface-500 px-5 py-5 md:gap-12 md:px-28 md:py-16">
      <h2 className="text-center text-3xl font-bold text-accent-500 md:text-left md:text-5xl">
        More Blogs
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {/* TODO: Limit the more blogs upto 3 blogs only */}
        {blogs
          .filter((blog, index) => index != props.currentBlogKey)
          .map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
      </div>
    </div>
  );
};

export default MoreBlogs;
