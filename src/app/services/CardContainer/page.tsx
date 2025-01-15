import React from 'react';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import OurWorkBgButton from '~/assets/images/button-background.png';
import designDreamDeliverBG from '~/assets/images/design-dream-deliver-bg.jpg';

const CardContainer = () => {
  const cardContents = [
    {
      image: '/images/udupi.jpeg',
      heading: 'Residential Projects',
      buttonOne: 'Houses',
      buttonTwo: 'Apartments',
      buttonThree: 'Villas',
      description:
        'Crafting sustainable, eco-conscious homes that blend comfort with innovative design.',
    },
    {
      image: '/images/image2.jpeg',
      heading: 'Commercial Projects',
      buttonOne: 'Shops',
      buttonTwo: 'Malls',
      buttonThree: 'Offices',
      description:
        'Designing dynamic commercial spaces that foster growth and elevate brand presence.',
    },
    {
      image: '/images/image3.png',
      heading: 'Institutional Projects',
      buttonOne: 'Educational',
      buttonTwo: 'Healthcare',
      buttonThree: 'YogaCenters',
      description:
        'Building institutions that inspire learning, healing, and holistic well-being.',
    },
    {
      image: '/images/image4.png',
      heading: 'Hospitality Projects',
      buttonOne: 'Hotels',
      buttonTwo: 'Resorts',
      buttonThree: 'HomeStay',
      description:
        'Crafting sustainable, eco-conscious homes that blend comfort with innovative design.',
    },
    {
      image: '/images/image5.png',
      heading: 'Conservation Projects',
      buttonOne: 'Heritage Restoration',
      buttonTwo: 'Adaptive Reuse',
      description:
        'Preserving historical structures with innovative, eco-friendly methods that honor their legacy.',
    },
    {
      image: '/images/image6.png',
      heading: 'Landscape Design',
      buttonOne: 'Parks',
      buttonTwo: 'Gardens',
      buttonThree: 'Outdoor Spaces',
      description:
        'Designing green, sustainable landscapes that enhance natural beauty and promote biodiversity.',
    },
    {
      image: '/images/image7.png',
      heading: 'Interior Design',
      buttonOne: 'Residential & Commercial Interiors',
      description:
        'Transforming interiors with eco-friendly, stylish designs that reflect individual personalities.',
    },
  ];

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
    <>
      <div className="block" style={{ fontFamily: 'Comic Sans MS' }}>
        {cardContents.map((cardData, index) => {
          return (
            <section
              key={index}
              className="ml-[30px] mt-[8%] flex h-[473px] w-[333px] flex-col items-center rounded-2xl bg-white bg-opacity-60 p-[25px] shadow-md lg:mb-5 lg:mt-[1%] lg:w-full lg:max-w-[1200px] lg:flex-row lg:gap-14 lg:p-10"
              style={{ border: '0.5px solid #D19A6A' }}
            >
              <img
                src={cardData.image}
                alt={cardData.heading}
                className="h-[290px] w-[290px] rounded-2xl border-4 border-[#ecc19a] lg:ml-[-3%] lg:h-[450px] lg:w-[450px]"
              />
              <span className="flex-1 pl-5">
                <p className="mt-3 text-lg font-bold text-[#552b0a] lg:mb-5 lg:text-4xl">
                  {cardData.heading}
                </p>
                <section className="mt-2 flex gap-1 lg:mb-5 lg:gap-4">
                  {cardData.buttonOne && (
                    <button className="flex items-center justify-center whitespace-nowrap rounded-full border border-[#c6742b] bg-[#ffffffe5] px-2 py-2 text-[14px] font-bold text-[#C6742B] transition-all duration-300 hover:scale-105 hover:bg-[#ecc19a] lg:h-[51px] lg:min-w-[134px] lg:px-5 lg:py-2 lg:text-xl">
                      {cardData.buttonOne}
                    </button>
                  )}
                  {cardData.buttonTwo && (
                    <button className="flex items-center justify-center whitespace-nowrap rounded-full border border-[#c6742b] bg-[#ffffffe5] px-2 py-2 text-[14px] font-bold text-[#C6742B] transition-all duration-300 hover:scale-105 hover:bg-[#ecc19a] lg:h-[51px] lg:min-w-[134px] lg:px-5 lg:py-2 lg:text-xl">
                      {cardData.buttonTwo}
                    </button>
                  )}

                  {cardData.buttonThree && (
                    <button className="flex items-center justify-center whitespace-nowrap rounded-full border border-[#c6742b] bg-[#ffffffe5] px-3 py-2 text-[14px] font-bold text-[#C6742B] transition-all duration-300 hover:scale-105 hover:bg-[#ecc19a] lg:h-[51px] lg:min-w-[134px] lg:px-5 lg:py-2 lg:text-xl">
                      {cardData.buttonThree}
                    </button>
                  )}
                </section>
                <p className="mt-2 text-[12px] font-normal leading-[20px] tracking-wide text-black lg:text-lg">
                  {cardData.description}
                </p>
              </span>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;

{
  /*
   */
}
