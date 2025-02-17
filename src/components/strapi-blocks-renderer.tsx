'use client';

import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import Link from 'next/link';

import { env } from '~/env';

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
                  className="text-[30px] md:text-[44px]"
                  style={{
                    color: '#C6742B',
                    fontWeight: '700',
                    paddingBottom: '23px',
                    lineHeight: '45px',
                  }}
                >
                  {children}
                </h1>
              );
            }

            case 2: {
              return (
                <h2
                  className="text-[26px] md:text-[36px]"
                  style={{
                    color: '#C6742B',
                    fontWeight: '700',
                    paddingBottom: '23px',
                    lineHeight: '45px',
                  }}
                >
                  {children}
                </h2>
              );
            }
            case 3: {
              return (
                <h3
                  className="text-[23px] md:text-[28px]"
                  style={{
                    color: '#C6742B',
                    fontWeight: '700',
                    paddingBottom: '23px',
                    lineHeight: '45px',
                  }}
                >
                  {children}
                </h3>
              );
            }
            case 4: {
              return (
                <h4
                  className="text-xl md:text-2xl"
                  style={{
                    color: '#C6742B',
                    fontWeight: '700',
                    paddingBottom: '23px',
                    lineHeight: '45px',
                  }}
                >
                  {children}
                </h4>
              );
            }
            case 5: {
              return (
                <h5
                  className="text-lg md:text-xl"
                  style={{
                    color: '#C6742B',
                    fontWeight: '700',
                    paddingBottom: '23px',
                    lineHeight: '45px',
                  }}
                >
                  {children}
                </h5>
              );
            }
            case 6: {
              return (
                <h6
                  className="text-base md:text-lg"
                  style={{
                    color: '#C6742B',
                    fontWeight: '700',
                    paddingBottom: '23px',
                    lineHeight: '45px',
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
              <figure>
                <Image
                  draggable={false}
                  width={args.image.width}
                  height={args.image.height}
                  src={new URL(
                    args.image.url,
                    env.NEXT_PUBLIC_STRAPI_URL,
                  ).toString()}
                  alt={args.image.alternativeText ?? 'Blog image'}
                  data-img-type={args.image.alternativeText ?? 'default'}
                />

                {args.image.caption && (
                  <figcaption className="pt-6 text-center text-[10px] italic md:text-[20px]">
                    {args.image.caption}
                  </figcaption>
                )}
              </figure>
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
