import { useState } from "react";
import "./InputInfo.css";
import { addCommaToNumber, removeCommaFromNumber } from "../../util";
import Spacer from "../public/Spacer";
import InputSectionNormal from "./InputSectionNormal";
import InputSectionPotion from "./InputSectionPotion";

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
    const onChangeOldHpPrice = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldHpPrice = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                oldHpPrice: oldHpPrice
            })
        }
    }
    const onChangeOldHpCount = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldHpCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                oldHpCount: oldHpCount
            })
        }
    }
    const onChangeOldMpPrice = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldMpPrice = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                oldMpPrice: oldMpPrice
            })
        }
    }
    const onChangeOldMpCount = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldMpCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                oldMpCount: oldMpCount
            })
        }
    }
    const onChangeNewHpPrice = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newHpPrice = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                newHpPrice: newHpPrice
            })
        }
    }
    const onChangeNewHpCount = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newHpCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                newHpCount: newHpCount
            })
        }
    }
    const onChangeNewMpPrice = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newMpPrice = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                newMpPrice: newMpPrice
            })
        }
    }
    const onChangeNewMpCount = (e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newMpCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onChangeUserInfo({
                ...userInfo,
                newMpCount: newMpCount
            })
        }
    }

    return (<div className="InputInfo">
        <div className="input_section_container">
            <InputSectionNormal
                title={"사냥 전 정보"}
                exp={userInfo.oldExp ? addCommaToNumber(userInfo.oldExp) : userInfo.oldExp}
                expRatio={userInfo.oldExpRatio ? (isOldExpRatioEndsWithDot ? `${userInfo.oldExpRatio}.` : `${userInfo.oldExpRatio}`) : ""}
                meso={userInfo.oldMeso ? addCommaToNumber(userInfo.oldMeso) : userInfo.oldMeso}
                onChangeExp={onChangeOldExp}
                onChangeExpRatio={onChangeOldExpRatio}
                onChangeMeso={onChangeOldMeso}
            />
            <Spacer width={12} />
            <InputSectionNormal
                title={"사냥 후 정보"}
                exp={userInfo.newExp ? addCommaToNumber(userInfo.newExp) : userInfo.newExp}
                expRatio={userInfo.newExpRatio ? (isNewExpRatioEndsWithDot ? `${userInfo.newExpRatio}.` : `${userInfo.newExpRatio}`) : ""}
                meso={userInfo.newMeso ? addCommaToNumber(userInfo.newMeso) : userInfo.newMeso}
                onChangeExp={onChangeNewExp}
                onChangeExpRatio={onChangeNewExpRatio}
                onChangeMeso={onChangeNewMeso}
            />
        </div>
        <Spacer height={12} />
        <div className="input_section_container">
            <InputSectionPotion
                title={"사냥 전 포션"}
                hpPrice={userInfo.oldHpPrice ? addCommaToNumber(userInfo.oldHpPrice) : userInfo.oldHpPrice}
                hpCount={userInfo.oldHpCount ? addCommaToNumber(userInfo.oldHpCount) : userInfo.oldHpCount}
                mpPrice={userInfo.oldMpPrice ? addCommaToNumber(userInfo.oldMpPrice) : userInfo.oldMpPrice}
                mpCount={userInfo.oldMpCount ? addCommaToNumber(userInfo.oldMpCount) : userInfo.oldMpCount}
                onChangeHpPrice={onChangeOldHpPrice}
                onChangeHpCount={onChangeOldHpCount}
                onChangeMpPrice={onChangeOldMpPrice}
                onChangeMpCount={onChangeOldMpCount}
            />
            <Spacer width={12} />
            <InputSectionPotion
                title={"사냥 후 포션"}
                hpPrice={userInfo.newHpPrice ? addCommaToNumber(userInfo.newHpPrice) : userInfo.newHpPrice}
                hpCount={userInfo.newHpCount ? addCommaToNumber(userInfo.newHpCount) : userInfo.newHpCount}
                mpPrice={userInfo.newMpPrice ? addCommaToNumber(userInfo.newMpPrice) : userInfo.newMpPrice}
                mpCount={userInfo.newMpCount ? addCommaToNumber(userInfo.newMpCount) : userInfo.newMpCount}
                onChangeHpPrice={onChangeNewHpPrice}
                onChangeHpCount={onChangeNewHpCount}
                onChangeMpPrice={onChangeNewMpPrice}
                onChangeMpCount={onChangeNewMpCount}
            />
        </div>
    </div>)
}

export default InputInfo;