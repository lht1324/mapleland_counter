import Button from "./Button";
import ImageButton from "./ImageButton";
import { ReactComponent as PlayImage } from "../../assets/ic_timer_play.svg";
import { ReactComponent as PauseImage } from "../../assets/ic_timer_pause.svg";
import { ReactComponent as StopImage } from "../../assets/ic_timer_stop.svg";
import { ReactComponent as ResetImage } from "../../assets/ic_timer_reset.svg";
import TimeDisplay from "./TimeDisplay";
import "./Timer.css";
import { memo, useEffect, useState } from "react";
import { isValid } from "../../util";

const INTERVAL = 1000;

const Timer = ({ onFinishTimer }) => {
    const [initialTime, setInitialTime] = useState(0);
    const [time, setTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const onClickSetTime = (value) => {
        if (initialTime === 0 && !isTimerRunning) {
            if (time + value >= 0) {
                setTime(time + value);
            } else {
                alert("0보다 작은 값은 입력할 수 없습니다.");
            }
        }
    };

    const onClickPlay = () => {
        if (time !== 0 && initialTime === 0) {
            setInitialTime(time);
            setIsTimerRunning(true);
        }
    }

    const onClickPause = () => {
        setIsTimerRunning(false);
    }

    const onClickStop = () => {
        onFinishTimer(initialTime - time);
        setTime(0);
        setInitialTime(0);
        setIsTimerRunning(false);
    }

    const onClickReset = () => {
        setTime(0);
        setInitialTime(0);
        setIsTimerRunning(false);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - INTERVAL / INTERVAL);
        }, INTERVAL);

        if (time <= 0 && isTimerRunning) {
            onFinishTimer(initialTime);
            setInitialTime(0);
            setIsTimerRunning(false);
            clearInterval(timer);
        }

        // pause
        if (!isTimerRunning) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        }
    }, [time, isTimerRunning]);

    if (isValid(time)) {
        return (<div className="Timer">
            <TimeDisplay time={time} />
            <div className="player_section">
                <ImageButton src={<PlayImage width="50" height="50" />} onClick={onClickPlay} />
                <ImageButton src={<PauseImage width="50" height="50" />} onClick={onClickPause} />
                <ImageButton src={<StopImage width="50" height="50" />} onClick={onClickStop} />
                <ImageButton src={<ResetImage width="50" height="50" />} onClick={onClickReset} />
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
    } else {
        return <div></div>
    }
}

export default memo(Timer);