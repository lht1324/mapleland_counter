import "./InputSection.css";
import { memo } from "react";

const InputSection = ({ title, children }) => {
    return <div className="InputSection">
        <section>
            <legend>{title}</legend>
            {children}
        </section>
    </div>
}

export default memo(InputSection);