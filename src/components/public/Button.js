import { memo } from "react";
import "./Button.css";

const Button = ({ text, value, onClickButton }) => {
    const onClick = () => {
        if (typeof(value) !== "undefined") {
            onClickButton(value);
        } else {
            onClickButton();
        }
    }
    
    return (<div className="Button">
        <button onClick={onClick}>{text}</button>
    </div>)
}

Button.defaultProps = {
    text: "",
    value: undefined,
    onClick: () => {}
}

export default memo(Button);