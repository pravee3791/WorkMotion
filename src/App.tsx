import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home";
import Employee from "./pages/employee";
import Menu from "./components/menu/menu";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
