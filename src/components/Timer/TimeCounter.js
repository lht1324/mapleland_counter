import { memo } from "react";
import "./TimeCounter.css";

const TimeCounter = ({ time }) => {
    return (<div className="TimeCounter">
        <h1>{`${time < 10 ? `0${time}` : time}`}</h1>
    </div>)
}

export default memo(TimeCounter);