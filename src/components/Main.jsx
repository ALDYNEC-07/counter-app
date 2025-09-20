import React from "react";
import { Number } from "./Number";
import { Buttons } from "./Buttons";


export const Main = (props) => {
    return (
        <main className="main">
            <Number/>
            <Buttons/>
        </main>
    )
}