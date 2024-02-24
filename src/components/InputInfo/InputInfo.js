import { useEffect } from "react";
import "./InputInfo.css";

const InputInfo = ({ userInfo, onChangeUserInfo }) => {
    const addCommas = (value) => {
        return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    // 2,147,483,647
    const removeComma = (number) => {
        const numberString = String(number);

        if (numberString.includes('.')) {
            return parseFloat(String(number).replace(/,/g, '')).toFixed(2);
        } else {
            return parseInt(String(number).replace(/,/g, ''));
        }
    }

    const onChangeOldExp = (e) => {
        const oldExp = removeComma(e.target.value);

        if (!isNaN(oldExp) && oldExp < userInfo.newExp) {
            onChangeUserInfo({
                ...userInfo,
                oldExp: oldExp
            })
        } else {
            alert("사냥 후 경험치보다 큰 값은 입력할 수 없어요 :(")
        }
    }
    const onChangeNewExp = (e) => {
        const newExp = removeComma(e.target.value);

        if (!isNaN(newExp) && newExp > userInfo.oldExp) {
            onChangeUserInfo({
                ...userInfo,
                newExp: newExp
            })
        } else {
            alert("사냥 전 경험치보다 작은 값은 입력할 수 없어요 :(")
        }
    }
    const onChangeOldExpRatio = (e) => {
        const oldExpRatio = removeComma(e.target.value);

        if (!isNaN(oldExpRatio) && oldExpRatio <= 100.00 && oldExpRatio < userInfo.newExpRatio) {
            onChangeUserInfo({
                ...userInfo,
                oldExpRatio: oldExpRatio
            })
        } else {
            if (oldExpRatio > 100.00) {
                alert("100 이상의 값은 입력할 수 없어요 :(")
            } else {
                alert("사냥 후 경험치보다 큰 값은 입력할 수 없어요 :(")
            }
        }
    }
    const onChangeNewExpRatio = (e) => {
        const newExpRatio = removeComma(e.target.value);

        if (!isNaN(newExpRatio) && newExpRatio <= 100.00 && newExpRatio > userInfo.oldExpRatio) {
            onChangeUserInfo({
                ...userInfo,
                newExpRatio: newExpRatio
            })
        } else {
            if (newExpRatio > 100.00) {
                alert("100 이상의 값은 입력할 수 없어요 :(")
            } else {
                alert("사냥 전 경험치보다 작은 값은 입력할 수 없어요 :(")
            }
        }
    }
    const onChangeOldMeso = (e) => {
        const oldMeso = removeComma(e.target.value);

        if (!isNaN(oldMeso) && oldMeso <= 2147483647) {
            onChangeUserInfo({
                ...userInfo,
                oldMeso: oldMeso
            })
        } else {
            alert("2,147,483,647 메소 이상은 지원하지 않아요 :(")
        }
    }
    const onChangeNewMeso = (e) => {
        const newMeso = removeComma(e.target.value);

        if (!isNaN(newMeso) && newMeso <= 2147483647) {
            onChangeUserInfo({
                ...userInfo,
                newMeso: newMeso
            })
        } else {
            alert("2,147,483,647 메소 이상은 지원하지 않아요 :)")
        }
    }

    useEffect(() => {
        console.log(`newMeso = ${userInfo.newMeso}`);
    }, [userInfo.newMeso]);

    return (<div className="InputInfo">
        <section>
            <legend>사냥 전</legend>
            <div className="input_section">
                <input type="text" placeholder="경험치" value={addCommas(userInfo.oldExp)} onChange={onChangeOldExp}></input>
                <p>EXP</p>
            </div>
            <div className="input_section">
                <input type="text" placeholder="경험치 %" value={userInfo.oldExpRatio} maxLength={6} onChange={onChangeOldExpRatio}></input>
                <p>%</p>
            </div>
            <div className="input_section">
                <input type="text" placeholder="메소" value={addCommas(userInfo.oldMeso)} maxLength={13} onChange={onChangeOldMeso}></input>
                <p>메소</p>
            </div>
        </section>
        <section>
            <legend>사냥 후</legend>
            <div className="input_section">
                <input type="text" placeholder="경험치" value={addCommas(userInfo.newExp)} onChange={onChangeNewExp}></input>
                <p>EXP</p>
            </div>
            <div className="input_section">
                <input type="text" placeholder="경험치 %" value={userInfo.newExpRatio} maxLength={6} onChange={onChangeNewExpRatio}></input>
                <p>%</p>
            </div>
            <div className="input_section">
                <input type="text" placeholder="메소" value={addCommas(userInfo.newMeso)} maxLength={13} onChange={onChangeNewMeso}></input>
                <p>메소</p>
            </div>
        </section>
    </div>)
}

export default InputInfo;