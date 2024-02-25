import "./Home.css";
import Timer from "../Timer/Timer";
import InputInfo from "../InputInfo/InputInfo";
import Result from "../Result/Result";
import { createContext, useEffect, useState } from "react";

const Home = () => {
    // 시간 0이고 5분 후 경험치 메소 !isNan일 때 Result 출력
    const [userInfo, setUserInfo] = useState({
        oldExp: undefined,
        newExp: undefined,
        oldExpRatio: undefined,
        newExpRatio: undefined,
        oldMeso: undefined,
        newMeso: undefined
    });

    // second
    const [resultTime, setResultTime] = useState(0);

    const onChangeUserInfo = (value) => {
        setUserInfo(value);
    }

    const onFinishTimer = (timerTime) => {
        setResultTime(timerTime);
    }

    return (
        <div className="Home">
            <div className="top_section">
                <Timer onFinishTimer={onFinishTimer} />
                <InputInfo userInfo={userInfo} onChangeUserInfo={onChangeUserInfo} />
            </div>
            <div className="bottom_section">
                {
                    resultTime === 0 ? <div /> : <Result time={resultTime} userInfo={userInfo} />
                }
            </div>
        </div>
    )
}

export default Home;