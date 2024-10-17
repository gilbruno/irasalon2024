import Image from 'next/image';
import styles from './HeroSection.module.scss';

export default function ImageHeader() {
  return (
    <div className={styles.header}>
      <Image
        src="/img/heroSection/section_Hero.jpg"
        alt="Salon d'Automne 2024"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
        <div className={styles.emptyRow}></div>
        <div className={styles.middleRow}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/heroSection/salon_automne.jpg"
              alt="Ticket Salon d'Automne 2024"
              width={400}
              height={200}
            />
          </div>
          <h1 className={styles.title}>Salon d'Automne 2024 Un programme exclusif avec l'artiste Catherine Sénéchal et InReal Art</h1>
        </div>
        <p className={styles.description}>Venez rencontrer Catherine Sénéchal et ses oeuvres sur son emplacement</p>
      </div>
    </div>
  );
}