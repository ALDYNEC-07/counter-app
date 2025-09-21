import React from "react";
import FootLogo from "../assets/FooterLogo.svg"


export const Footer = () => {
    const footMenu = ["Партнерам", "Разработчикам", "Вакансии"]
    return (
        <footer className="footer">
            <img src={FootLogo} alt="" />
            <ul className="footMenu">
                {
                    footMenu.map((foot) => (
                        <li>
                            <a href="">{foot}</a>
                        </li>
                    ))
                }
            </ul>
            <p>“Lincode”, 2023г</p>
        </footer>
    )
}