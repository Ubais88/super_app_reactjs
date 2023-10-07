import { Route, Routes } from 'react-router-dom';
import Register from './Components/RegisterPage/Register';
import Home from './Components/HomePage/Home';
import "./App.css"
import ProfilePage from './Components/ProfilePage/ProfilePage';

const App = () => {
  return (
    <div className='app'>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<ProfilePage/>} />
        </Routes>
    </div>
  );
}

export default App;
