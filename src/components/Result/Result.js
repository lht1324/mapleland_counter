import { addCommaToNumber, addFormatToMeso, isValid, secondToTimeString } from "../../util";
import TableItem from "../public/TableItem";
import "./Result.css";

const Result = ({ time, userInfo }) => {
    const {
        oldExp,
        newExp,
        oldExpRatio,
        newExpRatio,
        oldMeso,
        newMeso
    } = userInfo;

    /**
     * DB 업데이트 후 추가 예정
     * 현재는 주석 처리
     */
    // const mobInfo = {
    //     name: "드레이크",
    //     exp: 135,
    //     meso: 100
    // }

    const expGain = newExp - oldExp;
    const mesoGain = newMeso - oldMeso;

    const expGainRatio = (newExpRatio - oldExpRatio).toFixed(2);
    const expectedTotalExp = Math.floor(newExp / newExpRatio * 100.0);
    const expToLevelUp = expectedTotalExp - newExp;
    const remainingTimeToLevelUp = !isNaN(expGainRatio) && isValid(expGainRatio) && expGainRatio >= 0.0 ? (time / expGainRatio) * (100 - newExpRatio) : undefined;
    // const mobCountToLevelUp = Math.round((expectedTotalExp - newExp) / mobInfo.exp);

    // 기본 정보
    const expGainString = expGain && expGain >= 0 ? addCommaToNumber(expGain) : "-";
    const mesoGainString = mesoGain && mesoGain >= 0 ? addFormatToMeso(mesoGain) : "-";

    // 추가 정보
    const expGainRatioString = !isNaN(expGainRatio) && isValid(expGainRatio) && expGainRatio >= 0.0 ? `${addCommaToNumber(expGainRatio)}%` : "-";
    const expectedTotalExpString = expectedTotalExp ? `약 ${addCommaToNumber(expectedTotalExp)}` : "-";
    const expToLevelUpString = expToLevelUp ? `약 ${addCommaToNumber(expToLevelUp)}` : "-";
    const remainingTimeToLevelUpString =
        typeof (remainingTimeToLevelUp) !== "undefined" ? (remainingTimeToLevelUp >= 1 ? `약 ${secondToTimeString(remainingTimeToLevelUp)}` : "1초 미만") : "-";
    // const mobCountToLevelUpString = mobCountToLevelUp ? `약 ${addCommaToNumber(mobCountToLevelUp)}마리` : "-";

    const timeString = secondToTimeString(time);

    return (<div className="Result">
        <h1>{`${timeString} 동안의 사냥 결과`}</h1>
        <div className="warning_section">
            <p>⚠️ 정확한 값을 입력하지 않으면 정확한 결과를 얻을 수 없어요</p>
            <p>⚠️ 추정 값은 약간의 오차가 있을 수 있어요</p>
        </div>
        <div className="info_section">
            <h2>기본 정보</h2>
            <table>
                <tbody>
                    <tr className="exp">
                        <TableItem type={"header"} text={"경험치 획득량"} />
                        <TableItem type={"body"} text={expGainString} />
                    </tr>
                    <tr className="meso">
                        <TableItem type={"header"} text={"메소 획득량"} />
                        <TableItem type={"body"} text={mesoGainString} />
                    </tr>
                </tbody>
            </table>
            <h2>추가 정보</h2>
            <table>
                <tbody>
                    <tr className="exp">
                        <TableItem type={"header"} text={"경험치 획득 비율"} />
                        <TableItem type={"body"} text={expGainRatioString} />
                    </tr>
                    <tr className="exp">
                        <TableItem type={"header"} text={"전체 경험치"} />
                        <TableItem type={"body"} text={expectedTotalExpString} />
                    </tr>
                    <tr className="exp">
                        <TableItem type={"header"} text={"레벨업에 필요한 경험치"} />
                        <TableItem type={"body"} text={expToLevelUpString} />
                    </tr>
                    <tr className="exp">
                        <TableItem type={"header"} text={"레벨업까지 남은 시간"} />
                        <TableItem type={"body"} text={remainingTimeToLevelUpString} />
                    </tr>
                </tbody>
            </table>
        </div>
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