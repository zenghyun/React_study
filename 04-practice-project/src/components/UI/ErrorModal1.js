import React from "react";

import Card1 from "./Card1";
import Button1 from "./Button1";

import classes from "./ErrorModal.module.css";

const ErrorModal1 = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card1 className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button1 onClick={props.onConfirm} >Okay</Button1>
        </footer>
      </Card1>
    </div>
  );
};

export default ErrorModal1;
