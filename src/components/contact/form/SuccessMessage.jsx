import React from "react";

export const SuccessMessage = ({ isSuccessMsg, successMsg }) => {
    return (
        <div className = {`${isSuccessMsg ? "success-msg" : "success"}`}>
        <h6 className = "message-content">{successMsg}</h6>
      </div>
    )
}