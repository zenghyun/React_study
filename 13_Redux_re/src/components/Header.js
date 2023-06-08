import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth";
import classes from "./Header.module.css";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHelper = useCallback(() => dispatch(logout()), [dispatch]);

  const logoutHandler = (e) => {
    e.preventDefault();

    logoutHelper();
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
