const { createClient } = supabase;

const SUPABASE_URL = "TU_SUPABASE_URL";
const SUPABASE_KEY = "TU_PUBLIC_ANON_KEY";

window.supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
    multiTab: false
  }
});
