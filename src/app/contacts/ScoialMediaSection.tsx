import React from 'react';

import styles from './Contact.module.css';

const ScoialMediaSection = () => {
  return (
    <>
      <section className={styles.lastSection}>
        <img
          src="./images/facebook.png"
          alt="Facebook Image "
          className={styles.fbImage}
        />
        <img
          src="./images/youtube.png"
          alt="youtube Image "
          className={styles.ytImage}
        />
        <img
          src="./images/instagram.png"
          alt="instagram Image"
          className={styles.inImage}
        />
      </section>
    </>
  );
};

export default ScoialMediaSection;
