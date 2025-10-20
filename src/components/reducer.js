const initialState = {
    users: [],
    todos: [],

    selectedUsersId: null,
    filter: "",

    loadingUsers: false,
    loadingTodos: false
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "load/users/start":
            return {
                ...state,
                loadingUsers: true
            }

        case "load/users/fulfilled":
            return {
                ...state,
                loadingUsers: false,
                users: action.payload
            }

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

        case "select/userId":
            return {
                ...state,
                selectedUsersId: action.payload
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