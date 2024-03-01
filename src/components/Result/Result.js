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
        name: "드레이크",
        exp: 135,
        meso: 100
    }

    const makeTableRow = (type, headerText, itemText) => {
        const itemStyle = {
            backgroundColor: type !== "default"
                ? type === "exp" ? "rgb(175, 238, 0)" : "rgb(255, 221, 17)"
                : "white",
            color: "black"
        }
        return <tr style={itemStyle}>
            <th className={type}>{headerText}</th>
            <td className={type}>{itemText}</td>
        </tr>
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
            {makeTableRow("exp", "경험치 획득량", expGainString)}
            {makeTableRow("meso", "메소 획득량", mesoGainString)}
        </table>
        <h2>추가 정보</h2>
        <table>
            {makeTableRow("exp", "경험치 획득 비율", expGainRatioString)}
            {makeTableRow("exp", "추정 전체 경험치", expectedTotalExpString)}
            {makeTableRow("exp", "레벨업 필요 경험치", expToLevelUpString)}
            {makeTableRow("default", `레벨업까지 남은 ${mobInfo.name}`, mobCountToLevelUpString)}
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