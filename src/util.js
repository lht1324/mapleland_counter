// 정지 버튼 눌러도 결과 보여주는 걸로 하자
export const secondToTimeString = (inputSecond) => {
    if (inputSecond < 60) {
        return `${inputSecond}초`;
    } else if (inputSecond >= 60 && inputSecond < (60 * 60)) {
        const minute = Math.floor(inputSecond / 60);
        const second = Math.floor(inputSecond % 60);

        if (second === 0) {
            return `${minute}분`;
        } else {
            return `${minute}분 ${second}초`;
        }
    } else {
        const hour = Math.floor(inputSecond / (60 * 60));
        const minute = Math.floor(inputSecond / 60 % 60);
        const second = Math.floor(inputSecond % 60);

        if (minute !== 0 && second !== 0) {
            return `${hour}시간 ${minute}분 ${second}초`;
        } else if (minute !== 0 && second === 0) {
            return `${hour}시간 ${minute}분`;
        } else if (minute === 0 && second !== 0) {
            return `${hour}시간 ${second}초`;
        } else {
            return `${hour}시간`;
        }
    }
}

export const addFormatToMeso = (inputMeso) => {
    const absMeso = Math.abs(inputMeso);
    let result = "";

    if (Math.floor(absMeso / 10000) === 0) {
        result = `${addCommaToNumber(absMeso)} 메소`;
    } else if (Math.floor(absMeso / 100000000) === 0) {
        if (Math.floor(absMeso % 10000) !== 0) {
            const tenThousand = addCommaToNumber(Math.floor(absMeso / 10000));
            const underTenThousand = addCommaToNumber(absMeso % 10000);

            result = `${tenThousand}만 ${underTenThousand} 메소`;
        } else {
            result = `${addCommaToNumber(Math.floor(absMeso / 10000))}만 메소`;
        }
    } else { // 억 대
        if (Math.floor(absMeso % 100000000) === 0) {
            result = `${addCommaToNumber(Math.floor(absMeso / 100000000))}억 메소`;
        } else {
            if (Math.floor(absMeso % 100000000 / 10000) !== 0 && Math.floor(absMeso % 100000000 % 10000) === 0) {
                const oneHundredMillion = addCommaToNumber(Math.floor(absMeso / 100000000));
                const tenThousand = addCommaToNumber(Math.floor(absMeso % 100000000 / 10000));
        
                result = `${oneHundredMillion}억 ${tenThousand}만 메소`;
            } else if (Math.floor(absMeso % 100000000 / 10000) === 0 && Math.floor(absMeso % 100000000 % 10000) !== 0) {
                const oneHundredMillion = addCommaToNumber(Math.floor(absMeso / 100000000));
                const underTenThousand = addCommaToNumber(absMeso % 10000);
        
                result = `${oneHundredMillion}억 ${underTenThousand} 메소`;
            } else {
                const oneHundredMillion = addCommaToNumber(Math.floor(absMeso / 100000000));
                const tenThousand = addCommaToNumber(Math.floor(absMeso % 100000000 / 10000));
                const underTenThousand = addCommaToNumber(absMeso % 10000);
        
                result = `${oneHundredMillion}억 ${tenThousand}만 ${underTenThousand} 메소`;
            }
        }
    }

    if (inputMeso >= 0) {
        return result;
    } else {
        return `-${result}`
    }
}

export const addCommaToNumber = (input) => {
    return String(input).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const isValid = (object) => {
    return object !== null && !isNaN(object) && object !== undefined && typeof(object) !== "undefined";
}