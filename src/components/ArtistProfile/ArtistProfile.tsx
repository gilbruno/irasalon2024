import Image from 'next/image';
import styles from './ArtistProfile.module.scss';

export default function ArtistProfile() {
  return (
    <div className={styles.profile}>
      <div className={styles.artistName}>Catherine Sénéchal</div>
      <div className={`${styles.content} ${styles.contentBackground}`}>
        <div className={styles.text}>
            <p>Découvrez un univers raffiné à travers l'univers exclusif de Catherine Sénéchal, une artiste qui transcende les frontières de l'art contemporain. Chaque œuvre est bien plus qu'une simple création : c'est une fenêtre ouverte sur un monde où la couleur et l'émotion sont mariés à l'audace. Que vous soyez amateur éclairé ou collectionneur avisé, posséder une œuvre de Catherine, c'est entrer dans un cercle privilégié où la rareté et l'exceptionnel se rencontrent.</p>
            <p>Avec InRealArt, Catherine redéfinit les codes de l'art spontané et intuitif, produisant des toiles vibrantes qui captivent par leur sincérité et leur richesse visuelle. Son processus créatif libre et sans contrainte donne naissance à des compositions remarquables, chaque spectateur de projeter ses propres émotions. Embrasser son univers, c'est célébrer un style de vie où l'innovation et la sensibilité sont à l'honneur.</p>
            <p>Les couleurs éclatantes de ses œuvres, inspirées par Braque et Picasso, sont un vrai ode à la joie contagieuse. Ses créations, alliant tradition et modernité, offrent une expérience visuelle qui éveille les sens. Choisir une œuvre de Catherine Sénéchal, c'est acquérir une pièce maîtresse d'art contemporain qui transcendera le temps et les modes. Laissez-vous guider par votre instinct et faites une entrée remarquable dans le monde du luxe artistique, où l'émotion et l'art fusionnent pour créer une expérience inoubliable.</p>
        </div>
        <div className={styles.images}>
            <div className={styles.artistPhoto}>
                <Image src="/img/artistProfile/c_senechal.jpg" alt="Catherine Sénéchal" width={200} height={200} layout="responsive" />
            </div>
            <div className={styles.artistArtwork}>
                <Image src="/img/artistProfile/c_senechal_artwork.jpg" alt="Œuvre de Catherine Sénéchal" width={200} height={200} layout="responsive" />
            </div>
        </div>
      </div>
    </div>
  );
}