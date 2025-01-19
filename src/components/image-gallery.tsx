import React, { useState } from 'react';
import Image from 'next/image';
import { Lightbox } from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';

import { Scan } from 'lucide-react';

import { cn } from '~/utils/cn';

interface ImageGalleryProps {
  images: string[];
  className: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      {images.map((image, idx) => (
        <div key={idx} className="group relative mb-5">
          <Image
            src={image}
            alt={`Image ${idx.toString()}`}
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            className={cn(
              'transform cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105',
              className,
            )}
            onClick={() => {
              handleImageClick(idx);
            }}
          />
          <div className="absolute right-3 top-2 h-[2vh] w-[2vw] opacity-0 transition-transform duration-300 group-hover:opacity-100">
            <Scan
              className="w-[2vw] text-white"
              onClick={() => {
                handleImageClick(idx);
              }}
            />
          </div>
        </div>
      ))}
      {open && (
        <Lightbox
          open={open}
          close={() => {
            setOpen(false);
          }}
          plugins={[Zoom]}
          className="w-full p-0"
          slides={images.map((image) => ({ src: image }))}
          index={currentIndex}
          styles={{
            slide: {
              padding: 0,
            },
          }}
        />
      )}
    </>
  );
};

export default ImageGallery;
