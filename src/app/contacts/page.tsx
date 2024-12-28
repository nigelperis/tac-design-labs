import React from 'react';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import contactPageBackground from '~/assets/images/contactusBG.png';

import styles from './Contact.module.css';
import EmailSection from './EmailSection';
import ScoialMediaSection from './ScoialMediaSection';
import TacDesignLab from './TacDesignLab';
import TopSection from './TopSection';

const Contacts = () => {
  const optimizedCareerPageBackground = getOptimizedBackgroundImage({
    src: contactPageBackground.src,
    width: contactPageBackground.width,
    height: contactPageBackground.height,
  });
  return (
    <section
      className="bg-[#EDD7C3] bg-contain py-16 font-primary bg-blend-soft-light"
      style={{
        backgroundImage: optimizedCareerPageBackground,
      }}
    >
      <div style={{ padding: '20px 30px 20px 70px', marginTop: '50px' }}>
        <div className={styles.headerStyles}>
          <TopSection />
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.leftConatiner}>
            <EmailSection />
          </div>
          <div className={styles.rightContainer}>
            <TacDesignLab />
            <div style={{ marginLeft: '50px' }}>
              <ScoialMediaSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
