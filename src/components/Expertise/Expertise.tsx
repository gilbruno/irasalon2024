import React from 'react';
import Image from 'next/image';
import styles from './Expertise.module.scss';

const Expertise = () => {
  return (
    <div className={styles.container}>
      <img className={styles.expert} src="/img/expertise/c_meulemans.jpg" />
      <div className={styles.containerExpert}>
        <div className={styles.expertTitleWords}>
          <div className={styles.expertTitle}>Le mot de notre experte</div>
          <div className={styles.expertWords}>
            Chez InRealArt, chaque œuvre est soigneusement choisie pour son
            caractère unique et sa capacité à sublimer votre collection. En faisant
            confiance à notre expertise, Catherine Sénéchal a pris une décision
            inspirée, tout comme tant d&#039;autres amateurs d&#039;art éclairés.
            Investir dans l&#039;art, c&#039;est bien plus qu&#039;une acquisition
            matérielle : c&#039;est une expérience émotionnelle, une immersion dans
            des histoires captivantes et des découvertes qui vibrent en harmonie
            avec votre sensibilité. Ajoutez une dimension nouvelle à votre
            collection et faites de chaque pièce une source d&#039;inspiration
            personnelle.
          </div>
        </div>
        <div className={styles.identityExpertContainer}>
          <div className={styles.identityExpert}>
            Meulemans Catherine
            <br />
            Head of Sales
            <br />
            Fondatrice Galerie Art Thema
          </div>
        </div>
      </div>
    </div>

  )
};

export default Expertise;