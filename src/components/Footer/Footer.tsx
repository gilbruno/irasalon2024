import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/path/to/instagram-icon.png" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/path/to/facebook-icon.png" alt="Facebook" width={24} height={24} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/path/to/twitter-icon.png" alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/path/to/youtube-icon.png" alt="YouTube" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;