import { memo } from "react";

const Divider = ({ width, height, color }) => {
    return <div
        style={{
            width: width !== 0 ? `${width}px` : "100%",
            height: height !== 0 ? `${height}px` : "100%",
            backgroundColor: color
        }}
    />
}

Divider.defaultProps = {
    width: 0,
    height: 0,
    color: "transparent"
}

export default memo(Divider);