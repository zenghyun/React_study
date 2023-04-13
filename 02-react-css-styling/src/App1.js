import React, { useState } from "react";

import CourseGoalList1 from "./components/CourseGoals/CourseGoalList/CourseGoalList1";
import CourseInput1 from "./components/CourseGoals/CourseInput/CourseInput1";

import './App.css';

const App = () => {
    const [courseGoals, setCourseGoals] = useState([
        {text:'Do all exercises!' , id:'g1'},
        {text:'Finish the course!' , id: 'g2'}
    ]);

    const addGoalHandler = enteredText => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({text: enteredText, id:Math.random().toString() });
            return updatedGoals;
        });
    };

    const deleteItemHandler = goalId => {
        setCourseGoals(prevGoals => {
            const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
            return updatedGoals;
        });
    };

    let content = (
        <p style={ {textAlign: 'center'}}>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <CourseGoalList1 items={courseGoals} onDeleteItem={deleteItemHandler}/>
        );
    }
    return (
        <div>
            <section id="goal-form">
                <CourseInput1 onAddGoal={addGoalHandler}/>
            </section>
            <section id="goals">
                {content}
            </section>
        </div>
    )
};

export default App;