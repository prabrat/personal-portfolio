import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

import Home from './home.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component ={Home}/> 
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
