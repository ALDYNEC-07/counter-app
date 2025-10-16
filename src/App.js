import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadTodos, deleteTodo, updateCheck } from './action';

export const App = () => {
  const todos = useSelector(state => state.todos)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleCheck = (id, completed) => {
    dispatch(updateCheck(id, completed))
  }
  
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', color: '#090'}}>Counter App</h1>
      <ul>
        {
          loading ? <h2>Loading...</h2> : todos.map((todo) => {
            return (
              <div key={todo.id} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input onChange={() => handleCheck(todo.id, todo.completed)} id='check' type='checkbox' />
                <li id='li'>{todo.title} <img src='https://i.pinimg.com/originals/85/3c/52/853c524391ad70e0d2036373cd978080.jpg' /></li>
              <input onClick={() => handleDelete(todo.id)} type='button' value='Delete' />
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

