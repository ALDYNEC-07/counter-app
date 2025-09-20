import React from "react";
import LogoFoot from "../assets/FooterLogo.svg"

export const FooterLogo = (props) => {
    return (
        <div className="foot-log">
            <img src={LogoFoot} alt="" />
        </div>
    )
}