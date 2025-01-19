'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { Lightbox } from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';

import {
  AutoScrollCarousel,
  AutoScrollCarouselContainer,
  AutoScrollCarouselNextButton,
  AutoScrollCarouselPrevButton,
  AutoScrollCarouselSlide,
} from '~/components/auto-scroll-carousel';

import workshop1 from '~/assets/completed-workshops/workshop-1.jpg';
import workshop2 from '~/assets/completed-workshops/workshop-2.jpg';
import workshop3 from '~/assets/completed-workshops/workshop-3.jpg';
import workshop4 from '~/assets/completed-workshops/workshop-4.jpg';
import workshop5 from '~/assets/completed-workshops/workshop-5.jpg';
import workshop6 from '~/assets/completed-workshops/workshop-6.jpg';
import workshop7 from '~/assets/completed-workshops/workshop-7.jpg';
import workshop8 from '~/assets/completed-workshops/workshop-8.jpg';
import workshop9 from '~/assets/completed-workshops/workshop-9.jpg';
import workshop10 from '~/assets/completed-workshops/workshop-10.jpg';
import workshop11 from '~/assets/completed-workshops/workshop-11.jpg';
import workshop12 from '~/assets/completed-workshops/workshop-12.jpg';
import workshop13 from '~/assets/completed-workshops/workshop-13.jpg';
import workshop14 from '~/assets/completed-workshops/workshop-14.jpg';
import workshop15 from '~/assets/completed-workshops/workshop-15.jpg';

const completedWorkshopsUpperHalf = [
  {
    key: 'workshop-1',
    image: workshop1,
    workshopName:
      'The Way of Vernacular | Sustainable Architecture Workshop | Prime College of Architecture, Nagapattinam 2023',
  },
  {
    key: 'workshop-2',
    image: workshop2,
    workshopName:
      'The Beauty of Bricks | National Level Symposium at Prime College of Architecture and Planning 2024 | Nagapattinam',
  },
  {
    key: 'workshop-3',
    image: workshop3,
    workshopName:
      'Stories with Mud and Brick | DC Workshop 2022 | Brick Masonry and Arches | DC School of Architecture, Trivandrum',
  },
  {
    key: 'workshop-4',
    image: workshop4,
    workshopName:
      'Redefining Material Perception | Brick Jalli Workshop | 65th Zonal NASA Convention 2022 | Vagamon',
  },
  {
    key: 'workshop-5',
    image: workshop5,
    workshopName:
      'Hands-On Workshop on Brick Bonding and Jali Design | Rathinam School of Architecture 2023 | Coimbatore',
  },
  {
    key: 'workshop-6',
    image: workshop6,
    workshopName:
      'Creative Bamboo Building Techniques | MAM School of Architecture Workshop 2022 | Tiruchirappalli',
  },
  {
    key: 'workshop-7',
    image: workshop7,
    workshopName:
      'Bamboo Workshop | Global Institute of Architecture 2024 | Palakkad',
  },
  {
    key: 'workshop-8',
    image: workshop8,
    workshopName:
      'Bamboo Workshop | Aalim Muhammed Salegh Academy of Architecture 2023 | Chennai',
  },
] as const;

const completedWorkshopsLowerHalf = [
  {
    key: 'workshop-9',
    image: workshop9,
    workshopName:
      'Alternate Is Inevitable | National Level Symposium | Prime College of Architecture, Kilvelur 2022',
  },
  {
    key: 'workshop-10',
    image: workshop10,
    workshopName:
      'Alternate Is Inevitable | National Level Symposium | Prime College of Architecture, Kilvelur 2022',
  },
  {
    key: 'workshop-11',
    image: workshop11,
    workshopName:
      'Process Of Upcycling Materials | Guest Lecture at PICA 2023 | Mumbai',
  },
  {
    key: 'workshop-12',
    image: workshop12,
    workshopName:
      'Socially Responsible Architecture | All India Radio Thiruvananthapuram | 23rd November 2022 | Yuvavani Program',
  },
  {
    key: 'workshop-13',
    image: workshop13,
    workshopName: 'Neo-Vernacular Architecture | HiveMeet 2022 | ArkiHive',
  },
  {
    key: 'workshop-14',
    image: workshop14,
    workshopName:
      'Exhibition on Architecture, Construction, and Interiors | Powered by CERA and BuildNext | 29th November 2022',
  },
  {
    key: 'workshop-15',
    image: workshop15,
    workshopName:
      'Countdown to Sustainability | TEDxKCMT 2023 | Live Speaker Series',
  },
] as const;

function DesktopCompletedWorkshopsCarousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  function openLightbox(index: number) {
    setActiveIndex(index);
    setIsOpen(true);
  }

  return (
    <>
      <div className="space-y-7">
        {/* Upper Half Carousel */}
        <AutoScrollCarousel autoScrollDirection="backward">
          <AutoScrollCarouselContainer>
            {completedWorkshopsUpperHalf.map((itm, index) => {
              return (
                <AutoScrollCarouselSlide
                  key={index}
                  className="relative basis-[48%] md:basis-[20%]"
                >
                  <div className="max-w-full transition-transform duration-300 hover:scale-105 md:py-4">
                    <div className="group flex cursor-pointer flex-col items-center justify-center">
                      <div
                        className="relative mb-3 overflow-hidden rounded-md border-[#F0E0D6] md:rounded-2xl md:border-4"
                        style={{
                          boxShadow:
                            '0px 3.81px 3.81px 0px rgba(0, 0, 0, 0.25)',
                        }}
                      >
                        <Image
                          src={itm.image}
                          alt={itm.workshopName}
                          width={itm.image.width}
                          height={itm.image.height}
                          className="h-56 w-44 overflow-hidden rounded-md md:h-[320px] md:w-[250px] md:rounded-2xl"
                          onClick={() => {
                            openLightbox(index);
                          }}
                        />
                        <div className="absolute right-3 top-2 h-[2vh] w-[2vw] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <ZoomIn
                            className="w-[2vw] text-white"
                            onClick={() => {
                              openLightbox(index);
                            }}
                          />
                        </div>
                      </div>

                      <p
                        className="text-balance text-center font-primary text-base font-bold text-[#173552]"
                        style={{ wordBreak: 'break-word' }}
                      >
                        {itm.workshopName}
                      </p>
                    </div>
                  </div>
                </AutoScrollCarouselSlide>
              );
            })}
          </AutoScrollCarouselContainer>

          <div className="">
            <AutoScrollCarouselPrevButton className="absolute left-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300">
              <ChevronLeft size={28} className="text-primary-500" />
            </AutoScrollCarouselPrevButton>

            <AutoScrollCarouselNextButton className="absolute right-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300">
              <ChevronRight size={28} className="text-primary-500" />
            </AutoScrollCarouselNextButton>
          </div>
        </AutoScrollCarousel>

        {/* Lower Half Carousel */}
        <AutoScrollCarousel autoScrollDirection="forward">
          <AutoScrollCarouselContainer>
            {completedWorkshopsLowerHalf.map((itm, index) => {
              return (
                <AutoScrollCarouselSlide
                  key={index}
                  className="relative basis-[48%] md:basis-[20%]"
                >
                  <div className="max-w-full transition-transform duration-300 hover:scale-105 md:py-4">
                    <div className="group flex cursor-pointer flex-col items-center justify-center">
                      <div
                        className="relative mb-3 overflow-hidden rounded-md border-2 border-[#F0E0D6] md:rounded-2xl md:border-4"
                        style={{
                          boxShadow:
                            '0px 3.81px 3.81px 0px rgba(0, 0, 0, 0.25)',
                        }}
                      >
                        <Image
                          src={itm.image}
                          alt={itm.workshopName}
                          width={itm.image.width}
                          height={itm.image.height}
                          className="h-56 w-44 overflow-hidden rounded-md md:h-[320px] md:w-[250px] md:rounded-2xl"
                          onClick={() => {
                            const indexToUse =
                              index + completedWorkshopsUpperHalf.length; // since upper half is already displayed  so we need to add the length of upper half to get the correct index

                            openLightbox(indexToUse);
                          }}
                        />
                        <div className="absolute right-3 top-2 h-[2vh] w-[2vw] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <ZoomIn
                            className="w-[2vw] text-white"
                            onClick={() => {
                              openLightbox(index);
                            }}
                          />
                        </div>
                      </div>

                      <p
                        className="text-balance text-center font-primary text-base font-bold text-[#173552]"
                        style={{ wordBreak: 'break-word' }}
                      >
                        {itm.workshopName}
                      </p>
                    </div>
                  </div>
                </AutoScrollCarouselSlide>
              );
            })}
          </AutoScrollCarouselContainer>

          <div className="">
            <AutoScrollCarouselPrevButton className="absolute left-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300">
              <ChevronLeft size={28} className="text-primary-500" />
            </AutoScrollCarouselPrevButton>

            <AutoScrollCarouselNextButton className="absolute right-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300">
              <ChevronRight size={28} className="text-primary-500" />
            </AutoScrollCarouselNextButton>
          </div>
        </AutoScrollCarousel>
      </div>
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => {
            setIsOpen(false);
            setActiveIndex(undefined);
          }}
          plugins={[Zoom]}
          className="w-full p-0"
          slides={[completedWorkshopsUpperHalf, completedWorkshopsLowerHalf]
            .flat()
            .map((itm) => ({
              src: itm.image.src,
            }))}
          index={activeIndex}
          styles={{
            slide: {
              padding: 0,
            },
          }}
        />
      )}
    </>
  );
}

export default DesktopCompletedWorkshopsCarousel;
