import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/img/footer/instagram.jpg" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/img/footer/facebook.jpg" alt="Facebook" width={24} height={24} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/img/footer/twitter.jpg" alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/img/footer/youtube.jpg" alt="YouTube" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;