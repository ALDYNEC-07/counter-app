import React, { useState } from "react";
import { Number } from "./Number";
import { Buttons } from "./Buttons";


export const Main = (props) => {

    const [count, setCount] = useState(0);
    const [savedValues, setSavedValues] = useState([]);

    const plus = () => setCount(count + 1);
    
    const minus = () => {if (count > 0 ) {setCount(count - 1)}}

    const reset = () => setCount(0)

    const save = () => {
        if (!savedValues.includes(count)) {
            setSavedValues([...savedValues, count])
        }
    }
    return (
        <div className="main">
            <Number count={count}/>
            <Buttons plus={plus} minus={minus} reset={reset} save={save}/>
            <div className="saveV">
             <ul>
                      {savedValues.map((val) => (
                            <li className="saveNum">{val}</li>
                        ))}
                </ul>
            </div>  
        </div>
    )
}