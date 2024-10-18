import styles from './EventInfo.module.scss';

export default function EventInfo() {
  return (
    <div className={styles.eventInfoContainer}>
      <div className={styles.eventInfoItem1}>
        <h2 className={styles.title}>Catalogue InReal Art 2024 <br/>
          Sénéchal &amp;</h2>
      </div>
      <div className={styles.eventInfoItem2}>
        <p className={styles.date}>Quand : du 23 au 27 octobre 2024</p>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonText}>
          Téléchargez gratuitement le catalogue exclusif
        </div>
      </div>
    </div>
  );
}