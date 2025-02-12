import { strapiFetch } from '~/utils/strapi-fetch';

import type { ListBlogResponse, Media } from '~/models/blogs/list-blogs';

export interface BlogListItem {
  documentId: string;
  title: string;
  slug: string;
  coverImage: Media;
  shortDescription: string;
  authorName: string;
  publishedOn: string;
}

export async function listBlogs(args?: {
  /**@defaultValue 1 */
  page?: number;
  /**@defaultValue 25 */
  pageSize?: number;
}): Promise<BlogListItem[] | undefined> {
  const { page = 1, pageSize = 25 } = args ?? {};

  const endpoint = '/blogs/';
  const queryParams = new URLSearchParams({
    'populate[0]': 'coverImage',
    'populate[1]': 'author',
    'sort[0]': 'updatedAt:desc',
    'pagination[page]': String(page),
    'pagination[pageSize]': String(pageSize),
  });

  const responseData = await strapiFetch<ListBlogResponse>({
    endpoint,
    queryParams,
  });

  const mappedData = responseData?.data.map<BlogListItem>((itm) => {
    return {
      documentId: itm.documentId,
      title: itm.title,
      slug: itm.slug,
      shortDescription: itm.shortDescription,
      coverImage: itm.coverImage,
      authorName: itm.author?.name ?? 'admin',
      publishedOn: itm.publishedOn ?? itm.publishedAt,
    };
  });

  return mappedData;
}
