const initialState = {
    todos: [],
    filter: "",
    loadingTodos: false
}


export const todos = (state = initialState, action) => {
    switch(action.type) {

        case "load/todos/start":
            return {
                ...state,
                loadingTodos: true
            }

        case "load/todos/fulfilled":
            return {
                ...state,
                loadingTodos: false,
                todos: action.payload
            }

        case "set/filterText":
            return {
                ...state,
                filter: action.payload
            }

            
            default:
                return state
    }
}