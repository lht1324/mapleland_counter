import { useContext, useEffect } from "react";
import { addCommaToNumber, isValid, secondToTimeString } from "../../util";
import "./Result.css";
import { CounterStateContext } from "../../App";

const Result = ({ time, userInfo }) => {
    const {
        oldExp,
        newExp,
        oldExpRatio,
        newExpRatio,
        oldMeso,
        newMeso
    } = userInfo;

    const expGain = newExp - oldExp;
    const expGainRatio = (newExpRatio - oldExpRatio).toFixed(2);
    const expectedTotalExp = Math.floor(newExp / newExpRatio * 100.0);
    const mesoGain = newMeso - oldMeso;

    const timeString = secondToTimeString(time);

    return (<div className="Result">
        <h2>{`${timeString} 동안의 사냥 결과`}</h2>
        <h4>⚠️ 정확한 값을 입력하지 않으면 정확한 결과를 얻을 수 없어요</h4>
        <table>
            <thead>
                <th>경험치 획득량</th>
                <th>경험치 획득 비율</th>
                <th>추정 전체 경험치</th>
                <th>메소 획득량</th>
            </thead>
            <tbody>
                <td>{expGain ? addCommaToNumber(expGain) : "-"}</td>
                <td>{(!isNaN(expGainRatio) && isValid(expGainRatio)) ? `${addCommaToNumber(expGainRatio)}%` : "-"}</td>
                <td>{expectedTotalExp ? `약 ${addCommaToNumber(expectedTotalExp)}` : "-"}</td>
                <td>{mesoGain ? addCommaToNumber(mesoGain) : "-"}</td>
            </tbody>
        </table>
    </div>)
}

Result.defaultProps = {
    time: 0,
    userInfo: {
        oldExp: 0,
        newExp: 0,
        oldExpRatio: 0,
        newExpRatio: 0,
        oldMeso: 0,
        newMeso: 0,
    }
}

export default Result;