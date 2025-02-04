import type { BlocksContent } from '@strapi/blocks-react-renderer';

interface CoverImageFormat {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: string | null;
  size?: number;
  width?: number;
  height?: number;
  sizeInBytes?: number;
}

interface CoverImageFormats {
  large?: CoverImageFormat;
  small?: CoverImageFormat;
  medium?: CoverImageFormat;
  thumbnail?: CoverImageFormat;
}

interface CoverImage {
  id: number;
  documentId: string;
  name?: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: CoverImageFormats;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: unknown;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

interface Author {
  id: number;
  documentId: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

interface Blog {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  publishedOn?: string;
  shortDescription: string;
  mainContent: BlocksContent;
  coverImage: CoverImage;
  author?: Author;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface BlogResponse {
  data?: Blog;
  meta: unknown;
}
