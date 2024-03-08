import "./TimerAlarmController.css";
import Button from "../../public/Button";
import Spacer from "../../public/Spacer";
import alarmUrl from '../../../assets/sounds/bedside_clock_alarm.mp3';
import useAudio from "../../../hook/useAudio";
import { memo, useEffect, useState } from "react";

const TimerAlarmController = ({
    isAlarmPlaying,
    onClickStopAlarm
}) => {
    const [isAlarmEnabled, setIsAlarmEnabled] = useState(true);
    const [isAlarmLoopEnabled, setIsAlarmLoopEnabled] = useState(false);

    const [onClickPlayAudio, onClickStopAudio, onChangeLoop] = useAudio(alarmUrl)

    const onChangeEnabledCheckBox = () => {
        setIsAlarmEnabled((prevIsEnabled) => !prevIsEnabled);
    }

    const onChangeLoopCheckBox = () => {
        setIsAlarmLoopEnabled((prevIsEnabled) => !prevIsEnabled);
        onChangeLoop();
    }

    useEffect(() => {
        if (isAlarmPlaying) {
            isAlarmEnabled ? onClickPlayAudio() : onClickStopAlarm();
        } else {
            onClickStopAudio();
        }
    }, [isAlarmPlaying]);

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
        <Button text={`알람\n끄기`} onClickButton={onClickStopAlarm} />
    </div>)
}

export default memo(TimerAlarmController);