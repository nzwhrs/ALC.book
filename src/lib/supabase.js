import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://gimnszsjxcxasalxhvpv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpbW5zenNqeGN4YXNhbHhodnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1MTcwMjEsImV4cCI6MjEwNDA5MzAyMX0.g6HhlS555Syse2385ixmNNuzoNJwJ_0Zi_Fjn6H3eR4"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
