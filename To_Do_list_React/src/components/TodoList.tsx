import React,{useState} from 'react';
import TodoTypes from '../todo';
import TodoService from '../TodoService';
import { FaCheck, FaEdit } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import "../CSS/TodoList.css";

const TodoList = () => {
    const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
    const [editingTodoId, setEditedTodoId] = useState<number|null>(null);
    const [editedTodoText, setEditedTodoText] = useState<string>("")

    //function for editing
    const handleEditStart = (id:number, text:string) => {
        setEditedTodoId(id);
        setEditedTodoText(text);
    }

    const handleEditCancel = () =>{
        setEditedTodoId(null)
        setEditedTodoText("");
    }

    const handleEditSave =(id:number) =>{
        if(editedTodoText.trim() !== ''){
            const updateTodo = TodoService.updateTodo({
                id,
                text:editedTodoText,
                completed: false
            });
            setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updateTodo : todo)));
            setEditedTodoId(null);
            setEditedTodoText("");
        }
    };
    //function to handle delete task
    const handleDeleteTodo = (id:number) => {
        TodoService.deleteTodo(id);
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    }

  return <div className="todoContainer">
    <div>

    </div>
    
    {todos.map((todo) => (
        <div className="items" key={todo.id}>
            {editingTodoId == todo.id ? (
                <div className="editedText">
                    <input type="text" value={editedTodoText} onChange={(e) => setEditedTodoText(e.target.value)} autoFocus={true}/>
                    <button onClick={() => handleEditSave(todo.id)}>
                        <FaCheck />
                    </button>

                    <button onClick={() => handleEditCancel()}>
                        <GiCancel/>
                    </button>
                    
                </div>
            ): (
                <div className="editBtn">
                    <span>{todo.text}</span>
                    <button onClick={() => handleEditStart(todo.id, todo.text)}>
                    <FaEdit />
                    </button>
                </div>
            )}

            <button onClick={() => handleDeleteTodo(todo.id)} className='deleteBtn'>
                <RiDeleteBin5Fill/>
            </button>

        </div>
    ))}

  </div>;



}

export default TodoList