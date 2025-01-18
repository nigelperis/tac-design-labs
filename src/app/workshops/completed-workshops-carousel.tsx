import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

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

const completedWorkshops = [
  {
    image: workshop1,
    data: 'The Way of Vernacular Sustainable Architecture Workshop Prime College of Architecture, Nagapattinam 2023',
  },
  {
    image: workshop2,
    data: 'The Beauty of Bricks | National Level Symposium at Prime College of Architecture and Planning 2024 |Nagapattinam ',
  },
  {
    image: workshop3,
    data: 'Stories with Mud and Brick DC Workshop 2022 | Brick Masonry and Arches DC School of Architecture, Trivandrum',
  },
  {
    image: workshop4,
    data: 'Redefining Material Perception | Brick Jalli Workshop | 65th Zonal NASA Convention 2022 | Vagamon',
  },
  {
    image: workshop5,
    data: 'Hands-On Workshop on Brick Bonding and Jali Design Rathinam School of Architecture 2023 Coimbatore',
  },
  {
    image: workshop6,
    data: 'Creative Bamboo Building Techniques | MAM School of Architecture Workshop 2022 | Tiruchirappalli',
  },
  {
    image: workshop7,
    data: 'Bamboo Workshop | Global Institute of Architecture 2024 | Palakkad',
  },
  {
    image: workshop8,
    data: 'Bamboo Workshop | Aalim Muhammed Salegh Academy of Architecture 2023 | Chennai',
  },
  {
    image: workshop9,
    data: 'Alternate Is Inevitable | National Level Symposium | Prime College of Architecture, Kilvelur 2022',
  },
  {
    image: workshop10,
    data: 'Alternate Is Inevitable | National Level Symposium | Prime College of Architecture, Kilvelur 2022',
  },
  {
    image: workshop11,
    data: 'Upcycling Context-Specific Materials | Guest Lecture at PiCA 2023 | Mumbai',
  },
  {
    image: workshop12,
    data: 'Socially Responsible Architecture | All India Radio Thiruvananthapuram | 23rd November 2022 | Yuvavani Program',
  },
  {
    image: workshop13,
    data: 'Neo-Vernacular Architecture | HiveMeet 2022 | ArkiHive',
  },
  {
    image: workshop14,
    data: 'Exhibition on Architecture, Construction, and Interiors | Powered by CERA and BuildNext | 29th November 2022',
  },
  {
    image: workshop15,
    data: 'Countdown to Sustainability | TEDxKCMT 2023 | Live Speaker Series',
  },
];

const CompletedWorkshopsCarousel: React.FC = () => {
  return (
    <AutoScrollCarousel
      className="relative mt-6"
      loop={true}
      speed={1}
      autoScrollDirection="forward"
    >
      <AutoScrollCarouselContainer>
        {completedWorkshops.map((workshop, index) => (
          <AutoScrollCarouselSlide
            key={index}
            className="basis-[6%] md:basis-[7%]"
          >
            <div className="flex-col items-center justify-center">
              <div
                className="mx-auto mb-4 h-[220px] w-[180px] transform cursor-pointer rounded-lg border-2 border-[#F0E0D6] font-primary md:mb-3 md:h-[320px] md:w-[250px] md:rounded-[15px] md:border-4"
                style={{
                  boxShadow: '0px 3.81px 3.81px 0px rgba(0, 0, 0, 0.25)',
                }}
              >
                {/* Image */}
                <Image
                  src={workshop.image.src}
                  alt={`$Completed Workshop`}
                  fill
                  className="rounded-md object-cover md:rounded-xl"
                />
              </div>
              {/* Text Content */}
              <p className="mx-auto w-[300px] text-center text-base font-bold text-[#173552]">
                {workshop.data}
              </p>
            </div>
          </AutoScrollCarouselSlide>
        ))}
      </AutoScrollCarouselContainer>

      {/* Navigation Buttons */}
      <div className="mt-4 flex items-center justify-between">
        <AutoScrollCarouselPrevButton className="absolute left-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300">
          <ChevronLeft size={28} className="text-primary-500" />
        </AutoScrollCarouselPrevButton>

        <AutoScrollCarouselNextButton className="absolute right-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300">
          <ChevronRight size={28} className="text-primary-500" />
        </AutoScrollCarouselNextButton>
      </div>
    </AutoScrollCarousel>
  );
};

export default CompletedWorkshopsCarousel;
