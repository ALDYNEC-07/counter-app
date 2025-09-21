import React from "react";

export const Buttons = ({plus, minus, reset, saveValue}) => {
    
    return (
        <div className="buttons">
            <button className="plus" onClick={plus}>Увеличь</button>
            <button className="minus" onClick={minus}>Уменшь</button>
            <button className="reset" onClick={reset}>Сбрось</button>
            <button className="save" onClick={saveValue}>Save</button>
        </div>
    )
}