import { memo } from "react";
import "./ImageButton.css";

const ImageButton = ({ src, alt, onClick }) => {
    return (<div className="ImageButton">
        <button onClick={onClick}>
            <img src={src} alt={alt}/>
        </button>
    </div>)
}

export default memo(ImageButton);