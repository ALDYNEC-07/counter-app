import React from "react";

export const Navbar = (props) => {
    const navigation = ["Главная", "О нас", "Контакты", "Регистрация"]
    return (
        <ul className="menu">
            {
                navigation.map((nav) => (
                    <li>
                        <a href="#">{nav}</a>
                    </li>
                ))
            }
        </ul>
    )
}

