import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        const updateSize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        }

        window.addEventListener("resize", updateSize)

        return () => {
            window.removeEventListener("resize", updateSize);
        }
    })

    return [screenWidth, screenHeight];
};

export default useScreenSize;