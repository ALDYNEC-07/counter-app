import React, { useState } from "react";
import { Number } from "./Number";
import { Buttons } from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import { PlusOne, MinusOne, Reset } from "./actions";

export const Main = (props) => {

    const count = useSelector((state) => state)
    const dispatch = useDispatch()

    const plus = () => {
        dispatch(PlusOne())
    }
    
    const minus = () => {
        dispatch(MinusOne())
    }

    const reset = () => {
        dispatch(Reset())
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