import "./InputInfo.css";

const InputInfo = ({ userInfo, onChangeUserInfo }) => {
    const onChangeOldExp = (e) => {
        onChangeUserInfo({
            ...userInfo,
            oldExp: e.target.value
        })
    }
    const onChangeNewExp = (e) => {
        onChangeUserInfo({
            ...userInfo,
            newExp: e.target.value
        })
    }
    const onChangeOldExpRatio = (e) => {
        onChangeUserInfo({
            ...userInfo,
            oldExpRatio: e.target.value
        })
    }
    const onChangeNewExpRatio = (e) => {
        onChangeUserInfo({
            ...userInfo,
            newExpRatio: e.target.value
        })
    }
    const onChangeOldMeso = (e) => {
        onChangeUserInfo({
            ...userInfo,
            oldMeso: e.target.value
        })
    }
    const onChangeNewMeso = (e) => {
        onChangeUserInfo({
            ...userInfo,
            newMeso: e.target.value
        })
    }
    return (<div className="InputInfo">
        <section>
            <legend>사냥 전</legend>
            <input type="number" placeholder="경험치" value={userInfo.oldExp} onChange={onChangeOldExp}></input>
            <input type="number" placeholder="경험치 %" value={userInfo.oldExpRatio} onChange={onChangeOldExpRatio}></input>
            <input type="number" placeholder="메소" value={userInfo.oldMeso} onChange={onChangeOldMeso}></input>
        </section>
        <section>
            <legend>사냥 후</legend>
            <input type="number" placeholder="경험치" value={userInfo.newExp} onChange={onChangeNewExp}></input>
            <input type="number" placeholder="경험치 %" value={userInfo.newExpRatio} onChange={onChangeNewExpRatio}></input>
            <input type="number" placeholder="메소" value={userInfo.newMeso} onChange={onChangeNewMeso}></input>
        </section>
    </div>)
}

export default InputInfo;