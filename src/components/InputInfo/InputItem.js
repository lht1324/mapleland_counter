import { memo } from "react";
import "./InputItem.css";

const InputItem = ({
    placeholder,
    value,
    onChange,
    suffix,
    style,
    maxLength
}) => {
    if (maxLength === 0) {
        return (<div className="InputItem">
            <input type="text" placeholder={placeholder} value={value} onChange={onChange} style={style} />
            <p>{suffix}</p>
        </div>)
    } else {
        return (<div className="InputItem">
            <input type="text" placeholder={placeholder} value={value} onChange={onChange} style={style} maxLength={maxLength} />
            <p>{suffix}</p>
        </div>)
    }
}

InputItem.defaultProps = {
    placeholder: "",
    value: "",
    onChange: () => {},
    suffix: "",
    style: { },
    maxLength: 0
}

export default memo(InputItem);