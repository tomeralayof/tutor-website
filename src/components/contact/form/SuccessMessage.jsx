import React from "react";

export const SuccessMessage = ({ isSuccessMsg, successMsg }) => {

    return (
        <div className = {`${isSuccessMsg ? "success-msg" : "success"}`}>
        <p>{successMsg}</p>
      </div>
    )
}