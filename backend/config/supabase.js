const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('SUPABASE_URL o SUPABASE_KEY no están configuradas en el .env');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
