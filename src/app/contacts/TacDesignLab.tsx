import React from 'react';
import Image from 'next/image';

import styles from './Contact.module.css';

const TacDesignLab = () => {
  return (
    <>
      <div className={styles.tacDesignContainer}>
        <section className={styles.smallContainer}>
          <span>
            <img
              src="./images/contactImage.jpeg"
              alt="Contact Image"
              className={styles.imageStyle}
            />
          </span>
          <section className={styles.sectionContainer}>
            {/* Title line with arrow image and text */}
            <div className={styles.titleContainer}>
              <Image
                src="/images/arrowImage.png"
                alt="Arrow Image"
                className={styles.arrowImage}
                height={0}
                width={0}
                sizes="100vw"
              />
              <p className={styles.tacText}>TAC Design LAB</p>
            </div>

            {/* Description text */}
            <p className={styles.tacDescription}>
              Stay connected with us and explore our journey towards
              sustainability. Follow us on our social hubs for updates,
              projects, and inspiration!
            </p>
          </section>
        </section>
      </div>
    </>
  );
};

export default TacDesignLab;
