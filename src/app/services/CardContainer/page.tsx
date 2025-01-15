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

      <div
        className="flex flex-col items-center gap-y-6 border-2 border-white bg-cover px-6 py-8 md:flex-row md:border-y-4 md:px-32 md:py-12"
        style={{
          backgroundImage: optimizedBG,
        }}
      >
        <div className="flex justify-evenly gap-x-2 text-center text-[32px] md:flex-col md:text-left md:text-[72px]">
          <div className="flex">
            <h2 className="inline text-primary-500">Dream</h2>
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
          <h3 className="text-md text-balance text-center md:text-[32px]">
            Every great project starts with a conversation. Let&apos;s design
            something extraordinary together—talk to us!
          </h3>
          <button
            className="relative h-[70px] w-[225] rounded bg-cover bg-center text-base font-bold text-primary-500 duration-200 hover:scale-105 md:h-[120px] md:w-[380px] md:p-10 md:text-2xl md:font-bold"
            style={{
              backgroundImage: optimizedOurWorkBgButton,
            }}
          >
            <div className="flex max-h-full max-w-full items-center px-5 text-center">
              Schedule A Free Consultation
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;

{
  /*
   */
}
