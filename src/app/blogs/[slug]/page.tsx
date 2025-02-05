import { env } from '~/env';

import StrapiBlocksRenderer from '~/components/strapi-blocks-renderer';

import { getPlaceholderImage } from '~/utils/get-placeholder-image';

import { getBlog } from '~/services/get-blogs';
import { listBlogs } from '~/services/list-blogs';

import BlogHero from '../components/blog-hero';
import MoreBlogs from '../components/more-blogs';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  const otherBlogs = await listBlogs({ pageSize: 5 });

  if (!blog) {
    return <></>;
  }

  return (
    <>
      <div className="bg-[#EDD7C3] font-primary">
        <BlogHero
          title={blog.title}
          image={
            blog.coverImage.url
              ? new URL(
                  blog.coverImage.url,
                  env.NEXT_PUBLIC_STRAPI_URL,
                ).toString()
              : getPlaceholderImage()
          }
          imageWidth={blog.coverImage.width ?? 0}
          imageHeight={blog.coverImage.height ?? 0}
          altText={blog.title}
          author={blog.authorName}
          publishedDate={blog.publishedOn}
        />
        <div className="p-5 md:p-28">
          {<StrapiBlocksRenderer content={blog.blogContent} />}
        </div>
        <MoreBlogs blogs={otherBlogs ?? []} currentBlogSlug={slug} />
      </div>
    </>
  );
}
