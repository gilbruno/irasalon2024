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
    const [isEmailValid, setEmailValid]   = useState(true)
    

    // Email validation function
    const validateEmail = (email: string) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(String(email).toLowerCase());
    }

    const handleChangeEmail = (e: any) => setEmail(e.target.value)
    const handleChangeName = (e: any) => setName(e.target.value)
    const handleChangePhone = (e: any) => setPhone(e.target.value)
  
    //------------------------------------------------------------------------------ handlSendData
    const handlSendData = async () => {
      
      if (validateEmail(email)) {
          setEmailValid(true)
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
          setEmailValid(false)
      }
    }
    

    return {email, setEmail, name, setName, phone, setPhone, isEmailValid, setEmailValid, validateEmail, handleChangeEmail, handleChangeName, handleChangePhone, handlSendData}
}    

export default useCatalogueRequest