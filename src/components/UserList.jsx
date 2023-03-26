import React from 'react';

const UserList = ({userList}) => {
    console.log(userList)
    return (
        <div>
            {
                userList.map((user)=>(
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>Category: {user.category}</p>
                        <p>Available: {user.isAvailable.toString()}</p>
                        <p>Price: {user.price}</p>

                    </div>
                ))
            }
        </div>
    );
};

export default UserList;