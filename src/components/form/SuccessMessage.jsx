import React from "react";

import "../../styles/form/successMessage.css";

export const SuccessMessage = ({ isSuccessMsg, successMsg }) => {

    return (
        <div className = {`${isSuccessMsg ? "success-msg" : "success"}`}>
        <p>{successMsg}</p>
      </div>
    )
}