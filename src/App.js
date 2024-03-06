import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import { createClient } from '@supabase/supabase-js';
import { SupabaseConfig } from './config/SupabaseConfig';

const supabaseUrl = SupabaseConfig.projectUrl
const supabaseKey = SupabaseConfig.apiKey

function App() {
    const supabase = createClient(supabaseUrl, supabaseKey);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;