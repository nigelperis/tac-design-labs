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
      buttonThree: 'Villas', // ss
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
      buttonThree: 'Villas', // ss
      description:
        'Transforming interiors with eco-friendly, stylish designs that reflect individual personalities.',
    },
  ];

  return (
    <div style={{ display: 'block' }}>
      {cardContents.map((cardData, index) => {
        return (
          <section key={index} className={styles.miniContainer}>
            <img
              src={cardData.image}
              alt={cardData.heading}
              className={styles.imageStyle}
            />

            <span className={styles.textContent}>
              <p className={styles.paragraphStyle}>{cardData.heading}</p>
              <section className={styles.buttonContainer}>
                <button className={styles.buttonStyle}>
                  {cardData.buttonOne}
                </button>
                <button className={styles.buttonStyle}>
                  {cardData.buttonTwo}
                </button>
                <button className={styles.buttonStyle}>
                  {cardData.buttonThree}
                </button>
              </section>
              <p className={styles.para}>{cardData.description}</p>
            </span>
          </section>
        );
      })}
    </div>
  );
};

export default CardContainer;
