import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { env } from '~/env';
import Image from 'next/image';
import Link from 'next/link';

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
        heading: ({ children, level }) => {
          switch (level) {
            case 1: {
              return (
                <h1
                  className="md:leading-16 text-4xl font-bold leading-10 text-[#C6742B] md:text-6xl"
                  style={{
                    letterSpacing: '5%',
                    paddingBottom: '23px',
                  }}
                >
                  {children}
                </h1>
              );
            }

            case 2: {
              return (
                <h2
                  className="md:leading-16 text-3xl font-bold leading-10 text-[#C6742B] md:text-5xl"
                  style={{
                    letterSpacing: '5%',
                    paddingBottom: '23px',
                  }}
                >
                  {children}
                </h2>
              );
            }
            case 3: {
              return (
                <h3
                  className="md:leading-16 text-2xl font-bold leading-10 text-[#C6742B] md:text-4xl"
                  style={{
                    letterSpacing: '5%',
                    paddingBottom: '23px',
                  }}
                >
                  {children}
                </h3>
              );
            }
            case 4: {
              return (
                <h4
                  className="md:leading-16 text-xl font-bold leading-10 text-[#C6742B] md:text-3xl"
                  style={{
                    letterSpacing: '5%',
                    paddingBottom: '23px',
                  }}
                >
                  {children}
                </h4>
              );
            }
            case 5: {
              return (
                <h5
                  className="md:leading-16 text-lg font-bold leading-10 text-[#C6742B] md:text-2xl"
                  style={{
                    letterSpacing: '5%',
                    paddingBottom: '23px',
                  }}
                >
                  {children}
                </h5>
              );
            }
            case 6: {
              return (
                <h6
                  className="md:leading-16 text-base font-bold leading-10 text-[#C6742B] md:text-xl"
                  style={{
                    letterSpacing: '5%',
                    paddingBottom: '23px',
                  }}
                >
                  {children}
                </h6>
              );
            }
          }
        },
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
        link: ({ children, url, ...rest }) => (
          <Link
            className="text-base leading-7 md:text-2xl md:leading-10"
            style={{
              color: '#1270CE',
              letterSpacing: '5%',
              paddingBottom: '23px',
            }}
            href={url}
            target={getLinkTarget(url)}
            {...rest}
          >
            {children}
          </Link>
        ),
        image: (args) => {
          if (args.image.url) {
            return (
              <>
                <Image
                  draggable={false}
                  src={new URL(
                    args.image.url,
                    env.NEXT_PUBLIC_STRAPI_URL,
                  ).toString()}
                  alt={args.image.alternativeText ?? 'Blog image'}
                />
                {args.image.caption ? (
                  <caption>{args.image.caption}</caption>
                ) : (
                  <></>
                )}
              </>
            );
          }
          return <></>;
        },
        list: ({ children }) => {
          return (
            <ul
              className="text-base leading-7 md:text-2xl md:leading-10"
              style={{
                letterSpacing: '5%',
                paddingBottom: '23px',
              }}
            >
              {children}
            </ul>
          );
        },
        'list-item': ({ children }) => {
          return (
            <li
              className="list-inside list-decimal text-base leading-7 md:text-2xl md:leading-10"
              style={{
                letterSpacing: '5%',
                paddingBottom: '23px',
              }}
            >
              {children}
            </li>
          );
        },
        quote: ({ children }) => {
          return <blockquote>{children}</blockquote>;
        },
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <em>{children}</em>,
        underline: ({ children }) => <u>{children}</u>,
        strikethrough: ({ children }) => <s>{children}</s>,
        code: ({ children }) => <code>{children}</code>,
      }}
    />
  );
}

export default StrapiBlocksRenderer;
