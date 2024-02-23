import "./Home.css";
import Timer from "../Timer/Timer";
import InputInfo from "../InputInfo/InputInfo";
import Result from "../Result/Result";
import { useState } from "react";

const Home = () => {
    // 시간 0이고 5분 후 경험치 메소 isNotEmpty일 때 Result 출력
    const [userInfo, setUserInfo] = useState({
        oldExp: undefined,
        newExp: undefined,
        oldExpRatio: undefined,
        newExpRatio: undefined,
        oldMeso: undefined,
        newMeso: undefined
    });

    // second
    const [time, setTime] = useState(0);

    const onChangeUserInfo = (value) => {
        setUserInfo(value);
    }

    const onChangeTime = (value) => {
        setTime(value);
    }

    return(<div className="Home">
        <div className="top_section">
            <Timer time={time} onChangeTime={onChangeTime} />
            <InputInfo userInfo={userInfo} onChangeUserInfo={onChangeUserInfo} />
        </div>
        <Result time={time} userInfo={userInfo} />
    </div>)
}

export default Home;