import { useContext, useEffect } from "react";
import { addCommaToNumber, addFormatToMeso, isValid, secondToTimeString } from "../../util";
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

    const mobInfo = {
        name: "네펜데스",
        exp: 135,
        meso: 100
    }

    const expGain = newExp - oldExp;
    const expGainRatio = (newExpRatio - oldExpRatio).toFixed(2);
    const expectedTotalExp = Math.floor(newExp / newExpRatio * 100.0);
    const mesoGain = newMeso - oldMeso;

    // 기본 정보
    const expGainString = expGain ? addCommaToNumber(expGain) : "-"
    const mesoGainString = mesoGain ? addCommaToNumber(mesoGain) : "-"

    // 추가 정보
    const expGainRatioString = (!isNaN(expGainRatio) && isValid(expGainRatio)) ? `${addCommaToNumber(expGainRatio)}%` : "-"
    const expectedTotalExpString = expectedTotalExp ? `약 ${addCommaToNumber(expectedTotalExp)}` : "-"
    const expToLevelUpString = expectedTotalExp ? `약 ${addCommaToNumber(expectedTotalExp - newExp)}` : "-"
    const mobCountToLevelUpString = expectedTotalExp ? `약 ${addCommaToNumber(Math.round((expectedTotalExp - newExp) / mobInfo.exp))}마리` : "-"

    const timeString = secondToTimeString(time);

    return (<div className="Result">
        <h2>{`${timeString} 동안의 사냥 결과`}</h2>
        <h5>⚠️ 정확한 값을 입력하지 않으면 정확한 결과를 얻을 수 없어요</h5>
        <h3>기본 정보</h3>
        <table>
            <thead>
                <th>경험치 획득량</th>
                <th>메소 획득량</th>
            </thead>
            <tbody>
                <td>{expGain ? addCommaToNumber(expGain) : "-"}</td>
                <td>{mesoGain ? addFormatToMeso(mesoGain) : "-"}</td>
            </tbody>
        </table>
        <h3>추가 정보</h3>
        <table>
            <thead>
                <th>경험치 획득 비율</th>
                <th>추정 전체 경험치</th>
                <th>레벨업 필요 경험치</th>
                <th>{`레벨업까지 남은 ${mobInfo.name}`}</th>
            </thead>
            <tbody>
                <td>{expGainRatioString}</td>
                <td>{expectedTotalExpString}</td>
                <td>{expToLevelUpString}</td>
                <td>{mobCountToLevelUpString}</td>
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