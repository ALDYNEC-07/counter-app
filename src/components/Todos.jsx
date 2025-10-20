import { useDispatch, useSelector } from "react-redux"
import { setFilterText } from "./action"

export const Todos = () => {
    const todos = useSelector((state) => state.todos.todos)
    const filter = useSelector((state) => state.todos.filter)
    const dispatch = useDispatch()
    const selectedUsersId = useSelector((state) => state.users.selectedUsersId)

    const filteredTodos = todos
    .filter(todo => todo.userId === selectedUsersId)
    .filter(todo => todo.title.toLowerCase().includes(filter.toLowerCase()))

    if(selectedUsersId === null) {
        return <div className="todos-arrow"> <span className="span"> ← Пожалуйста, выберите пользователя </span></div>
    }

    const hndlTextFilter = (event) => {
        dispatch(setFilterText(event.target.value))
    }
    return (
        <div className="todos">
            <ul className="ulTodos">
                    <div className="filter">
                        <input type="text" placeholder="Поис по тексту..." value={filter} onChange={hndlTextFilter} />
                    </div>
                {
                    filteredTodos.map((todo) => {
                        return (
                            <li className="liTodos" key={todo.id}>
                                {todo.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}