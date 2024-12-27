import React from 'react';

import styles from './Contact.module.css';

const TacDesignLab = () => {
  return (
    <>
      <div className={styles.tacDesignContainer}>
        <section className={styles.smallContainer}>
          <img
            src="./images/arrowImage.png"
            alt="Arrow Image"
            className={styles.arrowImage}
          />
          <p className={styles.tacText}>TAC Design LAB</p>
          <p className={styles.tacDescription}>
            Stay connected with us and explore our journey towards
            sustainability. Follow us on our social hubs for updates, projects,
            and inspiration!
          </p>
        </section>
      </div>
    </>
  );
};

export default TacDesignLab;
