import React from 'react';
import Image from 'next/image';
import styles from './TrustedPartners.module.scss';

const TrustedPartners = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ils nous font confiance</h2>
      <div className={styles.partnersContainer}>
        <div className={styles.partner}>
          <Image
            src="/img/partners/leadouze.jpg"
            alt="Galerie A. LEADOUZE"
            width={200}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className={styles.partner}>
          <Image
            src="/img/partners/art_thema.jpg"
            alt="Art Thema"
            width={150}
            height={150}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;