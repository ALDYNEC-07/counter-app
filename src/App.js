import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from './action';

export const App = () => {
  const todos = useSelector(state => state.todos)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  return (
    <div className="App">
      <h1 style={{textAlign: 'center', color: '#090'}}>Counter App</h1>
      <ul>
     {
      loading ? <h2>Loading...</h2> : todos.map((item) => {
          return (
            <div key={item.id}>
              <li id='li'>{item.title}</li>
            </div>
          )
        })
      }
      </ul>
    </div>
  )
}

