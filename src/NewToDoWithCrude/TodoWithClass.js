import React from "react";

const data = [
    { userName: "Ava", age: 89, id: 0 },
    { userName: "Adom", age: 2022, id: 1 },
    { userName: "kings", age: 2022, id: 2 },
    { userName: "loyal", age: 2022, id: 3 }
];

class MyClassToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: data,
            name: "",
            ItemId: '',
            edit: false
        };
        this.AddDataElement = this.AddDataElement.bind(this);
    }
    AddUserToList = (e) => {
        this.setState((prev) => {
            return {
                ...prev,
                name: e.target.value
            };
        });
    };

    AddDataElement = (e) => {
        e.preventDefault()
        const { name, detail } = this.state;
        if (name === "") {
            return;
        } else {
            this.setState({
                detail: [
                    ...detail,
                    {
                        userName: name,
                        id: detail.length++
                    }
                ],
                name: ""
            });
        }
    };

    RemoveItem = (e, item) => {
        const { detail } = this.state
        let newData = detail.filter((items) => items.id !== item.id)
        this.setState({
            detail: newData
        })
    }

    EditAndSetID = (e, item) => {
        // This is how we deStruct objects.
        this.setState({
            ItemId: item.id,
            edit: true
        })
    }

    EditTheItems = (e, item) => {
        const { detail } = this.state;
        let newDataItem = detail.map((items) => {
            return items.id === item.id ? { ...items, userName: e.target.value } : items
        })
        this.setState({
            detail: newDataItem
        })

    }
    render() {
        const { detail, name, edit, ItemId } = this.state;
        return (
            (
                <>
                    Add Items :
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => this.AddUserToList(e)}
                    />
                    <button onClick={(e) => this.AddDataElement(e)}>Add</button>
                    <br />
                    {detail.map((item) => (
                        <li>
                            Name: {item.userName}
                            {edit && item.id === ItemId ?
                                <>
                                    <input
                                        type='text'
                                        value={item.userName}
                                        onChange={(e) => this.EditTheItems(e, item)}
                                    />
                                    <button onClick={(e) => this.setState({ edit: false })}>Save</button>
                                </>
                                :
                                <button onClick={(e) => this.EditAndSetID(e, item)}>Edit</button>
                            }

                            <button
                                onClick={(e) => this.RemoveItem(e, item)}
                            >Remove</button>
                        </li>
                    ))}
                </>
            )
        );
    }
}
export default MyClassToDo;