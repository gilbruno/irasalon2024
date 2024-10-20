'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CatalogueRequest.module.scss';
import useCatalogueRequest from './useCatalogueRequest';

const CatalogueRequest = () => {
  const {email, setEmail, name, setName, phone, setPhone, isEmailValid, setEmailValid, validateEmail, handleChangeEmail, handleChangeName, handleChangePhone, handlSendData} = useCatalogueRequest()

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src="/img/catalogueRequest/inrealartCatalogue.jpg"
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
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nom*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChangeName}
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
              value={email}
              onChange={handleChangeEmail}
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
              value={phone}
              onChange={handleChangePhone}
              placeholder="Adresse@gmail.com"
            />
          </div>
          {
            /*
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
            */
          }
          
          <button className={styles.submitButton}>
            Recevoir le catalogue
          </button>
      </div>
    </div>
  );
};

export default CatalogueRequest;