import "./Home.css";
import Timer from "../Timer/Timer";
import InputInfo from "../InputInfo/InputInfo";
import Result from "../Result/Result";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import KakaoAd from "../public/ad/KakaoAd";
import Spacer from "../public/Spacer";
import BuyMeACoffee from "../public/ad/BuyMeACoffee";
import useScreenSize from "../../hook/useScreenSize";

const Home = () => {
    const [screenWidth, screenHeight] = useScreenSize();
    const [isMobile, setIsMobile] = useState(screenHeight < 1024);
    const [kakaoAd, setKakaoAd] = useState();

    // 시간 0이고 5분 후 경험치 메소 !isNan일 때 Result 출력
    const [userInfo, setUserInfo] = useState({
        oldExp: undefined,
        newExp: undefined,
        oldExpRatio: undefined,
        newExpRatio: undefined,
        oldMeso: undefined,
        newMeso: undefined,
        hpPotionPrice: undefined,
        mpPotionPrice: undefined,
        oldHpPotionCount: undefined,
        oldMpPotionCount: undefined,
        newHpPotionCount: undefined,
        newMpPotionCount: undefined
    });

    // second
    const [resultTime, setResultTime] = useState(0);

    const onChangeUserInfo = (value) => {
        setUserInfo(value);
    }

    const onFinishTimer = (timerTime) => {
        setResultTime(timerTime);
    }

    useEffect(() => {
        setIsMobile(screenWidth < 1024);
    }, [screenWidth]);

    useEffect(() => {
        setKakaoAd(<div></div>)
        if (isMobile) {
            setKakaoAd(<KakaoAd key={"DAN-I5lLkTnmGwuOqRDk"} adKey={"DAN-I5lLkTnmGwuOqRDk"} width={320} height={50} />)
        } else {
            setKakaoAd(<KakaoAd key={"DAN-AuzAwzP0dJgMIPG0"} adKey={"DAN-AuzAwzP0dJgMIPG0"} width={728} height={90} />)
        }
    }, [isMobile]);

    useEffect(() => {
        console.log(`kakao is changed`)
        
    }, [kakaoAd]);

    return (
        <div className="Home">
            <div className="ad_section">
                {kakaoAd}
                <Spacer width={10} />
                <BuyMeACoffee />
            </div>
            <Spacer height={30} />
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
            <Analytics />
        </div>
    )
}

export default Home;