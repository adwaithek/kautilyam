import './App.css';
import  Add from './components/Add'
import Home from './components/Home'

import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={  <Home/>}   />
          <Route path='/add' element={ <Add/>}   />
       
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
