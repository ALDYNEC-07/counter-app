import React from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";


export const Todos = ({handleCheck, handleDelete}) => {
    const todos = useSelector(state => state.todos)
    const loading = useSelector(state => state.loading)

    return (
        <>
        {
          loading ? <ClipLoader /> : todos.map((todo) => {
            return (
              <div key={todo.id} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='checkbox'>
                {
                  todo.checking ? <ClipLoader color='green' id='loadd' /> : <input onChange={() => handleCheck(todo.id, todo.completed)} id='check' type='checkbox' checked={todo.completed}/>
                }
                </div>
                <li id='li'>{todo.title} <img src='https://i.pinimg.com/originals/e4/21/50/e4215008df6962d94248502bed11a113.jpg' /></li>
              <input onClick={() => handleDelete(todo.id)} disabled={todo.deleting} type='button' value='Delete' id='buttonn'/>
              </div>
            )
          })
        }
        </>
    )
}

