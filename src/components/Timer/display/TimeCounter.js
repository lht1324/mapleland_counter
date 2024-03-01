import { memo } from "react";
import "./TimeCounter.css";

const TimeCounter = ({ time }) => {
    return (<div className="TimeCounter">
        <p>{time < 10 ? `0${time}` : time}</p>
    </div>)
}

export default memo(TimeCounter);