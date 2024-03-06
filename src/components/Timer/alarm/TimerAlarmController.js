import "./TimerAlarmController.css";
import Button from "../../public/Button";
import Spacer from "../../public/Spacer";

const TimerAlarmController = ({
    isAlarmEnabled,
    isAlarmLoopEnabled,
    onChangeEnabledCheckBox,
    onChangeLoopCheckBox,
    onClickAlarmStop
}) => {
    return (<div className="TimerAlarmController">
        <div className="content_section">
            <div className="check_item" onClick={onChangeEnabledCheckBox}>
                <input className="checkbox" type="checkbox" checked={isAlarmEnabled} readOnly />
                <Spacer width={5} />
                <p>알람 재생</p>
            </div>
            <div className="check_item" onClick={onChangeLoopCheckBox}>
                <input className="checkbox" type="checkbox" checked={isAlarmLoopEnabled} readOnly />
                <Spacer width={5} />
                <p>반복</p>
            </div>
        </div>
        <Spacer width={12} />
        <Button text={`알람\n끄기`} onClickButton={onClickAlarmStop} />
    </div>)
}

export default TimerAlarmController;