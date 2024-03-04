import { memo } from "react";
import "./TimerPlayer.css";
import ImageButton from "../../public/ImageButton";
import PlayImage from "../../../assets/images/ic_timer_play.svg";
import PauseImage from "../../../assets/images/ic_timer_pause.svg";
import StopImage from "../../../assets/images/ic_timer_stop.svg";
import ResetImage from "../../../assets/images/ic_timer_reset.svg";

const TimerPlayer = (props) => {
    const {
        onClickPlay,
        onClickPause,
        onClickStop,
        onClickReset
    } = props;

    return (<div className="TimerPlayer">
        <ImageButton src={PlayImage} alt={"재생"} onClick={onClickPlay} />
        <ImageButton src={PauseImage} alt={"일시정지"} onClick={onClickPause} />
        <ImageButton src={StopImage} alt={"정지"} onClick={onClickStop} />
        <ImageButton src={ResetImage} alt={"초기화"} onClick={onClickReset} />
    </div>)
}

export default memo(TimerPlayer);