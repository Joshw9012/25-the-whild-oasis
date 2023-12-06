import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rabparcwazsnpblmzlze.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhYnBhcmN3YXpzbnBibG16bHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTUyMzAsImV4cCI6MjAxNzI3MTIzMH0.vW1ve162rZnuSjACAZYYDWpTLB9WMJ5DVHofwXnbNeg";
const supabase = createClient(supabaseUrl, supabaseKey);
//this part is from the API doc in superbase

export default supabase;
