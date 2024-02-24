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
    const mesoGain = newMeso - oldMeso;

    const expGainRatio = (newExpRatio - oldExpRatio).toFixed(2);
    const expectedTotalExp = Math.floor(newExp / newExpRatio * 100.0);
    const expToLevelUp = expectedTotalExp - newExp;
    const mobCountToLevelUp = Math.round((expectedTotalExp - newExp) / mobInfo.exp);

    // 기본 정보
    const expGainString = expGain && expGain >= 0 ? addCommaToNumber(expGain) : "-";
    const mesoGainString = mesoGain && mesoGain >= 0 ? addFormatToMeso(mesoGain) : "-";

    // 추가 정보
    const expGainRatioString = !isNaN(expGainRatio) && isValid(expGainRatio) && expGainRatio >= 0.0 ? `${addCommaToNumber(expGainRatio)}%` : "-";
    const expectedTotalExpString = expectedTotalExp ? `약 ${addCommaToNumber(expectedTotalExp)}` : "-";
    const expToLevelUpString = expToLevelUp ? `약 ${addCommaToNumber(expToLevelUp)}` : "-";
    const mobCountToLevelUpString = mobCountToLevelUp ? `약 ${addCommaToNumber(mobCountToLevelUp)}마리` : "-";

    const timeString = secondToTimeString(time);

    return (<div className="Result">
        <h1>{`${timeString} 동안의 사냥 결과`}</h1>
        <h4>⚠️ 정확한 값을 입력하지 않으면 정확한 결과를 얻을 수 없어요</h4>
        <h2>기본 정보</h2>
        <table>
            <thead>
                <th className="exp">경험치 획득량</th>
                <th className="meso">메소 획득량</th>
            </thead>
            <tbody>
                <td className="exp">{expGainString}</td>
                <td className="meso">{mesoGainString}</td>
            </tbody>
        </table>
        <h2>추가 정보</h2>
        <table>
            <thead>
                <th className="exp">경험치 획득 비율</th>
                <th className="exp">추정 전체 경험치</th>
                <th className="exp">레벨업 필요 경험치</th>
                <th>{`레벨업까지 남은 ${mobInfo.name}`}</th>
            </thead>
            <tbody>
                <td className="exp">{expGainRatioString}</td>
                <td className="exp">{expectedTotalExpString}</td>
                <td className="exp">{expToLevelUpString}</td>
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