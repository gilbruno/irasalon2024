import { useEffect, useState } from "react"
import { useToast } from '@chakra-ui/react'
import parse from 'html-react-parser'
import { supabase } from "@/utils/supabase/supabaseConnection"
import { insertDataSalonAutomne2024 } from "@/utils/supabase/supabaseFunctions"
import { SALON_AUTOMNE_2024_TABLE } from "@/utils/supabase/constants"


const useCatalogueRequest = () => {
    const toast = useToast()
    
    const [email, setEmail]   = useState('')
    const [name, setName]     = useState('');
    const [phone, setPhone]   = useState('');

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
  
    const isEmailValid = () => {
      return validateEmail()
    }

    const isNameValid = () => {
      return !!name
    }

    const checkEmail = async() => {
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
      }  

    }

    const checkName = () => {
      console.log("checkName : ", name)
      if (!isNameValid()) {
        // Popup a succes toast if no errors.
        toast({
          title: "Name is required",
          description: '',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }  
      else {
        console.log('Valid name')
      }
    }

    //------------------------------------------------------------------------------ handlSendData
    const handlSendData = async () => {
      checkEmail()
      checkName()
      /*
      if (validateEmail(email)) {
          try {
            //Insert in Newsletter Table
            const msgError = await insertDataSalonAutomne2024(SALON_AUTOMNE_2024_TABLE, email, name, phone)
            if (msgError !== '') {
              toast({
                title: msgError,
                description: '',
                status: 'error',
                duration: 3000,
                isClosable: true,
              })  
            }
            else {
              // Popup a succes toast if no errors.
              toast({
                title: "Congrats ! We'll stay in touch soon ",
                description: '',
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            }
          } catch (error) {
            throw error
          }

      } else {
          // Popup a succes toast if no errors.
          toast({
            title: "E-mail is not in the correct format",
            description: '',
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
          
      }
          */
    }
    

    return {email, setEmail, name, setName, phone, setPhone, isEmailValid, validateEmail, handleChangeEmail, handleChangeName, handleChangePhone, handlSendData}
}    

export default useCatalogueRequest