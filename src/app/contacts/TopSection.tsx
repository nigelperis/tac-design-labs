import React from 'react';

import styles from './Contact.module.css';

const TopSection = () => {
  return (
    <>
      <p className={styles.firstHeading}>
        Let’s Build Something Sustainable Together
      </p>

      <div style={{ marginTop: '25px' }}>
        <p className={styles.secondHeading}>
          We’re here to bring your vision to life while treading lightly on the
          planet. Reach out to us to discuss your project or for any inquiries.
        </p>
      </div>
    </>
  );
};

export default TopSection;
