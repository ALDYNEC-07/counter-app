import React from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";


export const Todos = ({handleCheck, handleDelete}) => {

  const { todos, loading, users, loadUsers } = useSelector((state) => ({
    todos: state.todos,
    loading: state.loading,
    users: state.users,
    loadUsers: state.loadUsers,
  }));

    return (
        <>
        {
          loading ? <ClipLoader /> : 
            
            todos.map((todo) => {

                const user = users.find((u) => u.id === todo.userId);

            return (
                <div   
                    key={todo.id} 
                    style={{display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    gap: '10px',
                    border: '1px solid black',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor: todo.completed ? 'lightgray' : 'white'
                }}>

                <div className='checkbox'>
                    {
                        todo.checking   ? 
                            <ClipLoader color='lightblue' id='loadd' /> 
                                        : 
                            <input onChange={() => handleCheck(todo.id, todo.completed)} 
                                            id='check' 
                                            type='checkbox' 
                                            checked={todo.completed}
                            />
                    }
                </div>

                <li id='li'>
                    <div>
                        { todo.title }
                        <br/>
                        <hr/> 
                        { loadUsers ? <ClipLoader size={14}/> : <span className="user-email">email: {user.email}</span>}
                    </div>
                    <img    src='https://i.pinimg.com/736x/a6/dd/58/a6dd58f4b774a0eb90196eefdf0f9298.jpg' /></li>
                    <button
                            disabled={todo.deleting}
                            onClick={() => handleDelete(todo.id)}
                            className="delete-button"
                            >
                            Delete
                    </button>
                </div>
            )
          })
        }
        </>
    )
}

