import { memo } from "react";
import "./ImageButton.css";

const ImageButton = ({ src, onClick }) => {
    return (<div className="ImageButton">
        <button onClick={onClick}>{src}</button>
    </div>)
}

export default memo(ImageButton);