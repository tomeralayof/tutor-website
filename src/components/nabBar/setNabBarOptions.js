import navBarConfig from "../../config/navBar/navConfig.json";

const setOption = (label,idx) => {
    return {
        id: `st-control-${idx + 1}`,
        for : `st-panel-${idx + 1}`,
        label 
    }
}

export const setNavBartOptions = () => {
    const optionSetter = [];

    console.log(navBarConfig.labels);

    navBarConfig.labels.map((label,i) => optionSetter.push(setOption(label,i)));
    
    return optionSetter;
}