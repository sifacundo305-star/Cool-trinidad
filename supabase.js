const { createClient } = supabase;

const SUPABASE_URL = "https://fwujxwmjckrbqnlioifp.supabase.co";
const SUPABASE_KEY = "TU_KEY";

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
