import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePC from "./components/Page/PC/Home/Home"
import HomeMobile from "./components/Page/Mobile/Home/Home"
import { createContext, useCallback, useReducer } from 'react';
import AppStateProvider from './context/AppStateProvider';
import AppDispatchProvider from './context/AppDispatchProvider';
import { isMobile } from 'react-device-detect';

export const AppStateContext = createContext();
export const AppDispatchContext = createContext();

const appReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE": {
            const jsonObj = { ...state };
            jsonObj[action.key] = action.data;

            return jsonObj;
        }
        default: {
            return state;
        }
    }
}

function App() {
    const [userInfo, dispatch] = useReducer(
        appReducer,
        {
            level: undefined,
            oldExp: undefined,
            newExp: undefined,
            oldMeso: undefined,
            newMeso: undefined,
            hpPotionPrice: undefined,
            mpPotionPrice: undefined,
            oldHpPotionCount: undefined,
            oldMpPotionCount: undefined,
            newHpPotionCount: undefined,
            newMpPotionCount: undefined
        }
    );

    const onUpdate = useCallback((key, data) => {
        dispatch({
            type: "UPDATE",
            key: key,
            data: data
        })
    }, []);

    return (
        <AppDispatchProvider value={onUpdate}>
            <AppStateProvider value={{
                level: userInfo.level,
                oldExp: userInfo.oldExp,
                newExp: userInfo.newExp,
                oldMeso: userInfo.oldMeso,
                newMeso: userInfo.newMeso,
                hpPotionPrice: userInfo.hpPotionPrice,
                mpPotionPrice: userInfo.mpPotionPrice,
                oldHpPotionCount: userInfo.oldHpPotionCount,
                oldMpPotionCount: userInfo.oldMpPotionCount,
                newHpPotionCount: userInfo.newHpPotionCount,
                newMpPotionCount: userInfo.newMpPotionCount
            }}>
                <div className="App">
                    <Routes>
                    {
                        !isMobile
                        ? <Route path="/" element={<HomePC userInfo={userInfo} />} />
                        : <Route path="/" element={<HomeMobile userInfo={userInfo} />} />
                    }
                    </Routes>
                </div>
            </AppStateProvider>
        </AppDispatchProvider >
    );
}

export default App;