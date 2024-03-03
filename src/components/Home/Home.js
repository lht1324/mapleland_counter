import "./Home.css";
import Timer from "../Timer/Timer";
import InputInfo from "../InputInfo/InputInfo";
import Result from "../Result/Result";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import KakaoAd from "../public/KakaoAd";
import Spacer from "../public/Spacer";

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
            <KakaoAd key={"DAN-pqKngRwzXEqVrYUe"} />
            <div className="main_container" >
                <div className="top_section">
                    <Timer onFinishTimer={onFinishTimer} />
                    <Spacer width={12} />
                    <InputInfo userInfo={userInfo} onChangeUserInfo={onChangeUserInfo} />
                </div>
                <div className="bottom_section">
                    {
                        resultTime === 0 ? <div /> : <Result time={resultTime} userInfo={userInfo} />
                    }
                </div>
            </div>
            <KakaoAd key={"DAN-3P8InoCwjKVzKphh"} />
            <Analytics/>
        </div>
    )
}

export default Home;