import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


ReactDOM.render(
  <BrowserRouter>
     <Navbar/>
    <App />
    <Footer/>
  </BrowserRouter>,
  document.getElementById("root")
);