import React, { useContext } from 'react';
import MainHeader2 from './components/MainHeader/MainHeader2';
import Home2 from './components/Home/Home2';
import Login2 from './components/Login/Login2';
import AuthContext from './store/auth-context2';

const App2 = () => {
    const ctx = useContext(AuthContext);

    return (
        <>
        <MainHeader2 />
        <main>
            {!ctx.isLoggedIn &&<Login2/>}
            {ctx.isLoggedIn && <Home2/>}
        </main>
        </>
    );
};

export default App2;