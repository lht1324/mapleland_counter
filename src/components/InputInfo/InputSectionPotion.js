import "./InputSectionPotion.css";
import { memo } from "react";

const InputSectionPotion = ({
    title,
    hpPrice,
    hpCount,
    mpPrice,
    mpCount,
    onChangeHpPrice,
    onChangeHpCount,
    onChangeMpPrice,
    onChangeMpCount
}) => {
    return <div className="InputSectionPotion">
        <section>
            <legend>{title}</legend>
            <div className="input_section">
                <input className="input_hp" type="text" placeholder="개당 가격" value={hpPrice} onChange={onChangeHpPrice} />
                <p>메소</p>
            </div>
            <div className="input_section">
                <input className="input_hp" type="text" placeholder="개수" value={hpCount} onChange={onChangeHpCount} />
                <p>개</p>
            </div>
            <div className="input_section">
                <input className="input_mp" type="text" placeholder="개당 가격" value={mpPrice} onChange={onChangeMpPrice} />
                <p>메소</p>
            </div>
            <div className="input_section">
                <input className="input_mp" type="text" placeholder="개수" value={mpCount} onChange={onChangeMpCount} />
                <p>개</p>
            </div>
        </section>
    </div>
}

export default memo(InputSectionPotion);