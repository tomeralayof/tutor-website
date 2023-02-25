import React from "react";

export const ContactIcon = ({ icon }) => {
    return (
        <React.Fragment>
            <li>
                <a href= {icon.link} >
                {Array(4).fill(null).map((_, index) => <span key ={ index}></span>)}
                    <span className ={icon.icon}></span>
                </a>
            </li> 
        </React.Fragment>
    )
}