import { memo } from "react";

const Spacer = ({ width, height }) => {
    return <div className="Spacer" style={{width: `${width}px`, height: `${height}px`}}></div>
}

Spacer.defaultProps = {
    width: 0,
    height: 0
}

export default memo(Spacer);