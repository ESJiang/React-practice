import { useState } from "react";
import "../css/ToDoList.css";
import TodoItem from "./TodoItem";
export function TodoList() {
    const [newTodoName, setNewTodoName] = useState(""); // restore input value
    const [todos, setTodos] = useState([]); // store list items
    const addNewTodo = () => newTodoName !== "" && (setTodos(currentTodos => [...currentTodos, { name: newTodoName, completed: false, id: crypto.randomUUID() }]), setNewTodoName(""));
    const toggleTodo = (todoId, completed) => setTodos(currentTodos => currentTodos.map(todo => (todo.id === todoId ? { ...todo, completed } : todo)));
    const deleteTodo = todoId => setTodos(currentTodos => currentTodos.filter(todo => todo.id !== todoId));
    return (
        <>
            <ul id='list'>
                {todos.map(todo => (
                    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                ))}
            </ul>
            <div id='new-todo-form'>
                <label htmlFor='todo-input'>New Todo</label>
                <input type='text' id='todo-input' value={newTodoName} onChange={e => setNewTodoName(e.target.value)} />
                <button onClick={addNewTodo}>Add Todo</button>
            </div>
        </>
    );
}
