import React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterNavbar } from "./FooterNavbar";
import { Author } from "./Author";

export const Footer = (props) => {
    return (
        <footer className="footer">
            <FooterLogo/>
            <FooterNavbar/>
            <Author/>
        </footer>
    )
}