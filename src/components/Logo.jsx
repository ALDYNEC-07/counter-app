import React from "react";
import Logotip from "../assets/Logotip.svg"


export const Logo = (props) => {
    return (
        <div className="logo">
            <img src={Logotip} alt="" />
        </div>
    )
}