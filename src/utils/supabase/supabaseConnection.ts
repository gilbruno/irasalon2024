// Import the module for client creation from the Supabase SDK.
import { createClient } from '@supabase/supabase-js'

// Set variables for your Supabase connection. Replace supabaseUrl with the
// API address for your instance, and replace supabaseAnonKey with the anon
// key for your instance.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string

// Create and export the Supabase client.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)