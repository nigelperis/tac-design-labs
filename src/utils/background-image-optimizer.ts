import { getImageProps } from 'next/image';

import type { ImageProps } from 'next/image';

/**
 * Utility function to get the optimized background image string for the given image.
 * @returns The optimized background image string for the given image.
 * @example
 * ```ts
 * getOptimizedBackgroundImage({
 *  src: '/path/to/image.jpg',
 *  width: 1920,
 *  height: 1080,
 * })
 * //returns 'image-set(/path/to/image.jpg 1x, /path/to/image.jpg 2x, /path/to/image.jpg 3x)'
 * ```
 *
 */
function getOptimizedBackgroundImage(image: Omit<ImageProps, 'alt'>) {
  const {
    props: { srcSet, src },
  } = getImageProps({
    ...image,
    alt: 'Background image',
  });

  if (!srcSet) {
    return `url("${src}")`;
  }

  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ');
      return `url("${url}") ${dpi}`;
    })
    .join(', ');
  return `image-set(${imageSet})`;
}

export { getOptimizedBackgroundImage };
