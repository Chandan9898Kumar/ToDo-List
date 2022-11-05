import React, { useState } from "react";

const TaskListComponent = ({ todos, RemoveItems, setTodos }) => {
    const [edit, setEdit] = useState(false)
    const [inputId, setInputId] = useState('')

    const EditItems = (e, item) => {
        e.preventDefault()
        setEdit(true)
        setInputId(item.id)

    }

    const ModifyInputCHanges = (e, item) => {
        setTodos(todos.map((items) => {
            return items.id === item.id ? { ...items, title: e.target.value } : items
        }))


    }
    return (
        <>
            <label>Your Items : {todos.length === 0 ? 'No Item Found' : ''} </label><br />

            {
                todos.map((item) => (
                    <div>
                        <li>
                            {item.title}
                            {
                                edit && item.id === inputId ?
                                    <input
                                        type='text'
                                        value={item.title}
                                        onChange={(e) => ModifyInputCHanges(e, item)}
                                    />
                                    : ''
                            }
                            {edit ? (
                                <button onClick={(e) => setEdit(false)}>Save</button>
                            ) : (
                                <button onClick={(e) => EditItems(e, item)}>Edit</button>
                            )}
                            <button
                                onClick={(e) => RemoveItems(e, item)}
                            >Remove</button>
                        </li>

                    </div>
                ))

            }

        </>
    )
}
export default TaskListComponent;