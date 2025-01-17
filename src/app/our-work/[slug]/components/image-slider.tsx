import React from 'react';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { ImageSliderProps } from './model';

import 'swiper/css';
import 'swiper/css/pagination';

const ImageSlider = (props: ImageSliderProps) => {
  const { images } = props;

  return (
    <div className="mx-auto mt-24 hidden w-full max-w-6xl px-4 lg:block">
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            // bulletClass: 'swiper-pagination-bullet !bg-blue-500 !w-3 !h-3',
            // bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-700',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="relative rounded-lg pb-12"
        >
          {images.map((image, idx) => (
            <SwiperSlide
              key={idx}
              className="transition-transform duration-300"
            >
              <div className="relative h-64 transform transition-all duration-300 hover:scale-105 md:h-80">
                <Image
                  src={image}
                  alt={'Slider image'}
                  width={500}
                  height={200}
                  className="h-full w-full rounded-[27px] border-4 border-[#ECC19A] object-cover shadow-[0px_3.6px_3.6px_0px_#00000040]"
                  priority={idx === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
