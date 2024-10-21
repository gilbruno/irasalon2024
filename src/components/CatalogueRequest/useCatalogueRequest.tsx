import { useEffect, useState } from "react"
import { useToast } from '@chakra-ui/react'
import parse from 'html-react-parser'
import { supabase } from "@/utils/supabase/supabaseConnection"
import { CODE_UNIQUE_KEY_VIOLATION, SALON_AUTOMNE_2024_TABLE } from "@/utils/supabase/constants"
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const useCatalogueRequest = () => {
    const toast = useToast()
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [email, setEmail]   = useState<string>('')
    const [name, setName]     = useState<string>('');
    const [phone, setPhone]   = useState<string>('');
    const [captchaValid, setCaptchaValid]   = useState<boolean>(false);

    //------------------------------------------------------------------------------ insertDataSalonAutomne2024
    const insertDataSalonAutomne2024 = async (table: string, email: string, name: string, phone: string) => {
      console.log("insertDataSalonAutomne2024 ----")
      console.log('email : ', email)
      console.log('name : ', name)
      console.log('phone : ', phone)
      let msgError = ''

      const { error } = await supabase
          .from(table)
          .insert({ email: email, name: name, phone: phone })
      if (error?.code == CODE_UNIQUE_KEY_VIOLATION) {
          msgError = 'This email already exists in our e-mail base'    
      }
      else {
          if (error) {
            console.log("error")
            throw error  
          }  
      }
      return msgError
    }


    useEffect(() => {
      if (captchaValid) {
        console.log('Le captcha est OK. On peut insérer les data')
        const insertData = async () => {
          await insertDataSalonAutomne2024(SALON_AUTOMNE_2024_TABLE, email, name, phone)
        }
        insertData()
      }
      
    }, [captchaValid])


    // Email validation function
    const validateEmail = () => {
      console.log("validateEmail : ", email)
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const result = regex.test(String(email).toLowerCase())
      console.log("result : ", result)
      return result
    }


    const handleChangeEmail = (e: any) => setEmail(e.target.value)
    const handleChangeName = (e: any) => setName(e.target.value)
    const handleChangePhone = (e: any) => setPhone(e.target.value)
  
    //------------------------------------------------------------------------------ isEmailValid
    const isEmailValid = () => {
      return validateEmail()
    }

    //------------------------------------------------------------------------------ isNameValid
    const isNameValid = () => {
      return !!name
    }

    //------------------------------------------------------------------------------ checkEmail
    const checkEmail = () => {
      console.log("checkEmail")
      if (!isEmailValid()) {
        console.log("email invalid")
        // Popup a succes toast if no errors.
        toast({
          title: "E-mail is not in the correct format",
          description: '',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return false
      }  
      return true

    }

    //------------------------------------------------------------------------------ checkName
    const checkName = () => {
      console.log("checkName : ", name)
      if (!isNameValid()) {
        // Popup an error if name is empty
        toast({
          title: "Name is required",
          description: '',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return false
      }  
      return true
    }

    //------------------------------------------------------------------------------ checkDataForm
    const checkDataForm = () => {
      const cEmail = checkEmail()
      const cName = checkName()
      return (cEmail && cName)
    }  
    
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
        setCaptchaValid(true)
      } else {
        // Popup a succes toast if no errors.
        toast({
          title: `Mmmmm ... our system detects that you're not human but rather a robot with a failure score of ${data?.score}`,
          description: '',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: `Error submitting form: ${error}`,
        description: '',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  //---------------------------------------------------------------------
  const handleSubmitCatchpaForm = async (e: any) => {
    const cDataForm = checkDataForm()
    if (!cDataForm) {
      return
    }

    e.preventDefault();
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      toast({
        title: `Execute recaptcha not available yet likely meaning key not recaptcha key not set`,
        description: '',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      submitEnquiryForm(gReCaptchaToken);
    });        
  }


    return {email, setEmail, name, setName, phone, setPhone, isEmailValid, validateEmail, handleChangeEmail, handleChangeName, handleChangePhone, handleSubmitCatchpaForm}
}    

export default useCatalogueRequest