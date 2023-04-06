import React from "react";

import Card1 from "../UI/Card1";

import classes from "./UserList.module.css";

const UserLIst1 = props => {
  return (
    <Card1 className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card1>
  );
};

export default UserLIst1;
