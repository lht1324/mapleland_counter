import Button from "./Button";
import ImageButton from "./ImageButton";
import { ReactComponent as PlayImage } from "../../assets/ic_timer_play.svg";
import { ReactComponent as PauseImage } from "../../assets/ic_timer_pause.svg";
import { ReactComponent as ResetImage } from "../../assets/ic_timer_reset.svg";
import TimeDisplay from "./TimeDisplay";
import "./Timer.css";
import { memo } from "react";

const Timer = ({ time, onChangeTime }) => {
    const onClickSetTime = (value) => {
        if (time + value >= 0) {
            onChangeTime(time + value);
        } else {
            alert("0보다 작은 값은 입력할 수 없습니다.");
        }
    };

    return (<div className="Timer">
        <TimeDisplay time={time} />
        <div className="player_section">
            <ImageButton src={<PlayImage width="50" height="50" />} onClick={() => { }} />
            <ImageButton src={<PauseImage width="50" height="50" />} onClick={() => { }} />
            <ImageButton src={<ResetImage width="50" height="50" />} onClick={() => { }} />
        </div>
        <div className="moderate_section">
            <Button text={"-1시간"} onClick={() => onClickSetTime(-3600)} />
            <Button text={"-15분"} onClick={() => onClickSetTime(-900)} />
            <Button text={"-5분"} onClick={() => onClickSetTime(-300)} />
            <Button text={"+5분"} onClick={() => onClickSetTime(300)} />
            <Button text={"+15분"} onClick={() => onClickSetTime(900)} />
            <Button text={"+1시간"} onClick={() => onClickSetTime(3600)} />
        </div>
    </div>)
}

export default memo(Timer);