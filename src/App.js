import StuCreate from './pages/StuCreate';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import GetStudent from './pages/GetStudent';
import Update from './pages/Update';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/addStudent' element={<StuCreate/>}/>
      <Route exact path='/getStudent' element={<GetStudent/>}/>
     
      <Route exact path='/update/:id' element={<Update/>}/>
      <Route exact path='/search' element={<Search/>}/>

   


    </Routes>
   </Router>
    </div>
  );
}

export default App;
