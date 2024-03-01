import { memo } from "react";
import "./TimerPlayer.css";
import ImageButton from "../../public/ImageButton";
import PlayImage from "../../../assets/ic_timer_play.svg";
import PauseImage from "../../../assets/ic_timer_pause.svg";
import StopImage from "../../../assets/ic_timer_stop.svg";
import ResetImage from "../../../assets/ic_timer_reset.svg";

const TimerPlayer = (props) => {
    const {
        onClickPlay,
        onClickPause,
        onClickStop,
        onClickReset
    } = props;

    return (<div className="TimerPlayer">
        <ImageButton src={PlayImage} onClick={onClickPlay} />
        <ImageButton src={PauseImage} onClick={onClickPause} />
        <ImageButton src={StopImage} onClick={onClickStop} />
        <ImageButton src={ResetImage} onClick={onClickReset} />
    </div>)
}

export default memo(TimerPlayer);