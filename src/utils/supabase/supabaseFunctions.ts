import { CODE_UNIQUE_KEY_VIOLATION } from "./constants"
import { supabase } from "./supabaseConnection"

//------------------------------------------------------------------------------ insertDataSalonAutomne2024
export const insertDataSalonAutomne2024 = async (table: string, email: string, resourcePath: string) => {
    let msgError = ''
    const { error } = await supabase
        .from(table)
        .insert({ email: email, resourcePath: resourcePath })
    if (error?.code == CODE_UNIQUE_KEY_VIOLATION) {
        msgError = 'This email already exists in our e-mail base'    
    }
    else {
        if (error) throw error  
    }
    return msgError
}
  