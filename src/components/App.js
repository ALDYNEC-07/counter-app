import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadTodos, loadUsers } from "./action"
import { Users } from "./Users"
import { Todos } from "./Todos"





export const App = () => {
  const dispatch = useDispatch()

  const loadingTodos = useSelector((state) => state.loadingTodos)
  const loadingUsers = useSelector((state) => state.loadingUsers)

  useEffect(() => {
    dispatch(loadUsers())
    dispatch(loadTodos())
  }, [])


  if (loadingTodos || loadingUsers) {
    return (
      <div style={{width: '100%', textAlign: 'center', marginTop: '50px'}}>
        Loading...
      </div>
    )
  }
  return (
    <div className="App">
      <Users />
      <Todos />
    </div>
  )
}
