import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTodos, deleteTodo, updateCheck } from './redux/action';
import { Header } from './components/Header';
import { Todos } from './components/Todos';

export const App = () => {
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
      <Header />
      <Todos 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
       />
    </div>
  )
}

  