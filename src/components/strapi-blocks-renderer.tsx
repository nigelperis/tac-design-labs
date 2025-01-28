import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';

import type { BlocksContent } from '@strapi/blocks-react-renderer';

interface StrapiBlocksRendererProps {
  content: BlocksContent;
}
type LinkTarget = '_self' | '_blank';

function getLinkTarget(url: string): LinkTarget {
  return url.startsWith('https') ? '_blank' : '_self';
}

function StrapiBlocksRenderer(props: StrapiBlocksRendererProps) {
  const { content } = props;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p
            className="text-justify text-base leading-7 md:text-2xl md:leading-10"
            style={{
              letterSpacing: '5%',
              paddingBottom: '23px',
            }}
          >
            {children}
          </p>
        ),
        link: ({ children, ...rest }) => (
          <a
            className="text-base leading-7 md:text-2xl md:leading-10"
            style={{
              color: '#1270CE',
              letterSpacing: '5%',
              paddingBottom: '23px',
            }}
            target={getLinkTarget(rest.url as unknown as string)}
            {...rest}
          >
            {children}
          </a>
        ),
        image: (args) => {
          return args.image.url ? (
            <Image
              draggable={false}
              src={args.image.url}
              alt={args.image.alternativeText ?? 'Blog image'}
            />
          ) : undefined;
        },
        list: ({ children }) => (
          <li
            className="list-inside list-decimal text-base leading-7 md:text-2xl md:leading-10"
            style={{
              letterSpacing: '5%',
              paddingBottom: '23px',
            }}
          >
            {children}
          </li>
        ),
      }}
    />
  );
}

export default StrapiBlocksRenderer;
