import { getImageProps } from 'next/image';

import type { ImageProps } from 'next/image';

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
