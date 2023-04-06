import React, { useState } from 'react';
import AddUser1 from './components/Users/AddUser1';
import UserLIst1 from './components/Users/UserLIst1';

const App1 = () => {
    const [userList, setUserList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUserList(prevUserList => {
            return [...prevUserList, {
                name: uName, age: uAge, id: Math.random().toString()
            }];
        });
    };

    return (
        <div>
            <AddUser1 onAddUser={addUserHandler}></AddUser1>
            <UserLIst1 users={userList}></UserLIst1>
        </div>
    );
};

export default App1;