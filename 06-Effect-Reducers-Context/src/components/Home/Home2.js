import React, { useContext } from 'react';

import classes from './Home.module.css'
import Card2 from '../UI/Card/Card2';
import Button2 from '../UI/Button/Button2';
import AuthContext from '../../store/auth-context2';

const Home2 = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Card2 className={classes.home}>
      <h1>Welcome back!</h1>
      <Button2 onClick={authCtx.onLogout}>Log Out</Button2>
    </Card2>
  );
};

export default Home2;