import React from "react"
class ListItemComponentClass extends React.Component {
    state = {
        edit: false,
        inputId: ''
    }
    render() {
        const { detail, RemoveItem,ChangeInputText } = this.props
        const { edit, inputId } = this.state
        return (
            <>
                <label>Your Items : {detail.length === 0 ? 'No Item Found' : ''}</label><br />
                {detail.map((item,index) => (
                    <li key={index}>
                        {item.userName}
                        {
                            edit && item.id===inputId ?
                                <input
                                    type='text'
                                    value={item.userName}
                                    onChange={(e)=>ChangeInputText(e,item)}
                                />
                                : ''
                        }
                        {edit ? (
                            <button onClick={(e) => this.setState({ edit: false })}>Save</button>
                        ) : (
                            <button onClick={(e) => this.setState({
                                edit: true,
                                inputId: item.id
                            })}>Edit</button>
                        )}
                        <button
                            onClick={(e) => RemoveItem(e, item)}
                        >Remove Item</button>
                    </li>
                ))}

            </>
        )
    }
}
export default ListItemComponentClass;