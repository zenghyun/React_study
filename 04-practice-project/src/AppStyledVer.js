import React, { useState } from 'react';
import AddUserStyledVer from './components/Users/AddUserStyledVer';
import UserListStyledVer from './components/Users/UserListStyledVer';

const App_styled_ver = () => {
    const [userList, setUserList] = useState([]);

    const addUserHandler = (name, age) => {
        setUserList(prevUserList => {
            return [...prevUserList, {name, age, id:Math.random().toString()}];
        })
    }

    return (
        <>
        <AddUserStyledVer onAddUser={addUserHandler}/>
        <UserListStyledVer users={userList}/>            
        </>
    );
};

export default App_styled_ver;