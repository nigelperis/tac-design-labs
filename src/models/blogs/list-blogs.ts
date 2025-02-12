/**
 * 
* Prompt used in deepseek R1 to generate this schema
        Generate TypeScript interfaces from this Strapi v5 response structure and attached schema file. Follow these requirements:

        FILE: schema-definition.json (Uploaded Strapi v5 schema)

        RULES:
        1. Required Fields:
          - These fields MUST be required if present:
            * id
            * documentId
            * createdAt
            * updatedAt
            * publishedAt
          - All other fields optional unless schema explicitly marks required

        2. Component Handling:
          - Use `BlocksContent` for rich text blocks:
            `import type { BlocksContent } from '@strapi/blocks-react-renderer'`
          - Create separate interfaces for components/nested objects
          - Maintain original content structure relationships

        3. Timestamp Enforcement:
          - Always include as non-nullable strings when present:
            createdAt: string;
            updatedAt: string;
            publishedAt: string;

        4. Interface Organization:
          - Break complex objects into individual interfaces
          - Use interface composition for reusable components
          - Avoid monolithic single interfaces

        5. Output Format:
          - Only show final TypeScript code
          - Include required imports
          - No comments/explanations
          - Proper indentation and type safety

        Example Response Structure:
        \<PASTE_JSON_RESPONSE_HERE\>

 */
import type { BlocksContent } from '@strapi/blocks-react-renderer';

interface Author {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface MediaFormat {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: null;
  size?: number;
  width?: number;
  height?: number;
  sizeInBytes?: number;
}

interface MediaFormats {
  large?: MediaFormat;
  small?: MediaFormat;
  medium?: MediaFormat;
  thumbnail?: MediaFormat;
}

export interface Media {
  id: number;
  documentId: string;
  name?: string;
  alternativeText?: null | string;
  caption?: null | string;
  width?: number;
  height?: number;
  formats?: MediaFormats;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: null | string;
  provider?: string;
  provider_metadata?: null;
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
  coverImage: Media;
  author?: Author;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Pagination {
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
}

export interface ListBlogResponse {
  data: Blog[];
  meta?: {
    pagination?: Pagination;
  };
}
