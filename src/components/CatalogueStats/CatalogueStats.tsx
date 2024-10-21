import React from 'react';
import styles from './CatalogueStats.module.scss';

const CatalogueStats = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Le catalogue InRealArt c'est</h2>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>10 +</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>C'est le </span>
            <span className={styles.boldText}> nombre d'artistes </span>
            <span className={styles.normalText}>qui ont été </span>
            <span className={styles.boldText}> sélectionnés  </span>
            <span className={styles.normalText}>pour rejoindre l'aventure IRA en mettant à disposition des </span>
            <span className={styles.boldText}>œuvres uniques </span>
            <span className={styles.normalText}>et</span>
            <span className={styles.boldText}> rares</span>
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>&lt; 100</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>C'est le </span>
            <span className={styles.boldText}> nombre d'œuvres</span>
            <span className={styles.normalText}>que nous avons choisies pour</span>
            <span className={styles.boldText}> votre collection</span>
            <span className={styles.normalText}>, que vous soyez un</span>
            <span className={styles.boldText}>novice, collectionneur ou expert </span>
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>5000 +</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>C'est le</span>
            <span className={styles.boldText}> nombre de testeurs internationaux </span>
            <span className={styles.normalText}>qui se sont inscrits pour </span>
            <span className={styles.boldText}> évaluer et tester </span>
            <span className={styles.normalText}>notre </span>
            <span className={styles.boldText}>marketplace innovante </span>
            <br></br><br></br>
            
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumberBig}>70 %</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>C'est la</span>
            <span className={styles.boldText}> part d'artistes </span>
            <span className={styles.normalText}>ayant</span>
            <span className={styles.boldText}> une cote</span>
            <span className={styles.normalText}>dans le  </span>
            <span className={styles.boldText}>top 60 I-CAC </span>
            <span className={styles.normalText}>selon leurs </span>
            <span className={styles.boldText}>indices respectifs. Deux artistes </span>
            <span className={styles.normalText}>figurent dans le </span>
            <span className={styles.boldText}>top 10</span>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogueStats;