import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import { users } from "./users/users";
import { todos } from "./todos/todos";


const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootState = combineReducers({
    users: users,
    todos: todos
})


export const store = createStore(rootState, applyMiddleware(thunk, logger))
