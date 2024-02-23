import { useEffect, useState } from "react";
import "./TimeDisplay.css";
import TimeCounter from "./TimeCounter";

const TimeDisplay = ({ time }) => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

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

    return (<div className="TimeDisplay">
        <div className="hour_section">
            <TimeCounter time={hour} typeText={"시간"}  />
        </div>
        <div> : </div>
        <div className="min_section">
            <TimeCounter time={minute} typeText={"분"}  />
        </div>
        <div> : </div>
        <div className="sec_section">
            <TimeCounter time={second} typeText={"초"} />
        </div>
    </div>)
}

export default TimeDisplay;