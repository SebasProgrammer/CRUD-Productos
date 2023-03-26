import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UserList from './components/UserList'

function App() {

  const [userList, setUserList] = useState([])
  
  useEffect(() => {
    axios.get("https://products-crud.academlo.tech/products/")
      .then(res=>setUserList(res.data))
      .catch(error=>console.log(error))
  }, [])

  return (
    <div className="App">
      <UserList 
        userList = {userList}
      />
    </div>
  )
}

export default App
