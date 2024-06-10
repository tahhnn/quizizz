import { createClient } from "@supabase/supabase-js";
import { API_BASE_URL, SUPABASE_KEY } from "./config";

export const supabase = createClient(API_BASE_URL, SUPABASE_KEY);


