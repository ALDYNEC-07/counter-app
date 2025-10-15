
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

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

          case "delete/todo/fulfilled":
            return {
              ...state,
              todos: state.todos.filter((todo) => todo.id !== action.payload)
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

