
import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from './components/main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { CheckUserExist } from '../src/helper/helper';

function App() {
  return (
    <div className="App">
    <Routes>
       <Route path ='/'  element ={<Main/>} ></Route>
       <Route  path='/quiz' element={<CheckUserExist><Quiz /></CheckUserExist>}></Route>
       <Route path ='/result' element ={<CheckUserExist><Result /></CheckUserExist>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
