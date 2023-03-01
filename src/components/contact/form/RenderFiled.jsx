import React from "react";

import { Button } from "./Button"
import { Input } from "./Input"

export const RenderFiled = ({filed , handleInputChange ,handleBtnClicked, idx , 
                            fields, inputRef}) => {
    return (
        <React.Fragment>
        <Input 
        filed = { filed } 
        handleInputChange = { handleInputChange }
        placeHolder = {filed.placeHolder} 
        idx = { idx }
        inputRef = { inputRef }
        />

        <Button
        filed = { filed } idx = { idx }
        lastIdx = { fields.length - 1 }
        handleBtnClicked = { handleBtnClicked }
        />
        </React.Fragment>
    )
}