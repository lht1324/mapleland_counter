import { memo, useEffect, useState } from "react";
import "./InputItem.css";

const InputItem = ({
    type,
    placeholder,
    value,
    onChange,
    suffix,
    maxLength
}) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        if (type === "exp") {
            setStyle({ border: "2px solid #AFEE00" });
        } else if (type === "meso") {
            setStyle({ border: "2px solid #FFDD11" });
        } else if (type === "hp") {
            setStyle({ border: "2px solid #FF0000" });
        } else if (type === "mp") {
            setStyle({ border: "2px solid #0000FF" });
        } else {
            setStyle({ border: "2px solid #000000" });
        }
    }, [type]);
    
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
    type: "",
    placeholder: "",
    value: "",
    onChange: () => {},
    suffix: "",
    maxLength: 0
}

export default memo(InputItem);