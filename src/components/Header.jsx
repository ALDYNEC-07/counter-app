import React from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <header className="header">
        <Logo/>
        <Navbar/>
        </header>
    )
}