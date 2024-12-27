import React from 'react';

import CardContainer from './CardContainer/page';
import styles from './styles/ServicePage.module.css';

const ServicePage = () => {
  return (
    <div>
      <div>
        <h1 className={styles.mainHeading}>We Work with Everyone</h1>
      </div>

      <div className={styles.container}>
        <CardContainer />
      </div>
    </div>
  );
};

export default ServicePage;
