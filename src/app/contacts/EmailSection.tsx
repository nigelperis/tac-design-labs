import React from 'react';

import styles from './Contact.module.css';

const EmailSection = () => {
  return (
    <>
      <div className={styles.emailContainer}>
        <svg
          width="30"
          height="19"
          viewBox="0 0 30 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.044 0.186035H4.74404C3.59035 0.186035 2.48391 0.547426 1.66813 1.19071C0.852345 1.83399 0.394043 2.70646 0.394043 3.6162V15.0501C0.394043 15.9598 0.852345 16.8323 1.66813 17.4756C2.48391 18.1188 3.59035 18.4802 4.74404 18.4802H25.044C26.1977 18.4802 27.3042 18.1188 28.12 17.4756C28.9357 16.8323 29.394 15.9598 29.394 15.0501V3.6162C29.394 2.70646 28.9357 1.83399 28.12 1.19071C27.3042 0.547426 26.1977 0.186035 25.044 0.186035ZM25.044 2.47281L15.619 7.58375C15.3986 7.68411 15.1486 7.73694 14.894 7.73694C14.6395 7.73694 14.3895 7.68411 14.169 7.58375L4.74404 2.47281H25.044Z"
            fill="#C6742B"
          />
        </svg>
        <p className={styles.emailText}>Email</p>
        <p className={styles.mailId}>tacdesignlab@gmail.com</p>
      </div>
      <span>
        <img
          src="./images/contactImage.jpeg"
          alt="Contact Image"
          className={styles.imageStyle}
        />
      </span>

      <div className={styles.photoContiner}>
        <p className={styles.phoneText}>Phone</p>
        <p className={styles.phoneNumber}>+91 99999999 / 88888888</p>
      </div>
    </>
  );
};

export default EmailSection;
