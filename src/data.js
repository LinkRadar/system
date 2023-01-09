import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://whdnwziteludjehnfuve.supabase.co"

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZG53eml0ZWx1ZGplaG5mdXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyMzA1NDYsImV4cCI6MTk4ODgwNjU0Nn0.DHN7rRntdu7klJf8GYUkAK5UBLrizzm7Lbf8ULScLU0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
