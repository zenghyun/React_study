import TodosContextProvider from "./store/todos-context_re";
import NewTodoRe from "./components/NewTodo_re";
import TodosRe from "./components/Todos_re";

function App_re() {
    return (
        <TodosContextProvider>
            <NewTodoRe />
            <TodosRe />
        </TodosContextProvider>
    );
}

export default App_re;