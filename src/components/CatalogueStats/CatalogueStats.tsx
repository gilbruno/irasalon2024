import React from 'react';
import styles from './CatalogueStats.module.scss';

const CatalogueStats = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Le catalogue InRealArt c'est</h2>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>10 +</div>
          <p className={styles.statDescription}>
            C'est le nombre d'artistes qui ont été sélectionnés pour rejoindre l'aventure IRA en mettant à disposition des œuvres uniques et rares.
          </p>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>&lt; 100</div>
          <p className={styles.statDescription}>
            C'est le nombre d'œuvres que nous avons choisies pour votre collection, que vous soyez un novice, un collectionneur ou un expert.
          </p>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>5000 +</div>
          <p className={styles.statDescription}>
            C'est le nombre de testeurs internationaux qui se sont inscrits pour évaluer et tester de notre marketplace innovante.
          </p>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>70 %</div>
          <p className={styles.statDescription}>
            C'est la part d'artistes ayant une cote dans le top 60 I-CAC selon leurs indices respectifs. Deux artistes figurent dans le top 10.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatalogueStats;