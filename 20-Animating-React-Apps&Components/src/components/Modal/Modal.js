import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const animationTiming = {
  enter: 400, // 요소가 나타나게 하는데 사용할 시간의 길이를 정의
  exit: 1000, // 요소를 사라지게 하는데 사용할 시간의 길이를 정의
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter:'',
        enterActive:'ModalOpen',
        exit:'',
        exitActive:'ModalClosed'
       
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
