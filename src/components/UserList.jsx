import React from 'react';
import axios from 'axios';
import '../App.css'

const UserList = ({userList, setForm, selectUser, getUsers}) => {

    const orderedList = userList.sort((a,b)=> (a.name.localeCompare(b.name)))
    
    const deleteUser = (user) =>{
        axios.delete(`https://products-crud.academlo.tech/products/${user.id}/`)
        .then(()=>getUsers())
    }

    return (
        <div>
            <h2>Productos</h2>
            <p>productos registrados: {userList?.length}</p>
            <button onClick={() => setForm(true)}>Nuevo Usuario</button>
            {
                orderedList.map((user)=>(
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>Category: {user.category}</p>
                        <p>Available: {user.isAvailable.toString()}</p>
                        <p>Price: {user.price}</p>
                        <div onClick={() => selectUser(user)}>
                            <i className="bx bxs-edit-alt">sdfsd</i>
                        </div>
                        <div onClick={() => deleteUser(user)}>
                            <i className="bx bxs-trash-alt">dfsd</i>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default UserList;