import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://mfobeckmsjwylrljrrkb.supabase.co"

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mb2JlY2ttc2p3eWxybGpycmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk5MTA4NjYsImV4cCI6MTk3NTQ4Njg2Nn0.ogd7Q7jrTINNv68SHXzbB0suZEZEb4Zsh_ZW2ccAepI"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
