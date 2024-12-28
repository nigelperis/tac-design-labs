import React from 'react';

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
              <img
                src="./images/arrowImage.png"
                alt="Arrow Image"
                className={styles.arrowImage}
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
