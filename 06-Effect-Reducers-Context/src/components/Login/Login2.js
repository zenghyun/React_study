import React, {
  useEffect,
  useReducer,
  useState,
  useRef,
  useContext,
} from "react";

import classes from "./Login.module.css";
import Card2 from "../UI/Card/Card2";
import Input2 from "../UI/input/Input2";
import Button2 from "../UI/Button/Button2";
import AuthContext2 from "../../store/auth-context2";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };
};

const Login2 = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState; // 객체 디스트럭쳐링 별칭 할당
  const { isValid: passwordIsValid } = passwordState; // 별칭 할당

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authContext = useContext(AuthContext2);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
      console.log("clean up");
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", value: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", value: e.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      authContext.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card2 className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input2
          id="email"
          label="E-mail"
          type="email"
          ref={emailInputRef}
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input2
          id="password"
          label="Password"
          type="password"
          ref={passwordInputRef}
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button2 type="submit" className={classes.btn}>
            Login
          </Button2>
        </div>
      </form>
    </Card2>
  );
};

export default Login2;
