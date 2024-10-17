import styles from './EventInfo.module.scss';

export default function EventInfo() {
  return (
    <div className={styles.eventInfo}>
      <p>Quand : du 23 au 27 octobre 2024</p>
      <p>Où : Emplacement : B4</p>
      <button className={styles.downloadButton}>
        Télécharger gratuitement le catalogue exclusif
      </button>
    </div>
  );
}