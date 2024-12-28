import React from 'react';

import AdressSvg from '~/assets/svgs/adress.svg';
import ClockSvg from '~/assets/svgs/clock.svg';
import EmailSvg from '~/assets/svgs/email.svg';
import PhoneSvg from '~/assets/svgs/phone.svg';

import styles from './Contact.module.css';

const EmailSection = () => {
  return (
    <>
      <div className={styles.emailContainer}>
        <div className={styles.emailHeader}>
          <EmailSvg />
          <p className={styles.emailText}>Email</p>
        </div>
        <p className={styles.mailId}>tacdesignlab@gmail.com</p>
      </div>

      <div className={styles.photoContainer}>
        <div className={styles.phoneHeader}>
          <PhoneSvg />
          <p className={styles.phoneText}>Phone</p>
        </div>
        <p className={styles.phoneNumber}>+91 90720 62086</p>
      </div>

      <div className={styles.addressContainer}>
        <div className={styles.addressHeader}>
          <AdressSvg className={styles.customSvg} />
          <p className={styles.addressText}>Address</p>
        </div>
        <p className={styles.addressDescription}>
          Tc 14/4455, Leela's, (Near Kerala Bank) Kesavadasapuram,
          Thiruvananthapuram, Kerala 695004
        </p>
      </div>

      <div className={styles.workingContainer}>
        <div className={styles.workingHeader}>
          <ClockSvg className={styles.clockSvg} />
          <p className={styles.workingHeading}>Working Hours</p>
        </div>
        <p className={styles.workingText}>
          Monday to Friday: 9AM – 5PM
          <br />
          Saturday: 9AM – 12:30PM
          <br />
          Sunday, Second Saturday & Other Public Holidays: Closed
        </p>
      </div>
    </>
  );
};

export default EmailSection;
