import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import Apply from './Pages/Apply';
import Modal from './Pages/Modal';
import StudentPage from './Pages/StudentPage';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/modal' element={<Modal />} />
        <Route path='/studentpage' element={<StudentPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
