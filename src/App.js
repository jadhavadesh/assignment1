
import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import FirstQue from './component/FirstQue';
import SecondQue from './component/SecondQue';


function App() {

 
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<FirstQue />} />
    <Route path='/second' element={<SecondQue />} />
  </Routes>
  </BrowserRouter>
  
    
    </div>
  );
}

export default App;
