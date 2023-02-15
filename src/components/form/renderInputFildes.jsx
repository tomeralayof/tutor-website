import React from "react"
import { Button } from "./Button"
import { Input } from "./Input"

export const RenderInputFileds = ( { fields,handleInputChange,handleBtnClicked } ) => {
    return (
        fields.map((filed, idx) => {
            return (
              <div key = {idx} className = { filed.divClass } >
              <Input filed = {filed} handleInputChange = { handleInputChange }
                 placeHolder = {filed.placeHolder} idx = { idx }/>
              <Button filed = { filed } idx = { idx }
                  lastIdx = { fields.length - 1 }  handleBtnClicked = { handleBtnClicked } />
              </div>
            )
          })
    )
}