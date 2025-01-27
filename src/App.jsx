import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SectionArt from './pages/SectionArt';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/sectionArt" element={< SectionArt/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
