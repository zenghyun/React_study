import React from "react";

import styled from "styled-components";

import CardStyldVer from "../UI/CardStyldVer";

const UserList = styled.div`
  .users {
    margin: 2rem auto;
    width: 90%;
    max-width: 40rem;
  }

  .users ul {
    list-style: none;
    padding: 1rem;
  }

  .users li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

const UserListStyledVer = ({ users }) => {
  return (
    <UserList>
      <CardStyldVer className='users'>
        <ul>
          {users.map(user => (
                        <li key={user.id}>
                            {user.name} ({user.age} years old)
                        </li>
                    ))}
        </ul>
      </CardStyldVer>
    </UserList>
  );
};

export default UserListStyledVer;
