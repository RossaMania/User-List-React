import React, { useState } from 'react';

import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const handleAddingUser = (uName, uAge) => {

    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div>
    <AddUser onAddUser={handleAddingUser} />
    <UsersList users={usersList} />
    </div>
  );
}

export default App;
