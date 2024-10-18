import styles from './EventInfo.module.scss';

export default function EventInfo() {
  return (
    <div className={styles.eventInfoContainer}>
      <div className={styles.eventInfoItem}>
        <h2 className={styles.title}>Venez rencontrer Catherine Sénéchal et ses oeuvres sur son emplacement</h2>
      </div>
      <div className={styles.eventInfoItem}>
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