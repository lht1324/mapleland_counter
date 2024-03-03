import { useState } from "react";
import "./InputInfo.css";
import { addCommaToNumber, removeCommaFromNumber } from "../../util";
import Spacer from "../public/Spacer";
import InputSection from "./InputSection";
import InputItem from "./InputItem";

const InputInfo = ({ userInfo, onChangeUserInfo }) => {
    const [isOldExpRatioEndsWithDot, setIsOldExpRatioEndsWithDot] = useState(false);
    const [isNewExpRatioEndsWithDot, setIsNewExpRatioEndsWithDot] = useState(false);

    const onChangeOldExp = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldExp = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                oldExp: oldExp
            })
        }
    }
    const onChangeNewExp = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newExp = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                newExp: newExp
            })
        }
    }
    const onChangeOldExpRatio = (e) => {
        const oldExpRatio = e.target.value.length !== 0
            ? parseFloat(e.target.value)
            : undefined;

        if ((oldExpRatio >= 0.00 && oldExpRatio <= 100.00) || typeof (oldExpRatio) === "undefined") {
            setIsOldExpRatioEndsWithDot(e.target.value.endsWith('.'));

            onChangeUserInfo({
                ...userInfo,
                oldExpRatio: oldExpRatio
            })
        } else {
            if (oldExpRatio < 0.00 || oldExpRatio > 100.00) {
                alert("1부터 100 사이의 값만 입력할 수 있어요 :(")
            } else {
                alert("숫자만 입력할 수 있어요 :(")
            }
        }
    }
    const onChangeNewExpRatio = (e) => {
        const newExpRatio = e.target.value.length !== 0
            ? parseFloat(e.target.value)
            : undefined;

        if ((newExpRatio >= 0.00 && newExpRatio <= 100.00) || typeof (newExpRatio) === "undefined") {
            setIsNewExpRatioEndsWithDot(e.target.value.endsWith('.'));

            onChangeUserInfo({
                ...userInfo,
                newExpRatio: newExpRatio
            })
        } else {
            if (newExpRatio < 0.00 || newExpRatio > 100.00) {
                alert("1부터 100 사이의 값만 입력할 수 있어요 :(")
            } else {
                alert("숫자만 입력할 수 있어요 :(")
            }
        }
    }
    const onChangeOldMeso = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldMeso = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            if ((oldMeso <= 2147483647) || typeof (oldMeso) === "undefined") {
                onChangeUserInfo({
                    ...userInfo,
                    oldMeso: oldMeso
                })
            } else {
                alert("2,147,483,647 메소 이상은 지원하지 않아요 :(")
            }
        }
    }
    const onChangeNewMeso = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newMeso = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            if ((newMeso <= 2147483647) || typeof (newMeso) === "undefined") {
                onChangeUserInfo({
                    ...userInfo,
                    newMeso: newMeso
                })
            } else {
                alert("2,147,483,647 메소 이상은 지원하지 않아요 :)")
            }
        }
    }
    const onChangeHpPotionPrice = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const hpPotionPrice = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                hpPotionPrice: hpPotionPrice
            })
        }
    }
    const onChangeMpPotionPrice = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const mpPotionPrice = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                mpPotionPrice: mpPotionPrice
            })
        }
    }
    const onChangeOldHpPotionCount = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldHpPotionCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                oldHpPotionCount: oldHpPotionCount
            })
        }
    }
    const onChangeOldMpPotionCount = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldMpPotionCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                oldMpPotionCount: oldMpPotionCount
            })
        }
    }
    const onChangeNewHpPotionCount = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newHpPotionCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                newHpPotionCount: newHpPotionCount
            })
        }
    }
    const onChangeNewMpPotionCount = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newMpPotionCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                newMpPotionCount: newMpPotionCount
            })
        }
    }
    // 가격 | 전후 포션 개수

    return (<div className="InputInfo">
        <div className="input_section_container">
            <InputSection title={"사냥 전 정보"}>
                <InputItem
                    placeholder={"경험치"}
                    value={userInfo.oldExp ? addCommaToNumber(userInfo.oldExp) : userInfo.oldExp}
                    onChange={onChangeOldExp}
                    suffix={"EXP"}
                />
                <InputItem
                    placeholder={"경험치 %"}
                    value={userInfo.oldExpRatio ? (isOldExpRatioEndsWithDot ? `${userInfo.oldExpRatio}.` : `${userInfo.oldExpRatio}`) : ""}
                    onChange={onChangeOldExpRatio}
                    suffix={"%"}
                    maxLength={5}
                />
                <InputItem
                    placeholder={"메소"}
                    value={userInfo.oldMeso ? addCommaToNumber(userInfo.oldMeso) : userInfo.oldMeso}
                    onChange={onChangeOldMeso}
                    suffix={"메소"}
                    maxLength={13}
                />
            </InputSection>
            <Spacer width={12} />
            <InputSection title={"사냥 후 정보"}>
                <InputItem
                    placeholder={"경험치"}
                    value={userInfo.newExp ? addCommaToNumber(userInfo.newExp) : userInfo.newExp}
                    onChange={onChangeNewExp}
                    suffix={"EXP"}
                />
                <InputItem
                    placeholder={"경험치 %"}
                    value={userInfo.newExpRatio ? (isNewExpRatioEndsWithDot ? `${userInfo.newExpRatio}.` : `${userInfo.newExpRatio}`) : ""}
                    onChange={onChangeNewExpRatio}
                    suffix={"%"}
                    maxLength={5}
                />
                <InputItem
                    placeholder={"메소"}
                    value={userInfo.newMeso ? addCommaToNumber(userInfo.newMeso) : userInfo.newMeso}
                    onChange={onChangeNewMeso}
                    suffix={"메소"}
                    maxLength={13}
                />
            </InputSection>
        </div>
        <Spacer height={12} />
        <div className="input_section_container">
            <InputSection title={"포션 가격"}>
                <InputItem
                    placeholder={"개당 가격"}
                    value={userInfo.hpPotionPrice ? addCommaToNumber(userInfo.hpPotionPrice) : userInfo.hpPotionPrice}
                    onChange={onChangeHpPotionPrice}
                    suffix={"메소"}
                    style={{ border: "2px solid #FF0000"}}
                />
                <InputItem
                    placeholder={"개당 가격"}
                    value={userInfo.mpPotionPrice ? addCommaToNumber(userInfo.mpPotionPrice) : userInfo.mpPotionPrice}
                    onChange={onChangeMpPotionPrice}
                    suffix={"메소"}
                    style={{ border: "2px solid #0000FF"}}
                />
            </InputSection>
            <Spacer width={12} />
            <InputSection title={"사냥 전"}>
                <InputItem
                    placeholder={"개수"}
                    value={userInfo.oldHpPotionCount ? addCommaToNumber(userInfo.oldHpPotionCount) : userInfo.oldHpPotionCount}
                    onChange={onChangeOldHpPotionCount}
                    suffix={"개"}
                    style={{ border: "2px solid #FF0000"}}
                />
                <InputItem
                    placeholder={"개수"}
                    value={userInfo.oldMpPotionCount ? addCommaToNumber(userInfo.oldMpPotionCount) : userInfo.oldMpPotionCount}
                    onChange={onChangeOldMpPotionCount}
                    suffix={"개"}
                    style={{ border: "2px solid #0000FF"}}
                />
                <legend>사냥 후</legend>
                <InputItem
                    placeholder={"개수"}
                    value={userInfo.newHpPotionCount ? addCommaToNumber(userInfo.newHpPotionCount) : userInfo.newHpPotionCount}
                    onChange={onChangeNewHpPotionCount}
                    suffix={"개"}
                    style={{ border: "2px solid #FF0000"}}
                />
                <InputItem
                    placeholder={"개수"}
                    value={userInfo.newMpPotionCount ? addCommaToNumber(userInfo.newMpPotionCount) : userInfo.newMpPotionCount}
                    onChange={onChangeNewMpPotionCount}
                    suffix={"개"}
                    style={{ border: "2px solid #0000FF"}}
                />
            </InputSection>
        </div>
    </div>)
}

export default InputInfo;