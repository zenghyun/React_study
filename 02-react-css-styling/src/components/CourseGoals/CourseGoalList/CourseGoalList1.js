import React from "react";

import CourseGoalItem1 from "../CourseGoalItem/CourseGoalItem1";
import './CourseGoalList.css';

const CourseGoalList1 = props => {
    return (
        <ul className="goal-list">
            {props.items.map(goal => (
                <CourseGoalItem1
                key={goal.id}
                id={goal.id}
                onDelete={props.onDeleteItem}
                >
                    {goal.text}
                </CourseGoalItem1>
            ))}
        </ul>
    );
};

export default CourseGoalList1;