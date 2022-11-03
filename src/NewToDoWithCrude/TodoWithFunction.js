import React, { useState } from "react";
const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false }
];
const MyfunctionsToDo = () => {
    const [edit, setEdit] = useState(false);
    const [inputid, setInputId] = useState("");
    const [name, setName] = useState("");
    const [details, setDetails] = useState(initialTodos);

    const AddData = (e) => {
        e.preventDefault();
        setDetails([
            ...details,
            {
                id: details.length++,
                title: name
            }
        ]);
        setName("");
    };

    const RemoveData = (e, item) => {
        e.preventDefault();
        const data = details.filter((items) => items.id !== item.id);
        setDetails(data);

        //             Or

        // setDetails(details.filter((items)=> items.id!==item.id))
    };

    const changeEditModal = (e, item) => {
        // const newData = details.map((items) => {
        //     return items.id === item.id ? { ...items, title: e.target.value } : items

        // })
        // setDetails(newData)

        //               OR

        setDetails(details.map((items)=> {
          return  items.id===item.id ? {...items,title:e.target.value}: items
        }))

    };

    const onEditModal = (e, item) => {
        setInputId(item.id);
        setEdit(true);
    };

    return (
        <>
            Type :
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={(e) => AddData(e)}>Add</button>
            {details.map((item) => (
                <li>
                    Id: {item.id}
                    {item.title}
                    {edit && item.id === inputid ? (
                        <input
                            type="text"
                            value={item.title}
                            onChange={(e) => changeEditModal(e, item)}
                        />
                    ) : (
                        ""
                    )}
                    {edit ? (
                        <button onClick={(e) => setEdit(false)}>Save</button>
                    ) : (
                        <button onClick={(e) => onEditModal(e, item)}>Edit</button>
                    )}
                    <button onClick={(e) => RemoveData(e, item)}>Remove</button>
                </li>
            ))}
        </>
    );
};
export default MyfunctionsToDo;
