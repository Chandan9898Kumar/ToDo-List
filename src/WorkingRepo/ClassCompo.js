import React from "react"
const list = ["hello", "hi"]
class MyClassCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            MyList: list

        }
    }

    MyInputChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }
    ClickHanlde = (e) => {
        const { inputValue, MyList } = this.state
        e.preventDefault()
        if (inputValue === "") {
            return
        }
        this.setState({
            MyList: MyList.concat(inputValue),
            inputValue: ''
        })

    }


    HandleClick = (e) => {
        const { MyList } = this.state
        e.preventDefault()
        if (MyList.length === 0) {
            return
        }
        const remove = MyList.pop()
        this.setState({
            MyList: MyList
        })

    }


    render() {

        const { inputValue, MyList } = this.state
        return (

            <>
                    <h1>Class component</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={this.MyInputChange}
                />
                <br /><br />
                <button
                    type="submit"
                    onClick={this.ClickHanlde}
                >Click To Add</button>
                <br /><br />
                <button
                    type="submit"
                    onClick={this.HandleClick}
                >Remove items</button>






                <ul>
                    {MyList.map((el) => (
                        <li>

                            {el}

                        </li>
                    ))}




                </ul>




            </>











        )









    }













}
export default MyClassCom;