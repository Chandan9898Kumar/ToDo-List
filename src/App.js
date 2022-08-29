
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MyHome from './Home/HomeFile'
import MyFunction from './WorkingRepo/Functional'
import MyClassCom from './WorkingRepo/ClassCompo';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
    <Route exact path='/'               element={<MyHome />}   />
    <Route exact path='/Function'               element={<MyFunction />}   />

    <Route exact path='/ClassCom'               element={<MyClassCom />}   />




    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
