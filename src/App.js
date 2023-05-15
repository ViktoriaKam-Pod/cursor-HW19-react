
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Galery from './pages/galery/Galery';
import Publications from './pages/publications/Publications';
import Home from './pages/home/Home';
import Contacts from './pages/contacts/Contacts';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='galery' element={<Galery/>}/>
        <Route path='publications' element={<Publications/>}/>
        <Route path='contacts' element={<Contacts/>}/>
        <Route index element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
