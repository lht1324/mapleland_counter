import { useState, useEffect } from "react";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [loopCount, setLoopCount] = useState(0);
    // const [isPlaying, setIsPlaying] = useState(false);

    const onClickPlay = () => {
        audio.play();
        setLoopCount(3);
    };

    useEffect(() => {
        audio.loop = loopCount !== 0;
    }, [audio, loopCount]);

    const onClickStop = () => audio.pause();

    useEffect(() => {
        const onFinishAudio = () => {
            setLoopCount((prevCount) => prevCount - 1);
            audio.pause()
        }

        audio.addEventListener('ended', onFinishAudio);
        
        return () => {
            audio.removeEventListener('ended', onFinishAudio);
        };
    }, [audio]);

    return [onClickPlay, onClickStop];
};

export default useAudio;