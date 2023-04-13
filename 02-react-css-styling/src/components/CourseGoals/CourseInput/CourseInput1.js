import React, {useState} from "react";

import Button1 from "../../UI/Button/Button1";
import styles from './CourseInput.module.css';

const CourseInput1 = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        if(event.target.value.trim().length > 0){
            setIsValid(true);
          }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
          }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </div>
            <Button1 type="submit">Add Goal</Button1>
        </form>
    );
};

export default CourseInput1;


