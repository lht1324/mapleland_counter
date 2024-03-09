import "./Home.css";
import Timer from "../Timer/Timer";
import InputInfo from "../InputInfo/InputInfo";
import Result from "../Result/Result";
import { memo, useCallback, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import KakaoAd from "../public/ad/KakaoAd";
import Spacer from "../public/Spacer";
import BuyMeACoffee from "../public/ad/BuyMeACoffee";
import useScreenSize from "../../hook/useScreenSize";

const Home = ({
    level,
    oldExp,
    newExp,
    oldMeso,
    newMeso,
    hpPotionPrice,
    mpPotionPrice,
    oldHpPotionCount,
    oldMpPotionCount,
    newHpPotionCount,
    newMpPotionCount
}) => {
    const [screenWidth, screenHeight] = useScreenSize();
    const [isMobile, setIsMobile] = useState(screenHeight < 1024);
    const [kakaoAd, setKakaoAd] = useState();

    // second
    const [resultTime, setResultTime] = useState(0);

    const onFinishTimer = useCallback((timerTime) => {
        setResultTime(timerTime);
    }, []);

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
                <InputInfo
                    level={level}
                    oldExp={oldExp}
                    newExp={newExp}
                    oldMeso={oldMeso}
                    newMeso={newMeso}
                    hpPotionPrice={hpPotionPrice}
                    mpPotionPrice={mpPotionPrice}
                    oldHpPotionCount={oldHpPotionCount}
                    oldMpPotionCount={oldMpPotionCount}
                    newHpPotionCount={newHpPotionCount}
                    newMpPotionCount={newMpPotionCount}
                />
            </div>
            <div className="bottom_section">
                {
                    // 시간 0이고 5분 후 경험치 메소 !isNan일 때 Result 출력
                    resultTime === 0 ? <div /> : <Result time={resultTime} />
                }
            </div>
            <Analytics />
        </div>
    )
}

export default memo(Home);