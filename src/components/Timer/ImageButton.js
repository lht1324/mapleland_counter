import { memo } from "react";
import "./Button.css";

const ImageButton = ({ src, onClick }) => {
    return (<div className="ImageButton">
        <button onClick={onClick}>
            {src}
        </button>
    </div>)
}

ImageButton.defaultProps = {
    src: "",
    onClick: () => {}
}

export default memo(ImageButton);