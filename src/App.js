import { Route, Routes } from 'react-router-dom';
import Style from  './App.module.scss';
import Register from './Components/RegisterPage/Register';
import Home from './Components/page/Home';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
    </div>
  );
}

export default App;
