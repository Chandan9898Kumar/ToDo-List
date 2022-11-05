import React from "react"

import AddItemComponentClass from './AddItemClass';
import ListItemComponentClass from './ListTaskClass'
const data = [
    { userName: "Ava", age: 89, id: 0 },
    { userName: "Adom", age: 2022, id: 1 },
    { userName: "kings", age: 2022, id: 2 },
    { userName: "loyal", age: 2022, id: 3 }
];
class MainComponentClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: data,
        };
    }

    AddItemToList = (e, name) => {
        const { detail } = this.state
        if (name === '') {
            return
        } else {
            // Here inside setState, we  destructed detail from setState,now implementing array part on it.
            this.setState({
                detail: [
                    ...detail,
                    {
                        userName: name,
                        id: detail.length++

                    }
                ],
            })
        }
    }
    RemoveItem = (e, item) => {
        const { detail } = this.state
        let newData = detail.filter((items) => items.id !== item.id)
        this.setState({
            detail: newData
        })
    }

    ChangeInputText = (e, item) => {
        const { detail } = this.state
        let newData = detail.map((items) => {
            return items.id === item.id ? { ...items, userName: e.target.value } : items
        })
        this.setState({
            detail: newData
        })

    }

    render() {
        const { detail } = this.state
        return (
            <>
                <AddItemComponentClass
                    AddItemToList={this.AddItemToList}
                /><br />

                <ListItemComponentClass
                    detail={detail}
                    RemoveItem={this.RemoveItem}
                    ChangeInputText={this.ChangeInputText}
                />
            </>
        )
    }
}
export default MainComponentClass;