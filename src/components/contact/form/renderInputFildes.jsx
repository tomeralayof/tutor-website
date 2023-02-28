import React from "react"

import {RenderFiled } from "./RenderFiled";

export const RenderInputFileds = ( { fields,handleInputChange,handleBtnClicked } ) => {
    return (
        fields.map((filed, idx) => {
            return (
              <div key = {idx} className = { filed.divClass } >
              
              <RenderFiled
              filed = { filed }
              handleInputChange = { handleInputChange }
              handleBtnClicked = { handleBtnClicked }
              idx = {idx}
              fields = {fields}
              />
              </div>
            )
          })
    )
}