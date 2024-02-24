import { memo, useEffect, useState } from "react";
import "./TimeDisplay.css";
import TimeCounter from "./TimeCounter";

const TimeDisplay = ({ time }) => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const divider = <p className="divider">:</p>

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
            <TimeCounter time={hour} />
        </div>
        {divider}
        <div className="min_section">
            <TimeCounter time={minute} />
        </div>
        {divider}
        <div className="sec_section">
            <TimeCounter time={second} />
        </div>
    </div>)
}

export default memo(TimeDisplay);