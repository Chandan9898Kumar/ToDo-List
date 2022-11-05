import React from "react"


class AddItemComponentClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }

    }

    render() {
        const { name } = this.state
        const { AddItemToList } = this.props
        return (
            <>
                <input
                    type='text'
                    value={name}
                    placeholder="Type Here"
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button
                onClick={(e)=>
                {
                AddItemToList(e,name)
                this.setState({name:''})
                }
                }
                >Add Item</button>
            </>
        )
    }
}
export default AddItemComponentClass;