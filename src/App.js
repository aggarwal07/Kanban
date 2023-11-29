
import './App.css';
import Board from './Components/Board/Board';
import  Boarduser from './Components/Board2/Boarduser';
import Boardstat from './Components/Board3/Boardstat';

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar/>
      <Routes>
      <Route exact path='/Priority' element={<Board key="Priority"/>}></Route> 
      <Route exact path='/User' element={<Boarduser key="User"/>}></Route> 
      <Route exact path='/Status' element={<Boardstat key="Status"/>}></Route> 
      
      


      </Routes>
      </Router>
    </div>
  );
}

export default App;
