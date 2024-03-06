import "./KakaoAd.css"
import { memo } from "react";

const KakaoAd = ({ key, width, height }) => {
    return (<div className="KakaoAd">
        <ins
            class="kakao_ad_area"
            style={{ display: "none", width: "100%" }}
            data-ad-unit={key}
            data-ad-width={width}
            data-ad-height={height}
        />
        <script async type="text/javascript" charset="utf-8" src="https://t1.daumcdn.net/kas/static/ba.min.js" />
    </div>)
}

export default memo(KakaoAd);