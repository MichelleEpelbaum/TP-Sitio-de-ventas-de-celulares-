//import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Nosotros from "./pages/QuienesSomos.jsx";
import Productos from "./pages/Productos.jsx";

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/quienes-somos/" element={<Nosotros />}></Route>
        <Route path="/productos" element={<Productos />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
