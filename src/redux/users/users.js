const initialState = {
    users: [],
    selectedUsersId: null,
    loadingUsers: false
}


export const users = (state = initialState, action) => {
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
        case "select/userId":
            return {
                ...state,
                selectedUsersId: action.payload
            }
            
            default:
                return state
    }
}