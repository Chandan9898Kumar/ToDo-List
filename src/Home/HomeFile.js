import React from "react"
import { NavLink } from "react-router-dom";
const MyHome = () => {

    return (
        <>

            <h1> Home Page </h1><br /><br /><br /><br />

            <NavLink to='/Function'>Functional Component</NavLink><br /><br />
            <NavLink to='/ClassCom'>Class Component</NavLink><br /><br />
            <NavLink to='/FunctionalTodo'>FunctionalTodo</NavLink><br /><br />
            <NavLink to='/MyClassToDo'>MyClassToDo</NavLink><br /><br />
            <NavLink to='/MainComponent'>ToDo with Functional</NavLink><br /><br />
            <NavLink to='/MainClassComponent'>ToDo With Class</NavLink>

        </>


    )

}
export default MyHome;