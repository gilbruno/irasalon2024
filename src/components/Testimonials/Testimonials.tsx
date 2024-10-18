import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  return (

  <div className={styles.container}>
    <div className={styles.wrapperText}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Témoignages</div>
      </div>
    </div>
    <div className={styles.containerTestimonials}>
      <div className={styles.containerTestimonial1}>
        <Image src="/img/testimonials/fboucheix.jpg" alt="François Boucheix" width={150} height={150} className={styles.testimonialImage} />
        <div className={styles.wrapperText2}>
          <div className={styles.title2}>
            <div className={styles.artist1}>François Boucheix</div>
          </div>
          <div className={styles.artistText1}>
            <span>
              <span className={styles.artistText11}>
                “Avec InRealArt, je peux porter le Rêve au sommet de son art et
                transmettre mon héritage de manière intemporelle à travers ces
                toiles. C&#039;est une opportunité unique de fusionner tradition
                et innovation, offrant une nouvelle dimension à mon travail.”
                <br />
              </span>
              <span className={styles.artistText12}>
                <br />
              </span>
              <span
                className={styles.artistText13}>
                Class. indice
              </span>
              <span
                className={styles.artistText14}>
                 TOP 7 I-CAC
                <br />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.containerTestimonial2}>
        <Image src="/img/testimonials/leloluce.jpg" alt="Leloluce" width={150} height={150} className={styles.testimonialImage}/>
        <div className={styles.wrapperText3}>
          <div className={styles.title2}>
            <div className={styles.artist2}>Leloluce</div>
          </div>
          <div 
            className={styles.artistText2}>
            <span>
              <span className={styles.artistText21}>
                “Grâce à InRealArt, je peux propulser ma vision artistique et le
                pop-art vers de nouveaux horizons et partager mon travail innovant
                avec le monde entier. C’est un privilège d’intégrer cette
                révolution, où chaque œuvre transcende le temps et trouve sa place
                dans l’avenir de l’art.
                <br />
                <br />
              </span>
              <span className={styles.artistText22}> Class. indice </span>
              <span className={styles.artistText23}>
                 TOP 17 I-CAC
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Testimonials;