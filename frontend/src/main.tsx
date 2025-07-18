import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from './pages/Login.tsx';
import { Register } from './pages/Register.tsx';
import { Product } from './pages/Product.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:productID" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
