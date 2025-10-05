import React, { useState } from "react";
import { Number } from "./Number";
import { Buttons } from "./Buttons";

import { useDispatch, useSelector } from "react-redux";

export const Main = (props) => {

    const count = useSelector((state) => state)
    const dispatch = useDispatch()

    const plus = () => {
        dispatch({
            type: "plus"
        })
    }
    
    const minus = () => {
        dispatch({
            type: "minus"
        })
    }

    const reset = () => {
        dispatch({
            type: "reset"
        })
    }

    // const save = () => {
    //     dispatch({
    //         type: "save"
    //     })
    // }
    return (
        <div className="main">
            <Number count={count}/>
            <Buttons plus={plus} minus={minus} reset={reset}/>
            {/* <div className="saveV">
             <ul>
                      {savedValues.map((val) => (
                            <li className="saveNum">{val}</li>
                        ))}
                </ul>
            </div>   */}
        </div>
    )
}