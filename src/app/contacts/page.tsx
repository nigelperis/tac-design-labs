import React from 'react';

import styles from './Contact.module.css';
import EmailSection from './EmailSection';
import TopSection from './TopSection';

const Contacts = () => {
  return (
    <>
      <section>
        <div>
          <div className={styles.headerStyles}>
            <TopSection />
          </div>
          <div className={styles.bodyContainer}>
            {/* div B having div C and D*/}
            <div className={styles.leftConatiner}>
              {' '}
              {/* div C*/}
              Div C
            </div>
            <div className={styles.rightContainer}>
              {/* div D  */}
              Div D
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
