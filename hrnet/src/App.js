import './App.css';
import Home from './Pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './Pages/EmployeeList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employee-list' element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
