import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Videos from "./components/videos";
import Upload from "./components/upload";
import Footer from "./components/footer";
import Signup from './components/signup';
import Login from './components/login';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Videos' element={<Videos />} />
          <Route path='/Upload' element={<Upload />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
