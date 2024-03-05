import "./TimerAlarmController.css";
import Button from "../../public/Button";
import Spacer from "../../public/Spacer";

const TimerAlarmController = ({
    isAlarmEnabled,
    isAlarmLoopEnabled,
    onClickEnabledCheckBox,
    onClickLoopCheckBox,
    onClickAlarmStop
}) => {
    return (<div className="TimerAlarmController">
        <div className="content_section">
            <div className="check_item" onClick={onClickEnabledCheckBox}>
                <input className="checkbox" type="checkbox" value={isAlarmEnabled} onChange={onClickEnabledCheckBox} />
                <Spacer width={5} />
                <p>알람 재생</p>
            </div>
            <div className="check_item" onClick={onClickLoopCheckBox}>
                <input className="checkbox" type="checkbox" value={isAlarmLoopEnabled} onChange={onClickLoopCheckBox} />
                <Spacer width={5} />
                <p>반복</p>
            </div>
        </div>
        <Spacer width={12} />
        <Button text={"끄기"} onClick={onClickAlarmStop} />
    </div>)
}

export default TimerAlarmController;