import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trangchu from './page/trangchu';
import Login from './page/login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Trangchu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;