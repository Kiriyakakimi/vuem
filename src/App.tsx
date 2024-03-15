import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trangchu from './page/trangchu';
import Login from './page/login';
import Register from './page/register';
import All from './page/all';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Trangchu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/all' element = {<All/>} />
      </Routes>
    </Router>
  );
};

export default App;