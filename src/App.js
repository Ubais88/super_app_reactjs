import { Route, Routes } from 'react-router-dom';
import Register from './Components/RegisterPage/Register';
import Home from './Components/HomePage/Home';
import "./App.css"
import Dashboard from './Components/ProfilePage/Dashboard';
import Movies from './Components/Movielist/Movies';

const App = () => {
  return (
    <div className='app'>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Home/>} />
          {/* <Route path='/profile' element={<Dashboard/>} /> */}
          {/* <Route path='/movies' element={<Movies/>} /> */}
        </Routes>
    </div>
  );
}

export default App;
