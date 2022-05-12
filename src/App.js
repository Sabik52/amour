import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';

import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Order from './components/Orders/Order';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import ProductDetails from './components/ProductDetail/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/home' element= {<Home></Home>}></Route>
        <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element= {<Register></Register>}></Route>
        <Route path='/order' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        
      </Routes>
    </div>
  );
}

export default App;
