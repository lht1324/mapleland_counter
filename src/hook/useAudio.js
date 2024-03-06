import { useState, useEffect } from "react";

const useAudio = url => {
    const [audio] = useState(new Audio(url));

    const onClickPlay = () => {
        audio.play();
    };

    const onClickStop = () => audio.pause();

    const onChangeLoop = (isLoop) => {
        audio.loop = isLoop;
    }

    useEffect(() => {
        const onFinishAudio = () => {
            audio.pause()
        }

        audio.addEventListener('ended', onFinishAudio);
        
        return () => {
            audio.removeEventListener('ended', onFinishAudio);
        };
    }, [audio]);

    return [onClickPlay, onClickStop, onChangeLoop];
};

export default useAudio;