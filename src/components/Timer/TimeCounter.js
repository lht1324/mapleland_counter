import { memo } from "react";
import "./TimeCounter.css";

const TimeCounter = ({ time, typeText }) => {
    return (<div className="TimeCounter">
        <p>{`${time < 10 ? `0${time}` : time}${typeText}`}</p>
    </div>)
}

export default memo(TimeCounter);