import React from 'react';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pourquoi nous choisir ?</h2>
      <p className={styles.subtitle}>
        Explorez une collection unique de toiles physiques et de sculpture rare,
        de leurs copies numériques (NFT), accompagnées de leurs droits d'auteur.
      </p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.icon}>🖼️</div>
          <h3 className={styles.cardTitle}>Very Rare</h3>
          <p className={styles.cardText}>
            Forte de plus de 80 ans d'expérience d'années cumulées, notre équipe sélectionne moins de 100 œuvres d'artistes renommés.
          </p>
          <p className={styles.cardText}>
            Chaque pièce, soigneusement choisie, est sélectionnée pour son caractère unique et son potentiel à enrichir une collection.
          </p>
          <p className={styles.cardText}>
            Pour les collectionneurs, qu'ils soient expérimentés ou novices, acquérir des œuvres rares est un privilège permettant de se démarquer tout en donnant une valeur significative à leur collection.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>🖼️</div>
          <h3 className={styles.cardTitle}>Une Marketplace Unique</h3>
          <p className={styles.cardText}>
            Notre marketplace se distingue par sa singularité et son innovation, intégrant harmonieusement des œuvres physiques, des NFTs, et des droits d'auteur fractionnés.
          </p>
          <p className={styles.cardText}>
            Grâce à la blockchain, nous garantissons la transparence et la sécurité des transactions tout en assurant la traçabilité de chaque œuvre.
          </p>
          <p className={styles.cardText}>
            Cette approche novatrice permet aux collectionneurs d'accéder à des œuvres diversifiées et uniques, tout en participant à un marché artistique de pointe.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>🖼️</div>
          <h3 className={styles.cardTitle}>Opportunité d'Investissement</h3>
          <p className={styles.cardText}>
            L'art n'est pas seulement une passion, c'est aussi une opportunité d'investissement. Notre plateforme vous permet de diversifier votre portefeuille en acquérant des œuvres physiques et numériques ainsi que des droits d'auteur.
          </p>
          <p className={styles.cardText}>
            Grâce à la rareté des pièces proposées, chaque acquisition a le potentiel de prendre de la valeur avec le temps.
          </p>
          <p className={styles.cardText}>
            Que vous soyez novice ou expert, vous rejoignez ici un marché où l'art peut devenir une source de valorisation à long terme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;