import "./TimerModifier.css";
import Button from "../../public/Button";
import { memo } from "react";
import { isMobile } from "react-device-detect";

const TimerModifier = ({ onClickSetTime }) => {
    const timeModifierStyle = { gridTemplateColumns: isMobile ? "repeat(3, 2fr)" : "repeat(2, 1fr)" }

    if (isMobile) {
        return (
            <div className="TimerModifier" style={timeModifierStyle}>
                <Button text={"-5M"} value={-300} onClickButton={onClickSetTime} />
                <Button text={"-15M"} value={-900} onClickButton={onClickSetTime} />
                <Button text={"-1H"} value={-3600} onClickButton={onClickSetTime} />
                <Button text={"+5M"} value={300} onClickButton={onClickSetTime} />
                <Button text={"+15M"} value={900} onClickButton={onClickSetTime} />
                <Button text={"+1H"} value={3600} onClickButton={onClickSetTime} />
            </div>
        )
    } else {
        return (
            <div className="TimerModifier" style={timeModifierStyle}>
                <Button text={"-5M"} value={-300} onClickButton={onClickSetTime} />
                <Button text={"+5M"} value={300} onClickButton={onClickSetTime} />
                <Button text={"-15M"} value={-900} onClickButton={onClickSetTime} />
                <Button text={"+15M"} value={900} onClickButton={onClickSetTime} />
                <Button text={"-1H"} value={-3600} onClickButton={onClickSetTime} />
                <Button text={"+1H"} value={3600} onClickButton={onClickSetTime} />
            </div>
        )
    }
}

export default memo(TimerModifier);