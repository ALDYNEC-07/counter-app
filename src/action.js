import React from "react";

export const loadTodos = () => {
    return (dispatch) => {
    dispatch({type: "load/todos/pending"})

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: "load/todos/fulfilled", 
                payload: json})
        });
    }
}