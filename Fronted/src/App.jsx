import {  Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import AddProduct from "./Pages/AddProduct";
import NotFoundPage from "./Pages/NoteFoundPage";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

function App() {


  return (
    <>
    <Header/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/AddProduct" element={<AddProduct/>}/>
    <Route path="/PrdouctDetails" element={<ProductDetails/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
