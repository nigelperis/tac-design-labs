import { type BlocksContent } from '@strapi/blocks-react-renderer';

import { strapiFetch } from '~/utils/strapi-fetch';

import type { ListBlogResponse, Media } from '~/models/blogs/list-blogs';

interface Blog {
  documentId: string;
  title: string;
  slug: string;
  coverImage: Media;
  shortDescription: string;
  metaDescription: string;
  blogContent: BlocksContent;
  authorName: string;
  publishedOn: string;
}

export async function getBlog(slug: string): Promise<Blog | undefined> {
  const queryParams = new URLSearchParams();
  queryParams.append('filters[slug][$eq]', slug);
  queryParams.append('populate[0]', 'coverImage');
  queryParams.append('populate[1]', 'author');

  const response = await strapiFetch<ListBlogResponse>({
    endpoint: '/blogs',
    queryParams,
  });
  if (!response?.data || response.data.length === 0) return undefined;
  const firstItem = response.data[0];
  {
    const {
      documentId,
      title,
      slug: fetchedSlug,
      shortDescription,
      metaDescription,
      coverImage,
      author,
      publishedOn,
      mainContent: blogContent,
    } = firstItem;

    return {
      documentId,
      title,
      slug: fetchedSlug,
      shortDescription,
      metaDescription,
      coverImage,
      authorName: author?.name ?? 'admin',
      publishedOn: publishedOn ?? firstItem.publishedAt,
      blogContent,
    };
  }
}
