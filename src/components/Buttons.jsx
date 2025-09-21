import React from "react";


export const Buttons = ({plus, minus, reset, save}) => {
    return (
        <div className="buttons">
            <div className="one">
            <button className="plus" onClick={plus}>Увеличь</button>
            <button className="minus" onClick={minus}>Уменшь</button>
            </div>
            <div className="two">
            <button className="reset" onClick={reset}>сброс</button>
            <button className="save" onClick={save}>save</button>
            </div>
        </div>
    )
}