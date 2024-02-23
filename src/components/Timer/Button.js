import { memo } from "react";
import "./Button.css";

const Button = ({ text, type, onClick }) => {
    return (<div className="Button">
        <button onClick={onClick}>{text}</button>
    </div>)
}

Button.defaultProps = {
    text: "",
    onClick: () => {}
}

export default memo(Button);