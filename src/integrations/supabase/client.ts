import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "Missing Supabase environment variables. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local (see .env.example).",
  );
}

// The anon key is safe to expose in the browser bundle by design — it only
// grants the public-facing permissions configured in the Supabase project's
// Row Level Security policies. Do NOT put the service-role key here.

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Reused by the contact / discovery / application / resources forms to POST
// to the Edge Function that emails the inquiry. One source of truth.
export const CONTACT_EMAIL_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/send-contact-email`;
