import "./TimerModifier.css";
import Button from "../../public/Button";
import { memo } from "react";

const TimerModifier = ({ onClickSetTime }) => {
    return (
        <div className="TimerModifier">
            <Button text={"-5M"} value={-300} onClickButton={onClickSetTime} />
            <Button text={"+5M"} value={300} onClickButton={onClickSetTime} />
            <Button text={"-15M"} value={-900} onClickButton={onClickSetTime} />
            <Button text={"+15M"} value={900} onClickButton={onClickSetTime} />
            <Button text={"-1H"} value={-3600} onClickButton={onClickSetTime} />
            <Button text={"+1H"} value={3600} onClickButton={onClickSetTime} />
        </div>
    )
}

export default memo(TimerModifier);