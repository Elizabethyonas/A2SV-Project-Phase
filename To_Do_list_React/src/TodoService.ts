import TodoTypes from "./todo";

// localStorage.removeItem('todos');


const LOCAL_STORAGE_KEY = 'todos';

const TodoService = {
    //get tasks
    getTodos: () :TodoTypes[] => {
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY)
        return todoStr ? JSON.parse(todoStr) : []; //checks of there is a data in the local storage and if there is we ar going to parse it
    },

    //Adding tasks
    addTodos: (text:string): TodoTypes => {
        const todos = TodoService.getTodos();
        const newTodo: TodoTypes = {id: todos.length + 1, text, completed: false};
        const updateTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return newTodo;
    },

    //Updating to lists
    updateTodo: (todo:TodoTypes) : TodoTypes => {
        const todos = TodoService.getTodos();
        const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return todo;
    },

    //Delete task
    deleteTodo: (id:number): void =>{
        const todos = TodoService.getTodos();
        const updateTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    }

};

export default TodoService