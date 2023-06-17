import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context_re";
import TodoItemRe from "./TodoItem_re";
import classes from "./Todos.module.css";

const TodosRe: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItemRe key={item.id} text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default TodosRe;
