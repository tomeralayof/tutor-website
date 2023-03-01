import React from "react";

export const SuccessMessage = ({ isSuccessMsg, successMsg }) => {
  
    const style = `backgroundColor: ${isSuccessMsg ? "linegreen" : "red"}`;

    return (
        <div style={{ style }} className = {`${isSuccessMsg ? "success-msg" : "success"}`}>
        <h6 className = "message-content">{successMsg}</h6>
      </div>
    )
}