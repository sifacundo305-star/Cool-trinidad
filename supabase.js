const { createClient } = supabase;

const SUPABASE_URL = "https://fwujxwmjckrbqnlioifp.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3dWp4d21qY2tyYnFubGlvaWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4ODQ5OTAsImV4cCI6MjA4NzQ2MDk5MH0.FlPMctJpmOEvBYKBrFEzKgDVjJTHex5K-PFbLOoo1kw";

const client = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
    multiTab: false
  }
});

window.supabaseClient = client;
window.supabase = client; // 🔥 ESTA ES LA CLAVE
