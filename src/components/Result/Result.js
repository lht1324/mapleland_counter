import { useAsync } from "react-async";
import { addCommaToNumber, addKoreanFormatToNumber, isValid, secondToTimeString } from "../../util";
import TableItem from "../public/TableItem";
import "./Result.css";
import { getExpList } from "./ResultFetch";
import { useContext } from "react";
import { AppStateContext } from "../../App";

const Result = ({ time }) => {
    const {
        level,
        oldExp,
        newExp,
        oldMeso,
        newMeso,
        hpPotionPrice,
        mpPotionPrice,
        oldHpPotionCount,
        oldMpPotionCount,
        newHpPotionCount,
        newMpPotionCount
    } = useContext(AppStateContext);

    /**
     * DB 업데이트 후 추가 예정
     * 현재는 주석 처리
     */
    // const mobInfo = {
    //     name: "드레이크",
    //     exp: 135,
    //     meso: 100
    // }

    const expPerLevelList = useAsync({
        promiseFn: getExpList
    }).data;

    if (expPerLevelList) {
        const currentExpPerLevel = level ? expPerLevelList.at(level - 1).exp : undefined;
        const isExpValid = newExp < currentExpPerLevel && oldExp < currentExpPerLevel && oldExp < newExp;

        // 기본 정보
        const expGain = newExp - oldExp;
        const mesoGain = newMeso - oldMeso;

        // 추가 정보
        const expGainRatio = isExpValid && level !== 200
            ? ((newExp - oldExp) / currentExpPerLevel * 100.0).toFixed(2)
            : undefined;
        const expectedTotalExp = level !== 200 ? currentExpPerLevel : undefined;
        const expToLevelUp = isExpValid
            ? expectedTotalExp - newExp
            : undefined;
        const remainingTimeToLevelUp = !isNaN(expGainRatio) && isValid(expGainRatio)
            ? Math.round((time / expGainRatio) * (100 - (newExp / expectedTotalExp * 100.0)))
            : undefined;
        const potionUsageCountHp = oldHpPotionCount - newHpPotionCount;
        const potionUsageCountMp = oldMpPotionCount - newMpPotionCount;
        const usagePrice = hpPotionPrice * potionUsageCountHp + mpPotionPrice * potionUsageCountMp
        const incomeStatement = (mesoGain ? mesoGain : 0) - (usagePrice ? usagePrice : 0);

        // 기본 정보
        const expGainString = expGain && expGain >= 0
            ? addCommaToNumber(expGain)
            : "-";
        const mesoGainString = mesoGain && mesoGain >= 0
            ? `${addKoreanFormatToNumber(mesoGain)} 메소`
            : "-";

        // 추가 정보
        const expGainRatioString = (!isNaN(expGainRatio) && isValid(expGainRatio)) || level === 200
            ? `${addCommaToNumber(expGainRatio)}%`
            : "-";
        const expectedTotalExpString = expectedTotalExp || level === 200
            ? addCommaToNumber(expectedTotalExp)
            : "-";
        const expToLevelUpString = expToLevelUp || level === 200
            ? addCommaToNumber(expToLevelUp)
            : "-";
        const remainingTimeToLevelUpString = typeof (remainingTimeToLevelUp) !== "undefined"
            ? (remainingTimeToLevelUp >= 1
                ? `약 ${secondToTimeString(remainingTimeToLevelUp)}`
                : "1초 미만")
            : "-";
        const potionUsageCountHpString = (potionUsageCountHp || potionUsageCountHp === 0) && potionUsageCountHp >= 0
            ? `${addCommaToNumber(potionUsageCountHp)}개`
            : "-";
        const potionUsageCountMpString = (potionUsageCountMp || potionUsageCountMp === 0) && potionUsageCountMp >= 0
            ? `${addCommaToNumber(potionUsageCountMp)}개`
            : "-";
        const potionUsagePriceHpString = (hpPotionPrice || hpPotionPrice === 0) && (potionUsageCountHp || potionUsageCountHp === 0) && potionUsageCountHp >= 0
            ? `${addKoreanFormatToNumber(hpPotionPrice * potionUsageCountHp)} 메소`
            : "-";
        const potionUsagePriceMpString = (mpPotionPrice || mpPotionPrice === 0) && (potionUsageCountMp || potionUsageCountMp === 0) && potionUsageCountMp >= 0
            ? `${addKoreanFormatToNumber(mpPotionPrice * potionUsageCountMp)} 메소`
            : "-";
        const incomeStatementString = (incomeStatement || incomeStatement === 0) && mesoGainString !== "-"
            ? `${incomeStatement > 0 ? "+ " : ""}${addKoreanFormatToNumber(incomeStatement)} 메소`
            : "-";
        // const mobCountToLevelUpString = mobCountToLevelUp ? `약 ${addCommaToNumber(mobCountToLevelUp)}마리` : "-";

        const timeString = secondToTimeString(time);

        const getAdditionalExpInfoTableRows = (level) => {
            const tableRowList = [];

            if (parseInt(String(level)) !== 200) {
                tableRowList.push(
                    <tr className="exp" >
                        <TableItem type={"header"} text={"경험치 획득 비율"} />
                        <TableItem type={"body"} text={expGainRatioString} />
                    </tr >
                )
                tableRowList.push(
                    <tr className="exp">
                        <TableItem type={"header"} text={"전체 경험치"} />
                        <TableItem type={"body"} text={expectedTotalExpString} />
                    </tr>
                )
                tableRowList.push(
                    <tr className="exp">
                        <TableItem type={"header"} text={"레벨업에 필요한 경험치"} />
                        <TableItem type={"body"} text={expToLevelUpString} />
                    </tr>
                )
                tableRowList.push(
                    <tr className="exp">
                        <TableItem type={"header"} text={"레벨업까지 남은 시간"} />
                        <TableItem type={"body"} text={remainingTimeToLevelUpString} />
                    </tr>
                )
                return tableRowList;
            } else {
                tableRowList.push(
                    <tr className="exp">
                        <TableItem type={"header"} text={"경험치 획득 비율"} />
                        <TableItem rowspan={4} type={"body"} text={"만렙 달성 축하드립니다 :)"} />
                    </tr>
                )
                tableRowList.push(
                    < tr className="exp" >
                        <TableItem type={"header"} text={"전체 경험치"} />
                    </tr >
                )
                tableRowList.push(
                    < tr className="exp" >
                        <TableItem type={"header"} text={"레벨업에 필요한 경험치"} />
                    </tr >
                )
                tableRowList.push(
                    <tr className="exp">
                        <TableItem type={"header"} text={"레벨업까지 남은 시간"} />
                    </tr>
                )
                return tableRowList;
            }
        };

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
                        {getAdditionalExpInfoTableRows(level)}
                        <tr className="default">
                            <TableItem rowspan={'2'} type={"header"} text={"포션 소모량"}
                                style={{
                                    backgroundColor: "#FF00FF",
                                    color: "#000000"
                                }} />
                            <TableItem
                                type={"body"}
                                text={`체력 포션 ${potionUsageCountHpString} (${potionUsagePriceHpString})`}
                                style={{
                                    backgroundColor: "#FF0000",
                                    color: "#FFFFFF"
                                }}
                            />
                        </tr>
                        <tr className="default">
                            <TableItem
                                type={"body"}
                                text={`마나 포션 ${potionUsageCountMpString} (${potionUsagePriceMpString})`}
                                style={{
                                    backgroundColor: "#0000FF",
                                    color: "#FFFFFF"
                                }}
                            />
                        </tr>
                        <tr className="default">
                            <TableItem type={"header"} text={"손익 계산"} />
                            <TableItem
                                type={"body"}
                                text={incomeStatementString}
                                style={{ color: ((incomeStatementString !== "-" && incomeStatement !== 0) ? (incomeStatement > 0 ? "#0000FF" : "#FF0000") : "#000000") }}
                            />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >)
    } else {
        return <div className="Result" />
    }
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