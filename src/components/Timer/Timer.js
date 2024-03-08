import "./Timer.css";
import { clearInterval, setInterval } from 'worker-timers';
import { createContext, memo, useCallback, useEffect, useState } from "react";
import { isValid } from "../../util";
import TimeDisplay from "./display/TimeDisplay";
import TimerModifier from "./controller/TimerModifier";
import TimerPlayer from "./controller/TimerPlayer";
import TimerAlarmController from "./alarm/TimerAlarmController";
import Spacer from "../public/Spacer";

export const TimerStateContext = createContext();

const INTERVAL = 1000;

const Timer = ({ onFinishTimer }) => {
    const [initialTime, setInitialTime] = useState(0);
    const [time, setTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    
    const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);

    const onClickSetTime = useCallback((value) => {
        if (!isTimerRunning) {
            setTime((prevTime) => {
                if (prevTime + value >= 0) {
                    return prevTime + value;
                } else {
                    alert("0보다 작은 값은 입력할 수 없어요 :(");
                    return prevTime;
                }
            });
        }
    }, [isTimerRunning]);

    const onClickPlay = useCallback(() => {
        setInitialTime((prevInitialTime) => {
            if (prevInitialTime === 0) {
                return time;
            } else {
                return prevInitialTime;
            }
        })
        setIsTimerRunning((_) => {
            return time !== 0;
        })
    }, [time]);

    const onClickPause = useCallback(() => {
        setIsTimerRunning(false);
    }, []);

    const onClickStop = useCallback(() => {
        if (isTimerRunning) {
            onFinishTimer(initialTime - time);
            setTime(0);
            setInitialTime(0);
            setIsTimerRunning(false);
        }
    }, [time, initialTime, isTimerRunning, onFinishTimer]);

    const onClickReset = useCallback(() => {
        setTime(0);
        setInitialTime(0);
        setIsTimerRunning(false);
    }, []);

    const onClickStopAlarm = useCallback(() => {
        setIsAlarmPlaying(false);
    }, []);

    const timerPlayerProps = {
        onClickPlay: onClickPlay,
        onClickPause: onClickPause,
        onClickStop: onClickStop,
        onClickReset: onClickReset
    }

    useEffect(() => {
        if (isTimerRunning) {
            const timer = setInterval(() => {
                setTime((prevTime) => {
                    return prevTime - INTERVAL / INTERVAL
                });
            }, INTERVAL);

            if (time <= 0 && isTimerRunning) {
                onFinishTimer(initialTime);
                setInitialTime(0);
                setIsTimerRunning(false);
                return () => {
                    setIsAlarmPlaying(true);
                    clearInterval(timer);
                }
            }

            // pause
            if (!isTimerRunning) {
                return () => {
                    clearInterval(timer);
                }
            }

            return () => {
                clearInterval(timer);
            }
        }
    }, [time, initialTime, isTimerRunning, onFinishTimer]);

    if (isValid(time)) {
        return (
            <TimerStateContext.Provider value={time} >
                <div className="Timer">
                    <div className="left_section">
                        <TimeDisplay />
                        <Spacer height={12} />
                        <TimerPlayer {...timerPlayerProps} />
                        <Spacer height={12} />
                        <TimerAlarmController
                            isAlarmPlaying={isAlarmPlaying}
                            onClickStopAlarm={onClickStopAlarm}
                        />
                    </div>
                    <div className="right_section">
                        <TimerModifier onClickSetTime={onClickSetTime} />
                    </div>
                </div>
            </TimerStateContext.Provider>
        )
    } else {
        return <div></div>
    }
}

export default memo(Timer);