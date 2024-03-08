import "./KakaoAd.css"
import { memo, useEffect, useRef } from "react";

const KakaoAd = ({ adKey, width, height }) => {
    const scriptElement = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");

        script.setAttribute("src", "https://t1.daumcdn.net/kas/static/ba.min.js");
        script.setAttribute("charset", "utf-8");
        script.setAttribute("async", "true");

        scriptElement.current?.appendChild(script);
    }, [adKey]);

    return (<div ref={scriptElement} className="KakaoAd">
        <ins
            className="kakao_ad_area"
            style={{ display: "none", width: "100%" }}
            data-ad-unit={adKey}
            data-ad-width={width}
            data-ad-height={height}
        />
    </div>)
}

export default memo(KakaoAd);