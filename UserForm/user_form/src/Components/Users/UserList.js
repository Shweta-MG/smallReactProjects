import React from 'react';
import './UserList.css';

const UserList = (props) => {
    return (  
    <ol>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.Name} ({user.Age} years old)
          </li>
        ))}
    </ol>
    );
}
 
export default UserList;