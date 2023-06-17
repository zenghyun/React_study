import React,{ useState } from 'react';
import Todo_re from "../models/todos_re";

type TodosContextObj = {
    items: Todo_re[];
    addTodo: (text:string) => void;
    removeTodo: (id:string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: () => {},
});

const TodosContextProvider: React.FC<{children : React.ReactNode}> = props => {
    const [todos, setTodos] = useState<Todo_re[]>([]);

    const addTodoHandler = (text: string)  => {
        const newTodo = new Todo_re(text);

        setTodos(prevTodos => {
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodoHandler = (id:string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id);
        })
    }


    const contextValue: TodosContextObj  = {
        items: todos, 
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    }
    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider