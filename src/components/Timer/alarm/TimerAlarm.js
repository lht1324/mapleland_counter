import "./TimerAlarm.css";
import alarmSfx from '../../../assets/sounds/bedside_clock_alarm.mp3';
import Button from "../../public/Button";
import Spacer from "../../public/Spacer";

const TimerAlarm = ({ isAlarmEnabled }) => {
    return (<div className="TimerAlarm">
        <div className="content_section">
            <input type="checkbox" value={isAlarmEnabled}/>
            <p>알람 재생</p>
        </div>
        <Spacer width={12} />
        <Button text={"끄기"}/>
    </div>)
}

export default TimerAlarm;