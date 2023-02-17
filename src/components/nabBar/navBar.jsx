import React, {useState} from "react";

import "../../styles/navBar/navBar.css";

export const NavBar = () => {

    const [selectedOption, setSelectedOption] = useState("st-control-5");

    const handleChange = (event) => {
        setSelectedOption(event.target.id);
    };

    const setOptions = () => {
        const optionSetter = [];

        const labelArr = ["צור קשר","מאמרים", "? מה אני מלמד", " אני ואני מאמין", "ברוכים הבאים"];

        labelArr.map((elem,i) =>
        optionSetter.push({id: `st-control-${i + 1}`,
                            for : `st-panel-${i + 1}`, label : labelArr[i]}));
        
        return optionSetter;
    }

    const options = setOptions();

    return (
        options.map((option)=> {
            return (
            <React.Fragment key = {option.id}>
            <input
              type = "radio"
              name = "radio-set"
              id = {option.id}
              htmlFor = {option.for}
              checked = { selectedOption === option.id }
              onChange = { handleChange }
              />
            <a href={`#${option.for}`}>{option.label}</a>
          </React.Fragment>
        )
        })
    )
}