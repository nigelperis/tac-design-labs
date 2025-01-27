import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import {
  AutoScrollCarousel,
  AutoScrollCarouselContainer,
  AutoScrollCarouselNextButton,
  AutoScrollCarouselPrevButton,
  AutoScrollCarouselSlide,
} from '~/components/auto-scroll-carousel';
import OurWorkCarousel from '~/components/our-works-carousel';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import career1 from '~/assets/images/career-images/career-1.jpg';
import career2 from '~/assets/images/career-images/career-2.jpg';
import career3 from '~/assets/images/career-images/career-3.jpg';
import career4 from '~/assets/images/career-images/career-4.jpg';
import career5 from '~/assets/images/career-images/career-5.jpg';
import careerPageBackground from '~/assets/images/career-page-background.png';
import career from '~/assets/images/career.jpg';

export default function Career() {
  const images = [career1, career2, career3, career4, career5];

  const optimizedCareerPageBackground = getOptimizedBackgroundImage({
    src: careerPageBackground.src,
    width: careerPageBackground.width,
    height: careerPageBackground.height,
  });
  return (
    <div
      className="bg-cover py-16 font-primary"
      style={{
        backgroundImage: optimizedCareerPageBackground,
      }}
    >
      <div className="bg-white py-2">
        <div className="relative h-[340px] w-full">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${career.src})`,
            }}
          ></div>
          <div className="absolute inset-0 flex justify-start bg-black bg-opacity-50">
            <div className="px-[18px] py-8 text-white md:px-28 md:py-12">
              <h1 className="mb-8 px-4 text-2xl font-bold md:text-4xl">
                Join Our Team
              </h1>
              <p className="mt-2 px-4 text-xl font-[400] leading-10 md:text-3xl md:leading-normal">
                We work together, driven by our passion to serve the community
                and help you grow. Sounds good? Explore our opportunities and
                come join us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="font-primary">
        <div className="px-[18px] py-3 md:px-28 md:py-8">
          <h2 className="mb-4 text-center text-[28px] font-[700] text-[#552B0A] md:text-[42px]">
            Life Inside Our Office
          </h2>
          <p className="text-justify text-[16px] font-[400] leading-relaxed text-[#173552] md:text-[26px]">
            Our office is designed as a dynamic space for architectural
            dialogue, creativity, and innovative design. We foster an
            environment where every team member feels connected, both with each
            other and the space around them. Spread across a wide open,
            rectangular floor plan, our workspace encourages collaboration and
            sparks creativity. Understanding the psychology of space, we’ve
            crafted an environment that nurtures the creative minds of
            architects, helping them thrive in their work.
          </p>
          <AutoScrollCarousel
            className="relative -mx-[1rem] mt-6 md:-mx-28"
            loop={true}
            speed={1}
            autoScrollDirection="forward"
          >
            <AutoScrollCarouselContainer>
              {images.map((image, index) => (
                <AutoScrollCarouselSlide
                  key={index}
                  className="basis-[60%] pb-4 pl-[20px] md:basis-[30%] md:pl-[40px]"
                >
                  <Image
                    src={image.src}
                    alt={`Career Image ${String(index + 1)}`}
                    className="aspect-square overflow-hidden rounded-[20px] border-[2px] border-[#F0E0D6] object-cover md:w-[100px] md:rounded-[40px] md:border-[5px]"
                    layout="responsive"
                    width={image.width}
                    height={image.height}
                    style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
                  />
                </AutoScrollCarouselSlide>
              ))}
            </AutoScrollCarouselContainer>
            <div className="mt-4 flex items-center justify-between">
              <AutoScrollCarouselPrevButton className="absolute left-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300">
                <ChevronLeft size={28} className="text-primary-500" />
              </AutoScrollCarouselPrevButton>

              <AutoScrollCarouselNextButton className="absolute right-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300">
                <ChevronRight size={28} className="text-primary-500" />
              </AutoScrollCarouselNextButton>
            </div>
          </AutoScrollCarousel>
        </div>

        <div className="md:py-18 px-[18px] py-5 md:px-28">
          <h2 className="mb-4 text-[28px] font-[700] text-[#552B0A] md:text-[42px]">
            Discover Our Impactful Projects
          </h2>
          <p className="text-justify text-[16px] font-[400] leading-relaxed text-[#173552] md:text-[26px]">
            Explore how TAC Design LAB transforms spaces with sustainable and
            innovative designs. See firsthand how we integrate eco-friendly
            practices into every project we undertake.
          </p>
        </div>
        <OurWorkCarousel />
      </div>
    </div>
  );
}
