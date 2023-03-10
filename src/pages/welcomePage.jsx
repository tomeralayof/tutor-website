import React from "react";
import { Header } from "../common/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const WelcomePage = () => {
    return (
        <React.Fragment>
            <Header text = {" { ללמוד תכנות בקלות }"} />
            <p>שיעורים פרטיים בתכנות במגוון שפות ולכל מטרה</p>

            <div className="nav-instraction-container">
            <div className = "content-container">
                <div className="navtext-location">
                <h6 className = "paragraph">
                    <FontAwesomeIcon icon = {faArrowLeft} />
                        <span className = "paragraph__text">לניווט מהיר</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </h6>
                </div>


            </div>
            </div>

        </React.Fragment>
    )
}