'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CatalogueRequest.module.scss';

const CatalogueRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    acceptPolicy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src="/path/to/catalogue-image.jpg"
          alt="Catalogue InRealArt"
          width={400}
          height={400}
          objectFit="contain"
        />
      </div>
      <div className={styles.formSection}>
        <h2 className={styles.title}>Catalogue Salon D'automne 2024</h2>
        <p className={styles.subtitle}>
          Explorez une collection unique de toiles physiques,
          de leurs copies numériques (NFT), accompagnées de leurs
          droits d'auteur.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nom*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrer votre nom"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Adresse mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Adresse@gmail.com"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Adresse@gmail.com"
            />
          </div>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="acceptPolicy"
              name="acceptPolicy"
              checked={formData.acceptPolicy}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptPolicy">Vous acceptez notre politique de confidentialité</label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Recevoir le catalogue
          </button>
        </form>
      </div>
    </div>
  );
};

export default CatalogueRequest;