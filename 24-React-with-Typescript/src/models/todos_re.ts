class Todo_re {
    id: string;
    text: string;

    constructor(todoText:string) {
        this.id = new Date().toString(); 
        this.text = todoText;
    }
}

export default Todo_re;