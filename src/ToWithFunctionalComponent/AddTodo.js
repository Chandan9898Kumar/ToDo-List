import React, { useState } from "react";

const AddTodoItem = ({ onAddTodo }) => {
    const [title, setTitle] = useState("");

    return (
        <>
            <input
                placeholder="Type Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={(e) => {
                    onAddTodo(e, title);
                    setTitle("");
                }}
            >
                Add
            </button>
        </>
    );
};
export default AddTodoItem;