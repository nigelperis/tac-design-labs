import Image from 'next/image';
import Link from 'next/link';

import type { StaticImageData } from 'next/image';

export interface BlogCardDetail {
  title: string;
  description: string;
  postedBy: string;
  publishedDate: Date;
  imageUrl: StaticImageData | string;
  imageWidth: number;
  imageHeight: number;
  blogURL: string;
}

export const BlogCard = (props: BlogCardDetail) => {
  return (
    <div className="line-clamp-4 flex flex-col rounded-[22px] bg-white bg-opacity-60">
      <Image
        className="h-56 w-full object-cover md:h-80"
        src={props.imageUrl}
        alt="blog-image"
        height={400}
        width={props.imageWidth}
        style={{
          boxShadow: '0px 4px 4px 0px #00000040',
        }}
      />
      <div className="flex flex-col gap-2 p-5">
        <h1 className="text-xl font-semibold text-primary-500 md:text-2xl">
          {props.title}
        </h1>
        <span className="text-xs">
          by <span className="underline">{props.postedBy}</span> |{' '}
          {props.publishedDate.toDateString()}
        </span>
        <div className="line-clamp-6 leading-[33px] tracking-[5%] md:line-clamp-4 lg:line-clamp-3">
          {props.description}
        </div>
        <Link href={props.blogURL} className="self-center text-accent-500">
          Read More....
        </Link>
      </div>
    </div>
  );
};
