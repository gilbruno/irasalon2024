import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Témoignages</h2>
      <div className={styles.testimonialsList}>
        <div className={styles.testimonialCard}>
          <Image
            src="/img/testimonials/fboucheix.jpg"
            alt="François Boucheix"
            width={150}
            height={150}
            className={styles.testimonialImage}
          />
          <div className={styles.testimonialContent}>
            <h3 className={styles.testimonialName}>François Boucheix</h3>
            <p className={styles.testimonialText}>
              "Avec InRealArt, je peux porter le Rêve au sommet de son art et transmettre mon héritage
              de manière intemporelle à travers ces toiles. C'est une opportunité unique de fusionner
              tradition et innovation, offrant une nouvelle dimension à mon travail."
            </p>
            <p className={styles.testimonialClass}>Class. indice TOP 7 I-CAC</p>
          </div>
        </div>
        <div className={styles.testimonialCard}>
          <Image
            src="/img/testimonials/leloluce.jpg"
            alt="Leloluce"
            width={150}
            height={150}
            className={styles.testimonialImage}
          />
          <div className={styles.testimonialContent}>
            <h3 className={styles.testimonialName}>Leloluce</h3>
            <p className={styles.testimonialText}>
              "Grâce à InRealArt, je peux propulser ma vision artistique et le pop-art vers de nouveaux
              horizons et partager mon travail innovant avec le monde entier. C'est un privilège
              d'intégrer cette révolution, où chaque œuvre transcende le temps et trouve sa place dans
              l'avenir de l'art."
            </p>
            <p className={styles.testimonialClass}>Class. indice TOP 17 I-CAC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;