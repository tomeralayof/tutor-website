import React from "react";

export const RenderNavFiled = ({option, selectedOption,handleChange }) => {

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
}