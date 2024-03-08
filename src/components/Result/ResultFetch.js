import { createClient } from '@supabase/supabase-js';
import { SupabaseConfig } from './config/SupabaseConfig';

export async function getExpList() {
    const supabaseUrl = SupabaseConfig.projectUrl
    const supabaseKey = SupabaseConfig.apiKey
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    try {
        const { data, error } = await supabase
            .from('exp_table')
            .select("id, exp")

        if (error) {
            throw error
        }

        return JSON.parse(JSON.stringify(data)).sort((a, b) => {
            return a.id - b.id;
        });
    } catch (e) {
        console.log(`Error occured in getExpList(): ${e}`)
        return;
    }
}