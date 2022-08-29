import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
const MyList = ["Hi"]
const MyFunction = () => {
    const [inputValue, setInputValue] = useState('')
    const [List, setList] = useState(MyList)

    let navigate=useNavigate()
    const MyInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const AddingValue = (e) => {
        e.preventDefault()
        if (inputValue === '') {
            return
        }
        let concates=List.concat(inputValue)
        setList(concates)
        setInputValue('')
    }


    const RemoveValue = (e) => {
        e.preventDefault()
        const Remove = List.pop()
        setList(List)
        

    }

    return (
        <>          <h1> My Functional component</h1>
        <h2>To Go Back</h2>
        <button
        onClick={()=> navigate(-1)}>Go Back</button><br />
        <h2>To Go to next page</h2>
        <button
        onClick={()=> navigate('/ClassCom')}>Go Next page</button><br /><br />



         Type here :    <input
                value={inputValue}
                type="text"
                onChange={MyInputChange}
            />
            <br /><br />
            <br /><br />

            <button
                type="submit"
                onClick={AddingValue}
            >Click To Add</button><br /><br />

            <button
                type="submit"
                onClick={RemoveValue}
            >Click To Remove</button>

            <br />

            <ul>
                {List.map((el, index) => (
                    <li key={index}>
                        {el}
                    </li>
                ))}

            </ul>

        </>

    )






}
export default MyFunction;