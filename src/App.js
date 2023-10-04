import { Route, Routes } from 'react-router-dom';
import Register from './Components/RegisterPage/Register';
import Home from './Components/HomePage/Home';
import Page from './Components/thirdpage/Page';
import "./App.css"

const App = () => {
  return (
    <div className='app'>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/page' element={<Page/>} />
        </Routes>
    </div>
  );
}

export default App;
