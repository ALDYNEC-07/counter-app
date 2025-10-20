import { useDispatch, useSelector } from "react-redux"
import { selectId } from "./action"

export const Users = () => {

    const users = useSelector((state) => state.users.users)

    const dispatch = useDispatch()

    const selectUserId = (id) => {
        dispatch(selectId(id))
    }

    const selectedUsersId = useSelector((state) => state.users.selectedUsersId)


    return (
        <div className="users">
            <ul className="ulUsers">
                {
                    users.map((user) => {
                        return (
                            <li 
                                className={user.id === selectedUsersId ? "selected" : "liUsers"} 
                                key={user.id} 
                                onClick={() => selectUserId(user.id)}
                            >
                                <span className="username"> { user.name } </span> <br/>
                                <span className="email"> <b> { user.email } </b> </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}