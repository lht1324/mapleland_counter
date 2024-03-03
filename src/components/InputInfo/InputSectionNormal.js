import "./InputSectionNormal.css";
import { memo } from "react";

const InputSectionNormal = ({
    title,
    exp,
    expRatio,
    meso,
    onChangeExp,
    onChangeExpRatio,
    onChangeMeso
}) => {
    return <div className="InputSectionNormal">
        <section>
            <legend>{title}</legend>
            <div className="input_section">
                <input type="text" placeholder="경험치" value={exp} onChange={onChangeExp} />
                <p>EXP</p>
            </div>
            <div className="input_section">
                <input type="text" placeholder="경험치 %" value={expRatio} maxLength={5} onChange={onChangeExpRatio} />
                <p>%</p>
            </div>
            <div className="input_section">
                <input type="text" placeholder="메소" value={meso} maxLength={13} onChange={onChangeMeso} />
                <p>메소</p>
            </div>
        </section>
    </div>
}

export default memo(InputSectionNormal);