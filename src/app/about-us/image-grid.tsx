import React from 'react';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { cn } from '~/utils/cn';

import imageGridStyles from './image-grid-style.module.css';

interface ImageGridProps {
  mobileImage: string | StaticImport;
  mainImage: string | StaticImport;
  subImage1: string | StaticImport;
  subImage2: string | StaticImport;
  alignment?: 'main-left' | 'main-right' | 'main-bottom';
  title?: string | null;
  specialStyles?: boolean;
}

function ImageGrid(props: ImageGridProps) {
  const {
    mobileImage,
    mainImage,
    subImage1,
    subImage2,
    alignment = 'main-left',
    specialStyles = false,
  } = props;

  return (
    <div
      className={cn('my-5', imageGridStyles.image_grid, {
        [imageGridStyles.main_left]: alignment === 'main-left',
        [imageGridStyles.main_right]: alignment === 'main-right',
        [imageGridStyles.main_bottom]: alignment === 'main-bottom',
      })}
    >
      <Image
        className={cn(
          imageGridStyles.image_base_style,
          imageGridStyles.mobile_image,
        )}
        src={mobileImage}
        placeholder="blur"
        alt="Grid mobile image"
      />
      <Image
        className={cn(
          imageGridStyles.image_base_style,
          imageGridStyles.main_image,
          specialStyles ? 'lg:!h-[50vh]' : '',
        )}
        src={mainImage}
        placeholder="blur"
        alt="Grid main image"
      />
      <Image
        className={cn(
          imageGridStyles.image_base_style,
          imageGridStyles.sub_image_1,
        )}
        src={subImage1}
        placeholder="blur"
        alt="Grid sub image 1"
      />
      <Image
        className={cn(
          imageGridStyles.image_base_style,
          imageGridStyles.sub_image_2,
        )}
        src={subImage2}
        placeholder="blur"
        alt="Grid sub image 2"
      />
    </div>
  );
}

export default ImageGrid;
