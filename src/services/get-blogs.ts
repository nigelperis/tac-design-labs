import { strapiFetch } from '~/utils/strapi-fetch';

import type { ListBlogResponse, Media } from '~/models/blogs/list-blogs';

interface BlogListItem {
  documentId: string;
  title: string;
  slug: string;
  coverImage: Media;
  shortDescription: string;
  authorName: string;
  publishedOn: string;
}

export async function listBlogs(): Promise<BlogListItem[] | undefined> {
  const endpoint = '/';
  const responseData = await strapiFetch<ListBlogResponse>({
    endpoint,
  });
  const mappedData = responseData?.data.map<BlogListItem>((itm) => {
    return {
      documentId: itm.documentId,
      title: itm.title,
      slug: itm.slug,
      shortDescription: itm.shortDescription,
      coverImage: itm.coverImage,
      authorName: itm.author?.name ?? '',
      publishedOn: itm.publishedOn ?? itm.publishedAt,
    };
  });
  return mappedData;
}
