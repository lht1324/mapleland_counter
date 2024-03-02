import "./KakaoAd.css"
import { memo } from "react";

const KakaoAd = ({ key, width, height }) => {
    return (<div className="KakaoAd">
        <ins class="kakao_ad_area" style={{ display: "none" }}
            data-ad-unit={key}
            data-ad-width={width}
            data-ad-height={height}/>
        <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
    </div>)
}

KakaoAd.defaultProps = {
    key: "",
    width: 250,
    height: 250
}

export default memo(KakaoAd);