import React from 'react';
import Image from 'next/image';
import styles from './TrustedPartners.module.scss';

const TrustedPartners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperText}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Ils nous font confiance</div>
        </div>
      </div>
      <div className={styles.partnersLogo}>
        <Image className={styles.partner1} src="/img/partners/leadouze.jpg" alt="Galerie A. LEADOUZE" width={200} height={100}/>
        <Image className={styles.partner2} src="/img/partners/art_thema.jpg" alt="Art Thema"  width={150} height={150}/>
      </div>
    </div>
  );
};

export default TrustedPartners;