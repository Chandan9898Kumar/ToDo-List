import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
const MyList = []
const MyFunction = () => {
    const [inputValue, setInputValue] = useState('')
    const [Lists, setLists] = useState(MyList)
    // const [NewList, setNewList] = useState('')

    let navigate = useNavigate()
    const MyInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const AddingValue = (e) => {
        e.preventDefault()
        if (inputValue === '') {
            return
        }
        // let concates = Lists.concat(inputValue)
        // setLists(concates)
        // setInputValue('')

        //    OR  

        setLists([...Lists, inputValue])
        setInputValue('')

    }


    const RemoveValue = (e) => {
        e.preventDefault()
        if (Lists.length === 0) {
            return
        }

        // const Remove = Lists.pop()
        // setNewList(Remove)

        //    OR  
        var newObj = Object.assign([], Lists)
        newObj.splice(-1)
        setLists(newObj)

    }

    return (
        <>          <h1> My Functional component</h1>
            <h2>To Go Back</h2>
            <button
                onClick={() => navigate(-1)}>Go Back</button><br />
            <h2>To Go to next page</h2>
            <button
                onClick={() => navigate('/ClassCom')}>Go Next page</button><br /><br />



            Type here :    <input
                value={inputValue}
                type="text"
                onChange={MyInputChange}
            />

            <button
                type="submit"
                onClick={AddingValue}
            >Click To Add</button>
            <button
                type="submit"
                onClick={RemoveValue}
            >Click To Remove</button>

            <ul>
                {Lists.map((el, index) => (
                    <li key={index}>
                        {el}

                    </li>
                ))}

            </ul>

        </>

    )






}
export default MyFunction;