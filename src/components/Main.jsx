import React, { useState } from "react";
import { Number } from "./Number";
import { Buttons } from "./Buttons";




export const Main = (props) => {



    const [counter, setCounter] = useState(0)
    const [savedValues, setSavedValues] = useState([]); 

    const plus = () => {
        setCounter(counter + 3) 
    }
    const minus = () => {
        if (counter > 0) {
            setCounter(counter - 2)
        }
    }
    const reset = () => {
            setCounter(0)
    }

    const saveValue = () => {
        if (!savedValues.includes(counter)) {
            setSavedValues([...savedValues, counter]);
        }
    };

    return (
        <main className="main">
            <Number count={counter}/>
            <Buttons plus={plus} minus={minus} reset={reset} saveValue={saveValue}/>

             <div className="summa">
                  <h2>Сохранённые значения:</h2>
                  <ul>
                      {savedValues.map((val, index) => (
                            <li key={index}>{val}</li>
                        ))}
                </ul>
        </div>
        </main>
    )
}