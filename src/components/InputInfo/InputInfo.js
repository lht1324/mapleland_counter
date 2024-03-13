import { memo, useCallback, useContext } from "react";
import "./InputInfo.css";
import { addCommaToNumber, removeCommaFromNumber } from "../../util";
import Spacer from "../public/Spacer";
import InputSection from "./InputSection";
import InputItem from "./InputItem";
import { AppDispatchContext, AppStateContext } from "../../App";
import { isMobile } from "react-device-detect";

const InputInfo = () => {
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
    const onUpdate = useContext(AppDispatchContext);

    const onChangeLevel = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const level = e.target.value.length !== 0 ? e.target.value : undefined;

            if (((level >= 1 && level <= 200)) || typeof (level) === "undefined") {
                onUpdate("level", level);
            } else {
                if ((level < 1 || level > 200)) {
                    alert("1부터 200까지의 값만 입력할 수 있어요 :(")
                }
            }
        }
    }, [onUpdate]);
    const onChangeOldExp = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldExp = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            if ((oldExp <= 2147483647) || typeof (oldExp) === "undefined") {
                onUpdate("oldExp", oldExp);
            } else {
                if (oldExp > 2147483647) {
                    alert("2,147,483,647 이상의 값은 지원하지 않아요 :)")
                }
            }
        }
    }, [onUpdate]);
    const onChangeNewExp = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newExp = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            if ((newExp <= 2147483647) || typeof (newExp) === "undefined") {
                onUpdate("newExp", newExp);
            } else {
                if (newExp > 2147483647) {
                    alert("2,147,483,647 이상의 값은 지원하지 않아요 :)")
                }
            }
        }
    }, [onUpdate]);
    const onChangeOldMeso = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldMeso = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            if ((oldMeso <= 2147483647) || typeof (oldMeso) === "undefined") {
                onUpdate("oldMeso", oldMeso)
            } else {
                if (oldMeso > 2147483647) {
                    alert("2,147,483,647 메소 이상은 지원하지 않아요 :)")
                }
            }
        }
    }, [onUpdate]);
    const onChangeNewMeso = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newMeso = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            if ((newMeso <= 2147483647) || typeof (newMeso) === "undefined") {
                onUpdate("newMeso", newMeso)
            } else {
                if (newMeso > 2147483647) {
                    alert("2,147,483,647 메소 이상은 지원하지 않아요 :)")
                }
            }
        }
    }, [onUpdate]);
    const onChangeHpPotionPrice = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const hpPotionPrice = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            if ((hpPotionPrice <= 2147483647) || typeof (hpPotionPrice) === "undefined") {
                onUpdate("hpPotionPrice", hpPotionPrice)
            } else {
                if (hpPotionPrice > 2147483647) {
                    alert("2,147,483,647 메소 이상은 지원하지 않아요 :)")
                }
            }
        }
    }, [onUpdate]);
    const onChangeMpPotionPrice = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const mpPotionPrice = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            if ((mpPotionPrice <= 2147483647) || typeof (mpPotionPrice) === "undefined") {
                onUpdate("mpPotionPrice", mpPotionPrice)
            } else {
                if (mpPotionPrice > 2147483647) {
                    alert("2,147,483,647 메소 이상은 지원하지 않아요 :)")
                }
            }
        }
    }, [onUpdate]);
    const onChangeOldHpPotionCount = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldHpPotionCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onUpdate("oldHpPotionCount", oldHpPotionCount)
        }
    }, [onUpdate]);
    const onChangeOldMpPotionCount = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const oldMpPotionCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onUpdate("oldMpPotionCount", oldMpPotionCount)
        }
    }, [onUpdate]);
    const onChangeNewHpPotionCount = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newHpPotionCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onUpdate("newHpPotionCount", newHpPotionCount)
        }
    }, [onUpdate]);
    const onChangeNewMpPotionCount = useCallback((e) => {
        if (!e.target.value.includes('.') && !e.target.value.includes('-')) {
            const newMpPotionCount = e.target.value.length !== 0
                ? removeCommaFromNumber(e.target.value)
                : undefined;

            onUpdate("newMpPotionCount", newMpPotionCount)
        }
    }, [onUpdate]);

    return (<div className="InputInfo">
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
            <InputSection title={"사냥 전"}>
                <InputItem
                    type={"exp"}
                    placeholder={"경험치"}
                    value={oldExp ? addCommaToNumber(oldExp) : oldExp}
                    onChange={onChangeOldExp}
                    suffix={"EXP"}
                />
                <InputItem
                    type={"meso"}
                    placeholder={"메소"}
                    value={oldMeso ? addCommaToNumber(oldMeso) : oldMeso}
                    onChange={onChangeOldMeso}
                    suffix={"메소"}
                    maxLength={13}
                />
                <legend>사냥 후</legend>
                <InputItem
                    type={"exp"}
                    placeholder={"경험치"}
                    value={newExp ? addCommaToNumber(newExp) : newExp}
                    onChange={onChangeNewExp}
                    suffix={"EXP"}
                />
                <InputItem
                    type={"meso"}
                    placeholder={"메소"}
                    value={newMeso ? addCommaToNumber(newMeso) : newMeso}
                    onChange={onChangeNewMeso}
                    suffix={"메소"}
                    maxLength={13}
                />
            </InputSection>
            {isMobile ? <Spacer height={12} /> : <Spacer width={12} />}
            <InputSection title={"사냥 전"}>
                <InputItem
                    type={"hp"}
                    placeholder={"개수"}
                    value={oldHpPotionCount ? addCommaToNumber(oldHpPotionCount) : oldHpPotionCount}
                    onChange={onChangeOldHpPotionCount}
                    suffix={"개"}
                />
                <InputItem
                    type={"mp"}
                    placeholder={"개수"}
                    value={oldMpPotionCount ? addCommaToNumber(oldMpPotionCount) : oldMpPotionCount}
                    onChange={onChangeOldMpPotionCount}
                    suffix={"개"}
                />
                <legend>사냥 후</legend>
                <InputItem
                    type={"hp"}
                    placeholder={"개수"}
                    value={newHpPotionCount ? addCommaToNumber(newHpPotionCount) : newHpPotionCount}
                    onChange={onChangeNewHpPotionCount}
                    suffix={"개"}
                />
                <InputItem
                    type={"mp"}
                    placeholder={"개수"}
                    value={newMpPotionCount ? addCommaToNumber(newMpPotionCount) : newMpPotionCount}
                    onChange={onChangeNewMpPotionCount}
                    suffix={"개"}
                />
            </InputSection>
        </div>
        <Spacer height={12} />
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
            <InputSection title={"레벨"}>
                <InputItem
                    type={"exp"}
                    placeholder={"레벨"}
                    value={level}
                    onChange={onChangeLevel}
                    suffix={"Lv."}
                />
            </InputSection>
            {isMobile ? <Spacer height={12} /> : <Spacer width={12} />}
            <InputSection title={"포션 가격"}>
                <InputItem
                    type={"hp"}
                    placeholder={"개당 가격"}
                    value={hpPotionPrice ? addCommaToNumber(hpPotionPrice) : hpPotionPrice}
                    onChange={onChangeHpPotionPrice}
                    suffix={"메소"}
                />
                <InputItem
                    type={"mp"}
                    placeholder={"개당 가격"}
                    value={mpPotionPrice ? addCommaToNumber(mpPotionPrice) : mpPotionPrice}
                    onChange={onChangeMpPotionPrice}
                    suffix={"메소"}
                />
            </InputSection>
        </div>
    </div>)
}

export default memo(InputInfo);