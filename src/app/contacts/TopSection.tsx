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

// import React from 'react';

// import styles from './Contact.module.css';

// const TopSection = () => {
//   return (
//     <section>
//       <p className={styles.firstHeading}>
//         Let’s Build Something Sustainable Together
//       </p>
//       <div>
//         <p className="text-justify text-[16px] font-[400] leading-relaxed text-[#173552] md:text-[26px]">
//           We’re here to bring your vision to life while treading lightly on the
//           planet. Reach out to us to discuss your project or for any inquiries.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default TopSection;
