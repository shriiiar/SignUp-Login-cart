import './App.css';
import Header from './Components/Header/Header';
import LoadGames from './Components/Load Games/LoadGames';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Signup from './Components/Sign Up/Signup';
import ErrorRoute from './Components/Error-Route/ErrorRoute';
import CheckOut from './Components/CheckOut/CheckOut';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<LoadGames></LoadGames>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='checkout' element={<RequiredAuth>
          <CheckOut></CheckOut>
        </RequiredAuth>}></Route>
        <Route path='*' element={<ErrorRoute></ErrorRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
