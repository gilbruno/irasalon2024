import React from 'react';
import Image from 'next/image';
import styles from './Expertise.module.scss';

const Expertise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/img/expertise/c_meulemans.jpg"
          alt="Catherine Meulemans"
          width={300}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Le mot de notre experte</h2>
        <div className={styles.textExpertise}>
          Chez InRealArt, chaque œuvre est soigneusement choisie pour son caractère unique et sa capacité à sublimer votre collection. En faisant confiance à notre expertise, Catherine Sénéchal a pris une décision inspirée, tout comme tant d'autres amateurs d'art éclairés. Investir dans l'art, c'est bien plus qu'une acquisition matérielle : c'est une expérience émotionnelle, une immersion dans des histoires captivantes et des découvertes qui vibrent en harmonie avec votre sensibilité. Ajoutez une dimension nouvelle à votre collection et faites de chaque pièce une source d'inspiration personnelle.
        </div>
        <p className={styles.signature}>
          Meulemans Catherine<br />
          Head of Sales<br />
          Fondatrice Galerie Art Thema
        </p>
        <div className={styles.navigation}>
          <button className={styles.navButton}>&larr;</button>
          <button className={styles.navButton}>&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Expertise;