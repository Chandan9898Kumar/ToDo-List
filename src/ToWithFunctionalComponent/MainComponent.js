import React, { useState } from "react";
import AddTodoItem from "../ToWithFunctionalComponent/AddTodo";
import TaskListComponent from "../ToWithFunctionalComponent/TaskList";
let nextId = 3;
const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false }
];

const MainComponent = () => {
    const [todos, setTodos] = useState(initialTodos);

    const handleAddTodo = (e, title) => {
        e.preventDefault();
        if (title === '') {
            return
        } else {
            setTodos([
                ...todos,
                {
                    title: title,
                    id: nextId++,
                    done: false
                }
            ]);
        }
    };

    const RemoveItems = (e, item) => {
        setTodos(todos.filter((items) => items.id !== item.id))
    }
    console.log(todos, "todos");

    return (
        <>
            <AddTodoItem onAddTodo={handleAddTodo} /><br />
            <TaskListComponent
                todos={todos}
                RemoveItems={RemoveItems}
                setTodos={setTodos}
            />
        </>
    );
};
export default MainComponent;