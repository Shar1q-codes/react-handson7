import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Students from './Components/Students';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import AddStudent from './Components/AddStudent';
import Edit from './Components/Edit';
import Data from './Components/Data';



function App() {
  return (
    <Data>
    <div className="App">
<BrowserRouter>
<NavBar/>
<Routes>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/Students" element={<Students/>}/>
  <Route path="/Contact" element={<Contact/>}/>
 <Route path = "/Edit/:id" element={<Edit/>}/>
 <Route path = "/AddStudent" element={<AddStudent/>}/>
</Routes>
</BrowserRouter>

    </div>
    </Data>
  );
}

export default App;
