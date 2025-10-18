      const initialSate = {
        todos: [],
        loading: false,

        users: [],
        loadUsers: false
      }

export const reducer = (state = initialSate, action) => {
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
                if(todo.id === action.payload) {
                  return {
                    ...todo, 
                    completed: !todo.completed,
                    checking: false
                  }
                }
                return todo
              })
            }

          case "load/users/start":
            return {
              ...state,
              loadUsers: true
            }

          case "load/users/fulfilled":
            return {
              ...state,
              users: action.payload,
              loadUsers: false
            }


          default:
            return state
        }
      }