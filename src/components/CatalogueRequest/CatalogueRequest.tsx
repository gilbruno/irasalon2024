'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CatalogueRequest.module.scss';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

import useCatalogueRequest from './useCatalogueRequest';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const CatalogueRequest = () => {
  const {email, setEmail, name, setName, phone, setPhone, isEmailValid, validateEmail, handleChangeEmail, handleChangeName, handleChangePhone, handlSendData} = useCatalogueRequest()

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [notificationCaptchaError, setNotificationCaptchaError] = useState<string>('');
  const [notificationCaptchaSuccess, setNotificationCaptchaSuccess] = useState<string>('');

  //---------------------------------------------------------------------
  const submitEnquiryForm = async (gReCaptchaToken: string) => {
    console.log('gReCaptchaToken', gReCaptchaToken)
    try {
      const response = await fetch("/api/captchaSubmit", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gRecaptchaToken: gReCaptchaToken,
        }),
      });

      const data = await response.json();
      console.log(data)
      if (data?.success === true) {
        console.log(`Success with score: ${data?.score}`)
        setNotificationCaptchaSuccess(`Human checking successful ! You can now provide your e-mail ...`);
        
      } else {
        setNotificationCaptchaError(`Failure with score: ${data?.score}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setNotificationCaptchaError("Error submitting form. Please try again later.");
    }
  }


  //---------------------------------------------------------------------
  const handleSubmitCatchpaForm = async (e: any) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not available yet");
        setNotificationCaptchaError(
          "Execute recaptcha not available yet likely meaning key not recaptcha key not set"
        );
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        submitEnquiryForm(gReCaptchaToken);
      });    
    
}


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
        <FormControl color={'white'}>
          <div className={styles.formLabel}>
            <FormLabel color={'white'}>Nom *</FormLabel>
            <Input type='email' color={'grey'} backgroundColor={'white'} 
            placeholder='John Iloveart' 
            focusBorderColor='white'
            value={name}
            onChange={handleChangeName} 
            />
          </div>
          <div className={styles.formLabel}>
            <FormLabel color={'white'}>Email *</FormLabel>
              <Input type='email' color={'grey'} backgroundColor={'white'} 
              placeholder='e-mail' 
              focusBorderColor='white'
              value={email}
              onChange={handleChangeEmail} 
              />
          </div>  
          <div className={styles.formLabel}>
            <FormLabel color={'white'}>Mobile</FormLabel>
            <Input type='email' color={'grey'} backgroundColor={'white'} 
            placeholder='+33696563254' 
            focusBorderColor='white'
            value={phone}
            onChange={handleChangePhone} 
            />
          </div>  
        </FormControl>
          
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
          
          <button className={styles.submitButton} onClick={handlSendData}>
            Recevoir le catalogue
          </button>
      </div>
    </div>
  );
};

export default CatalogueRequest;