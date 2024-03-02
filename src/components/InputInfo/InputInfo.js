import { useEffect, useState } from "react";
import "./InputInfo.css";
import { addCommaToNumber, removeCommaFromNumber } from "../../util";

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
    useEffect(() => {
        console.log(`oldMeso = ${userInfo.oldMeso}`)
    }, [userInfo.oldMeso])
    useEffect(() => {
        console.log(`newMeso = ${userInfo.newMeso}`)
    }, [userInfo.newMeso])

    return (<div className="InputInfo">
        <section>
            <legend>사냥 전</legend>
            <div className="input_section">
                <input type="text" placeholder="경험치" value={userInfo.oldExp ? addCommaToNumber(userInfo.oldExp) : userInfo.oldExp} onChange={onChangeOldExp}></input>
                <p>EXP</p>
            </div>
            <div className="input_section">
                <input
                    type="text"
                    placeholder="경험치 %"
                    value={userInfo.oldExpRatio ? (isOldExpRatioEndsWithDot ? `${userInfo.oldExpRatio}.` : `${userInfo.oldExpRatio}`) : ""}
                    maxLength={5}
                    onChange={onChangeOldExpRatio}>
                </input>
                <p>%</p>
            </div>
            <div className="input_section">
                <input type="text" placeholder="메소" value={userInfo.oldMeso ? addCommaToNumber(userInfo.oldMeso) : userInfo.oldMeso} maxLength={13} onChange={onChangeOldMeso}></input>
                <p>메소</p>
            </div>
        </section>
        <section>
            <legend>사냥 후</legend>
            <div className="input_section">
                <input type="text" placeholder="경험치" value={userInfo.newExp ? addCommaToNumber(userInfo.newExp) : userInfo.newExp} onChange={onChangeNewExp}></input>
                <p>EXP</p>
            </div>
            <div className="input_section">
                <input
                    type="text"
                    placeholder="경험치 %"
                    value={userInfo.newExpRatio ? (isNewExpRatioEndsWithDot ? `${userInfo.newExpRatio}.` : `${userInfo.newExpRatio}`) : ""}
                    maxLength={5}
                    onChange={onChangeNewExpRatio}>
                </input>
                <p>%</p>
            </div>
            <div className="input_section">
                <input type="text" placeholder="메소" value={userInfo.newMeso ? addCommaToNumber(userInfo.newMeso) : userInfo.newMeso} maxLength={13} onChange={onChangeNewMeso}></input>
                <p>메소</p>
            </div>
        </section>
    </div>)
}

export default InputInfo;