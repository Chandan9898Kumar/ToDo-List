
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHome from './Home/HomeFile'
import MyFunction from './WorkingRepo/Functional'
import MyClassCom from './WorkingRepo/ClassCompo';
import MyfunctionsToDo from './NewToDoWithCrude/TodoWithFunction';
import MyClassToDo from './NewToDoWithCrude/TodoWithClass';
import MainComponent from './ToWithFunctionalComponent/MainComponent';
import MainComponentClass from './TodoClassComponent/MainClass'
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MyHome />} />
          <Route exact path='/Function' element={<MyFunction />} />
          <Route exact path='/ClassCom' element={<MyClassCom />} />
          <Route exact path='/FunctionalTodo' element={<MyfunctionsToDo />} />
          <Route exact path='/MyClassToDo' element={<MyClassToDo />} />
          <Route exact path='/MainComponent' element={<MainComponent />} />
          <Route exact path='/MainClassComponent' element={<MainComponentClass />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
