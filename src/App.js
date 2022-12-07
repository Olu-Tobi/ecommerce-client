
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";

import Cart from "./pages/Cart";
import Login from "./pages/Login";

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import styled from "styled-components"
import Success from './pages/Success'
import { useSelector } from "react-redux";

const Container = styled.div`
`


function App() {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Container>
      <Router>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/products/:category" element = {<ProductList/>}/>
            <Route path = "/product/:id" element = {<Product/>}/>
            <Route path = "/cart" element = {<Cart/>}/>
            <Route path="/success" element = {<Success/>}/>
            <Route path = "/login" element = {user ? <Navigate to ="/"/> : <Login/>}/>
            <Route path = "/register" element = {user ? <Navigate to ="/"/> : <Register/>}/>
        </Routes>
    </Router>
    </Container>
  );
    
    
}

export default App;
