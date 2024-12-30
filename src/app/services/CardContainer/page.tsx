import React from 'react';

import styles from '../styles/ServicePage.module.css';

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
      buttonTwo: 'HealthCare',
      buttonThree: 'Yoga Centers',
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
      buttonOne: 'Residential',
      buttonTwo: 'Commercial Interiors',
      description:
        'Transforming interiors with eco-friendly, stylish designs that reflect individual personalities.',
    },
  ];

  return (
    <div className="block" style={{ fontFamily: 'Comic Sans MS' }}>
      {cardContents.map((cardData, index) => {
        return (
          <section
            key={index}
            className="mb-5 flex w-full max-w-[1200px] flex-row items-center gap-14 rounded-2xl bg-white/40 p-10 shadow-md"
          >
            <img
              src={cardData.image}
              alt={cardData.heading}
              className="h-[450px] w-[450px] rounded-2xl border-4 border-[#ecc19a]"
            />
            <span className="flex-1 pl-5">
              <p className="mb-5 text-4xl font-bold text-[#552b0a]">
                {cardData.heading}
              </p>
              <section className="mb-5 flex gap-4">
                <button className="flex h-[51px] min-w-[134px] items-center justify-center rounded-full border border-[#c6742b] bg-[#ffffffe5] px-5 py-2 text-xl font-bold text-[#C6742B] transition-all duration-300 hover:scale-105 hover:bg-[#ecc19a]">
                  {cardData.buttonOne}
                </button>
                <button className="flex h-[51px] min-w-[134px] items-center justify-center rounded-full border border-[#c6742b] bg-[#ffffffe5] px-5 py-2 text-xl font-bold text-[#C6742B] transition-all duration-300 hover:scale-105 hover:bg-[#ecc19a]">
                  {cardData.buttonTwo}
                </button>
                {cardData.buttonThree && (
                  <button className="flex h-[51px] min-w-[134px] items-center justify-center rounded-full border border-[#c6742b] bg-[#ffffffe5] px-5 py-2 text-xl font-bold text-[#C6742B] transition-all duration-300 hover:scale-105 hover:bg-[#ecc19a]">
                    {cardData.buttonThree}
                  </button>
                )}
              </section>
              <p className="mt-2 text-lg font-normal leading-[45px] tracking-wide text-black">
                {cardData.description}
              </p>
            </span>
          </section>
        );
      })}
    </div>
  );
};

export default CardContainer;
