import { memo, useContext, useEffect, useState } from "react";
import "./TimeDisplay.css";
import TimeCounter from "./TimeCounter";
import { TimerStateContext } from "../Timer";

const TimeDisplay = () => {
    const time = useContext(TimerStateContext);

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const divider = <h2 className="divider">:</h2>

    useEffect(() => {
        if (time < 60) {
            setHour(0);
            setMinute(0);
            setSecond(time)
        } else if (time >= 60 && time < (60 * 60)) {
            setHour(0);
            setMinute(Math.floor(time / 60));
            setSecond(Math.floor(time % 60));
        } else {
            const hour = Math.floor(time / (60 * 60));
            const minute = Math.floor(time / 60 % 60);
            const second = Math.floor(time % 60);

            setHour(hour);
            setMinute(minute);
            setSecond(second);
        }
    }, [time]);

    useEffect(() => {
        if (hour === 0 && minute === 0 && second === 0) {
            document.title = "메이플랜드 타이머"
        } else {
            const formattedHour = hour < 10 ? `0${hour}` : hour
            const formattedMinute = minute < 10 ? `0${minute}` : minute
            const formattedSecond = second < 10 ? `0${second}` : second
            
            document.title = `${formattedHour}:${formattedMinute}:${formattedSecond}`
        }
    }, [hour, minute, second])

    return (<div className="TimeDisplay">
        <TimeCounter className="hour_section" time={hour} />
        {divider}
        <TimeCounter className="min_section" time={minute} />
        {divider}
        <TimeCounter className="sec_section" time={second} />
    </div>)
}

export default memo(TimeDisplay);