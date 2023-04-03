import React from 'react';
import { useState } from 'react';

import Button from '../UI/Button';
import './AddUsers.css';

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            return;           
        } else if (+userAge < 0) {
            return;
        };



        props.onAddUser(userName, userAge);
        console.log(userAge, userName);
        setUserName('');
        setUserAge('');
    }

    const userNameHandler = (event) => {
        setUserName(event.target.value);

    }

    const userAgeHandler = (event) => {
        setUserAge(event.target.value);

    }

    return ( 
        <form onSubmit={addUserHandler}>
            <div>

                <label htmlFor="name" > User Name</label>
                <input type="text" id="name" value={userName} onChange={userNameHandler}/>
            </div>

            <div>
                <label htmlFor="age"> User Age (Years) </label>
                <input type="number" id="age" value={userAge} min={0} onChange={userAgeHandler} />
            </div>

            <div>
            <Button type='submit'> Add User </Button>
            </div>


        </form>
    );
}
 
export default AddUser;
