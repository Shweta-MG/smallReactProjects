import { useState } from 'react';

import AddUser from './Components/Users/AddUsers';
import UserList from './Components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);


  const AddUSerHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return (
        [
          ...prevUserList,
        { Name: uName, Age: uAge, id: Math.random().toString() }]
      )
    })

  }

  
  return (
    <div >
      <h1>Submit Form</h1>
      <AddUser onAddUser={AddUSerHandler} />
      <UserList users={userList} />   
    </div>
  );
}

export default App;
