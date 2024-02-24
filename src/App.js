import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"

// 지금은 큰 의미가 없지만 이후 페이지가 추가될 걸 대비해 Context 구조를 미리 도입한다
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;