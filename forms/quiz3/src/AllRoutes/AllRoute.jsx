import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Playbtn from '../Components/Playbtn';
import Questions from '../Components/Questions';

function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Playbtn />} />
      <Route path="/questions" element={<Questions />}></Route>
      <Route path="/final" element={<h1>Result</h1>} />
    </Routes>
  );
}

export default AllRoute;
