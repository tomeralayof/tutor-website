const setOption = (label,idx) => {
    return {
        id: `st-control-${idx + 1}`,
        for : `st-panel-${idx + 1}`,
        label 
    }
}

export const setNavBartOptions = () => {
    const optionSetter = [];

    const labelArr = ["צור קשר","מאמרים", "? מה אני מלמד", " אני ואני מאמין", "ברוכים הבאים"];

    labelArr.map((label,i) => optionSetter.push(setOption(label,i)));
    
    return optionSetter;
}