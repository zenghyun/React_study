import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { increment, decrement, increase, toggleCounter } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  // const [show, setShow] = useState(false);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = useCallback(
    () => dispatch(increment()),
    [dispatch]
  );
  const increaseHandler = useCallback(
    () => dispatch(increase(5)), // { amount: 5 } => payload = 5
    [dispatch]
  );
  const decrementHandler = useCallback(
    () => dispatch(decrement()),
    [dispatch]
  );

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
    // setShow(!show);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
