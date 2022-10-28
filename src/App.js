import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div>
     <Routes>
       <Route exact path='/'element={<Dashboard/>} />
     </Routes>
    </div>
    </BrowserRouter>
   </div>
  );
}

export default App;
