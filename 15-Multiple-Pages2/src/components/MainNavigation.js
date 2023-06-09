import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              //   style={({ isActive }) => ({
              //     color: isActive ? "white" : "red",
              //   })}
              end // 모든 Link가 "/"로 시작하기 때문에 기본적인 "/"은 NavLink를 통해 다른 곳으로 이동해도 자동으로 활성화되게 된다. 이런 기능을 막기 위해 end를 쓴다.
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
