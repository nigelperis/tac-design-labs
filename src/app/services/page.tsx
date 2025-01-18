import React from 'react';
import Image from 'next/image';

import {
  ZoomCarousel,
  ZoomCarouselContainer,
  ZoomCarouselSlide,
} from '~/components/zoom-carousel';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import OurWorkBgButton from '~/assets/images/button-background.png';
import servicePageBackground from '~/assets/images/career-page-background.png';
import comingsoon from '~/assets/images/commingsoon.webp';
import conservationProject from '~/assets/images/conservation-project.png';
import designDreamDeliverBG from '~/assets/images/design-dream-deliver-bg.jpg';
import hospitality from '~/assets/images/hospilatiy-service.png';
import institution from '~/assets/images/institution-service.png';
import interiorService from '~/assets/images/interior-service.png';
import landscapeDesign from '~/assets/images/landscape-design.png';
import piscart from '~/assets/images/piscart-service.jpeg';
import serviceYoutubeBg from '~/assets/images/services-yt-bg.png';
import udupiService from '~/assets/images/udupi-service.jpeg';

import { ServiceCard } from './service-card';
import type { StaticImageData } from 'next/image';

export interface ServiceCardInfo {
  title: string;
  image: StaticImageData;
  categories: string[];
  description: string;
}
const services: ServiceCardInfo[] = [
  {
    image: udupiService,
    title: 'Residential Projects',
    categories: ['Houses', 'Apartments', 'Villas'],
    description:
      'Crafting sustainable, eco-conscious homes that blend comfort with innovative design.',
  },
  {
    image: piscart,
    title: 'Commercial Projects',
    categories: ['Shops', 'Malls', 'Offices'],
    description:
      'Designing dynamic commercial spaces that foster growth and elevate brand presence.',
  },
  {
    image: institution,
    title: 'Institutional Projects',
    categories: ['Educational', 'Healthcare', 'YogaCenters'],
    description:
      'Building institutions that inspire learning, healing, and holistic well-being.',
  },
  {
    image: hospitality,
    title: 'Hospitality Projects ',
    categories: ['Hotels', 'Resorts', 'Homestays'],
    description:
      'Creating serene and sustainable retreats that offer luxury in harmony with nature.',
  },
  {
    image: conservationProject,
    title: 'Conservation Projects',
    categories: ['Heritage Restoration', 'Adaptive Reuse'],
    description:
      'Preserving historical structures with innovative, eco-friendly methods that honor their legacy.',
  },
  {
    image: landscapeDesign,
    title: 'Landscape Design',
    categories: ['Parks', 'Gardens', 'Outdoor Spaces'],
    description:
      'Designing green, sustainable landscapes that enhance natural beauty and promote biodiversity.',
  },
  {
    image: interiorService,
    title: 'Interior Design',
    categories: ['Residential & Commercial Interiors'],
    description:
      'Transforming interiors with eco-friendly, stylish designs that reflect individual personalities.',
  },
];

interface CarouselItemProps {
  youtubeLink?: string;
  imageLink?: string;
  text: string;
  author: string;
}

const carouselItems: CarouselItemProps[] = [
  {
    youtubeLink:
      'https://www.youtube.com/embed/qpOZ6rXgR_s?si=jQgeuC20qgI6c0pK',
    text: "We are much happier and comfortable living in this new house. The quality of life has improved a lot. It was a great experience and without TAC Design LAB this project wouldn't have been possible.",
    author: '~ Anunay & Akanksha',
  },
  {
    youtubeLink:
      'https://www.youtube.com/embed/n_6n7HprSFM?si=fRzYlkw0RqeKdlne',
    text: 'Everything was just how we imagined it. We shared our preferences with the designer, and he was very kind and patient, always ready to make changes and incorporate our suggestions into the design.',
    author: '~ Joe and Athira',
  },
  {
    imageLink: comingsoon.src,
    text: 'A glimpse into how the Sanchi Bags Tailoring Unit redefines sustainability and innovation in commercial spaces.',
    author: '',
  },
];

const CarouselItem: React.FC<CarouselItemProps> = ({
  youtubeLink,
  imageLink,
  text,
  author,
}) => (
  <div
    className={`relative flex h-auto w-auto flex-col items-center justify-center overflow-hidden rounded-[20px] bg-white bg-opacity-40 shadow-md`}
  >
    <div className="relative z-10 flex flex-col items-center px-10 py-4">
      {youtubeLink && (
        <iframe
          className="aspect-video h-[105%] w-[105%] rounded-[24px] shadow-lg md:mt-6 md:h-[75%] md:w-[140%]"
          src={youtubeLink}
          title="YouTube video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {!youtubeLink && imageLink && (
        <Image
          className="rounded-[24px] object-cover shadow-lg md:mt-6"
          src={imageLink}
          alt="Coming Soon"
          width={400}
          height={400}
        />
      )}
    </div>
    <div className="px-4">
      <p className="mt-4 text-center font-primary text-[14px] font-[400] leading-relaxed text-[#000000] md:text-[18px]">
        &quot;{text}&quot;
      </p>
      <h1 className="py-4 text-center font-primary text-[18px] font-[600] text-[#173552]">
        {author}
      </h1>
    </div>
  </div>
);

const ServicePage = () => {
  const optimizedCareerPageBackground = getOptimizedBackgroundImage({
    src: servicePageBackground.src,
    width: servicePageBackground.width,
    height: servicePageBackground.height,
  });
  const optimizedBG = getOptimizedBackgroundImage({
    src: designDreamDeliverBG.src,
    width: designDreamDeliverBG.width,
    height: designDreamDeliverBG.height,
  });
  const optimizedOurWorkBgButton = getOptimizedBackgroundImage({
    src: OurWorkBgButton.src,
    width: OurWorkBgButton.width,
    height: OurWorkBgButton.height,
  });

  return (
    <div
      className="relative bg-[#EDD7C3] bg-contain font-primary bg-blend-overlay"
      style={{ backgroundImage: optimizedCareerPageBackground }}
    >
      <div>
        <div className="mb-10 pt-16 text-center text-[32px] font-bold text-[#552b0a] lg:text-[42px]">
          <h1>We Work with Everyone</h1>
        </div>
        <div className="flex flex-col items-center space-y-11 px-4 md:px-32">
          {services.map((serviceItem, index) => (
            <ServiceCard key={index} service={serviceItem} />
          ))}
        </div>

        <div
          className="mt-16 flex flex-col items-center gap-y-6 border-y-4 border-white bg-cover px-6 py-8 md:flex-row md:border-y-8 md:px-32 md:py-12"
          style={{
            backgroundImage: optimizedBG,
          }}
        >
          <div className="flex justify-evenly gap-x-2 text-center text-[25px] md:flex-col md:text-left md:text-[72px]">
            <div className="flex">
              <h2 className="text-primary-500">Dream</h2>
              <span className="text-black">.</span>
            </div>
            <div className="flex">
              <h2 className="text-[#7D1F0E]">Design</h2>
              <span className="text-[#420C03]">.</span>
            </div>
            <div className="flex">
              <h2 className="text-[#6A4729]">Deliver</h2>
              <span className="text-[#552B0A]">.</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 leading-8 tracking-[2%] md:leading-[45px]">
            <h3 className="text-balance text-center text-[17px] leading-relaxed md:text-[32px]">
              Every great project starts with a conversation. Let&apos;s design
              something extraordinary together—talk to us!
            </h3>
            <a
              href="tel:+919072062086"
              className="h-[70px] w-[225px] rounded bg-cover bg-center text-base font-bold text-primary-500 duration-200 hover:scale-105 md:h-[90px] md:w-[300px] md:p-10 md:text-xl md:font-bold"
              style={{
                backgroundImage: optimizedOurWorkBgButton,
              }}
            >
              <div className="mt-2 flex max-h-full max-w-full items-center px-5 text-center md:mt-0">
                Schedule A Free Consultation
              </div>
            </a>
          </div>
        </div>
        <div
          className="mx-auto bg-opacity-60 bg-cover"
          style={{
            backgroundImage: `url(${serviceYoutubeBg.src})`,
          }}
        >
          <div className="font-primary font-[600] text-[#552B0A]">
            <h1 className="pt-6 text-center text-[24px] md:text-[36px]">
              Hear from those who trust us
            </h1>

            <ZoomCarousel loop={true} className="">
              <ZoomCarouselContainer className="pb-4">
                {carouselItems.map((item, index) => (
                  <ZoomCarouselSlide key={index}>
                    <CarouselItem
                      youtubeLink={item.youtubeLink}
                      text={item.text}
                      author={item.author}
                      imageLink={item.imageLink}
                    />
                  </ZoomCarouselSlide>
                ))}
              </ZoomCarouselContainer>
            </ZoomCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
