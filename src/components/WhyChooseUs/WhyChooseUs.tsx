import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseUs.module.scss';
import { CircleDollarSign, Gem, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pourquoi nous choisir ?</h2>
      <div className={styles.subtitle}>
          Explorez une collection unique de toiles physiques et de sculpture rare,
        <br />
        de leurs copies numériques (NFT), accompagnées de leurs droits
        d&#039;auteur.
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Gem size={20} color="#3C4ED7" />
          </div>

          <div className={styles.cardTitle}>Very Rare</div>
          <div className={styles.cardText}>
            Forte de plus de 80 ans d’expérience d’années cumulées, notre équipe
            sélectionne moins de 100 œuvres d’artistes renommés.
            <br />
            <br />
            Chaque pièce, soigneusement choisie, est sélectionnée pour son
            caractère unique et son potentiel à enrichir une collection.
            <br />
            <br />
            Pour les collectionneurs, qu’ils soient expérimentés ou novices,
            acquérir des œuvres rares est un privilège permettant de se démarquer
            tout en donnant une valeur significative à leur collection.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <ThumbsUp size={20} color="#3C4ED7" />
          </div>
          <div className={styles.cardTitle}>Une Marketplace Unique</div>

          <div className={styles.cardText}>
            Notre marketplace se distingue par sa singularité et son innovation,
            intégrant harmonieusement des œuvres physiques, des NFTs, et des
            droits d&#039;auteur fractionnés.
            <br />
            <br />
            Grâce à la blockchain, nous garantissons la transparence et la
            sécurité des transactions tout en assurant la traçabilité de chaque
            œuvre.
            <br />
            <br />
            Cette approche novatrice permet aux collectionneurs d&#039;accéder à
            des œuvres diversifiées et uniques, tout en participant à un marché
            artistique de pointe.
          </div>  
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <CircleDollarSign size={20} color="#3C4ED7" />
          </div>
          <div className={styles.cardTitle}>Opportunité d'Investissement</div>
          <div className={styles.cardText}>
            L&#039;art n’est pas seulement une passion, c’est aussi une
            opportunité d&#039;investissement.
            <br />
            Notre plateforme vous permet de diversifier votre portefeuille en
            acquérant des œuvres physiques et numériques ainsi que des droits
            d&#039;auteur.
            <br />
            <br />
            Grâce à la rareté des pièces proposées, chaque acquisition a le
            potentiel de prendre de la valeur avec le temps.
            <br />
            <br />
            Que vous soyez novice ou expert, vous rejoignez ici un marché où
            l&#039;art peut devenir une source de valorisation à long terme.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;