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
import AddProduct from './components/AddProduct/AddProduct';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/Shared/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import MyItems from './components/MyItems/MyItems';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/home' element= {<Home></Home>}></Route>
        <Route path='/blogs' element= {<Blogs></Blogs>}></Route>
        <Route path='/about' element= {<About></About>}></Route>
        <Route path='/myitem' element= {<MyItems></MyItems>}></Route>
        <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element= {<Register></Register>}></Route>

        <Route path='/order' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
      
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        
       <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
