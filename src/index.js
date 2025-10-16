
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { act } from 'react';

      const initialSate = {
        todos: [],
        loading: false
      }

      const reducer = (state = initialSate, action) => {
        switch (action.type) {
          case "load/todos/pending":
            return {
              ...state,
              loading: true
            }

          case "load/todos/fulfilled":
            return {
              ...state,
              todos: action.payload,
              loading: false
            }

          case "delete/todo/start":
            return {
              ...state,
              todos: state.todos.map((todo) => {
                if (todo.id === action.payload) {
                  return {
                    ...todo,
                    deleting: true
                  }
                }
                return todo;
              })
            }

          case "delete/todo/fulfilled":
            return {
              ...state,
              todos: state.todos.filter((todo) => todo.id !== action.payload)
            }

          case "update/check/start":
            return {
              ...state,
              todos: state.todos.map((todo) => {
                if (todo.id === action.payload) {
                  return {
                    ...todo,
                    checking: true
                  }
                }
                return todo;
              })
            }

          case "update/check/fulfilled":
            return {
              ...state, 
              todos: state.todos.map((todo) => {
                if(todo.id === action.payload.id) {
                  return {
                    ...todo, 
                    completed: !todo.completed,
                    checking: false
                  }
                }
                return todo
              })
            }


          default:
            return state
        }
      }

      const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

