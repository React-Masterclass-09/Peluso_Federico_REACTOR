import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPBASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);


export default supabase;