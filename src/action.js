import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: "load/todos/rending"})

        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: "load/todos/fulfilled",
                payload: json
            })
        })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch({type: "delete/todo/start"})

        fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10/${id}`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: "delete/todo/fulfilled",
                payload: id
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

export const updateCheck = (id, completed) => {
    return (dispatch) => {
        dispatch({type: "update/check/start"})

        fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: !completed
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then((response) => response.json())
        .then(() => {
            dispatch({
                type: "update/check/fulfilled",
                payload: id
            })
        })
                .catch((error) => {
            console.error('Error:', error);
        });
    }
}