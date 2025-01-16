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
import service from '~/assets/images/servicesBgYTBg.png';
import udupiService from '~/assets/images/udupi-service.jpeg';

interface ProjectCard {
  image: string;
  title: string;
  tags: string[];
  description: string;
}

const projects: ProjectCard[] = [
  {
    image: udupiService.src,
    title: 'Residential Projects',
    tags: ['Houses', 'Apartments', 'Villas'],
    description:
      'Crafting sustainable, eco-conscious homes that blend comfort with innovative design.',
  },
  {
    image: piscart.src,
    title: 'Commercial Projects',
    tags: ['Shops', 'Malls', 'Offices'],
    description:
      'Designing dynamic commercial spaces that foster growth and elevate brand presence.',
  },
  {
    image: institution.src,
    title: 'Institutional Projects',
    tags: ['Educational', 'Healthcare', 'Yoga Centers'],
    description:
      'Building institutions that inspire learning, healing, and holistic well-being.',
  },
  {
    image: hospitality.src,
    title: 'Hospitality Projects ',
    tags: ['Hotels', 'Resorts', 'Homestays'],
    description:
      'Creating serene and sustainable retreats that offer luxury in harmony with nature.',
  },
  {
    image: conservationProject.src,
    title: 'Conservation Projects',
    tags: ['Heritage Restoration', 'Adaptive Reuse'],
    description:
      'Preserving historical structures with innovative, eco-friendly methods that honor their legacy.',
  },
  {
    image: landscapeDesign.src,
    title: 'Landscape Design',
    tags: ['Parks', 'Gardens', 'Outdoor Spaces'],
    description:
      'Designing green, sustainable landscapes that enhance natural beauty and promote biodiversity.',
  },
  {
    image: interiorService.src,
    title: 'Interior Design',
    tags: ['Residential & Commercial Interiors'],
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
    className={`relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-[20px] bg-white bg-opacity-40 shadow-md`}
  >
    <div className="relative z-10 flex w-auto flex-col items-center px-10 py-4">
      {youtubeLink && (
        <iframe
          className="aspect-video h-[100%] w-[120%] rounded-[24px] shadow-lg md:mt-10 md:h-[90%] md:w-[160%]"
          src={youtubeLink}
          title="YouTube video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {!youtubeLink && imageLink && (
        <Image
          className="rounded-[24px] object-cover shadow-lg md:mt-10"
          src={imageLink}
          alt="Coming Soon"
          width={400}
          height={400}
        />
      )}
    </div>
    <div className="px-5">
      <p className="mt-4 max-w-2xl text-center font-primary text-[14px] font-[400] leading-relaxed md:text-[22px]">
        &quot;{text}&quot;
      </p>
      <h1 className="py-8 text-center font-primary text-[22px] font-[600] text-[#173552]">
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
      <div className="" style={{ fontFamily: 'Comic Sans MS' }}>
        <div className="mb-10 pt-16 text-center text-[32px] font-bold text-[#552b0a] lg:text-[42px]">
          <h1 style={{ fontFamily: 'Comic Sans MS' }}>We Work with Everyone</h1>
        </div>

        <div className="container mx-auto h-full max-w-[1100px] px-8">
          <div className="flex flex-col space-y-11">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-[22px] bg-white bg-opacity-[40%] shadow-sm md:flex-row"
              >
                <div className="aspect-square p-5 md:h-auto md:w-1/3 md:p-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full rounded-[22px] border-4 border-[#ECC19A] object-cover"
                    width={500}
                    height={500}
                    style={{
                      boxShadow: '0px 4px 4px 0px #00000040',
                    }}
                  />
                </div>

                <div className="-mt-5 ml-2 flex flex-col justify-center p-4 lg:w-1/2">
                  <h3 className="mb-2 font-primary text-[20px] font-bold text-[#552B0A] md:text-[32px]">
                    {project.title}
                  </h3>
                  <div className="mb-4 flex flex-wrap space-x-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="cursor-default rounded-full border border-[#C6742B] bg-white px-2 py-1 text-[14px] font-bold text-[#C6742B] hover:bg-orange-300 hover:text-white md:px-2 md:text-[18px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[14px] leading-relaxed text-black md:text-[20px]">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
            <h3 className="text-balance text-center text-[17px] md:text-[32px]">
              Every great project starts with a conversation. Let&apos;s design
              something extraordinary together—talk to us!
            </h3>
            <a
              href="tel:+919072062086"
              className="relative h-[70px] w-[225px] rounded bg-cover bg-center text-base font-bold text-primary-500 duration-200 hover:scale-105 md:h-[120px] md:w-[380px] md:p-10 md:text-2xl md:font-bold"
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
          className=""
          style={{
            backgroundImage: `url(${service.src})`,
          }}
        >
          <div className="font-primary text-[48px] font-[600] text-[#552B0A]">
            <h1 className="pt-10 text-center text-[24px] md:text-[48px]">
              Hear from those who trust us
            </h1>
          </div>
          <div className="pb-6 md:block">
            <ZoomCarousel loop={true} className="my-carousel">
              <ZoomCarouselContainer>
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