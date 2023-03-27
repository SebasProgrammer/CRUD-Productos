import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UserList from './components/UserList'
import UserForm from './components/UserForm'

function App() {

  const [userList, setUserList] = useState([])
  const [form, setForm] = useState(false)
  const [userSelected, setUserSelected] = useState(null)
  
  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios.get("https://products-crud.academlo.tech/products/")
      .then(res=>setUserList(res.data))
      .catch(error=>console.log(error))
  }

  const selectUser = (user) =>{
    setForm(true)
    setUserSelected(user)
  }

  return (
    <div className="App">
      { form &&
        <UserForm 
          setForm = {setForm}
          getUsers = {getUsers}
          userSelected = {userSelected}
          setUserSelected = {setUserSelected}
        />
      }
      <UserList 
        userList = {userList}
        setForm = {setForm}
        selectUser= {selectUser}
        getUsers = {getUsers}
      />
    </div>
  )
}

export default App
