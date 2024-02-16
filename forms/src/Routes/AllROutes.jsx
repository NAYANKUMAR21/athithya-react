import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProT from '../Protips/contacts';

import FormCustom from '../Components/CustomeValidation';

function AllROutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/registerform" element={<ProT />} />
      <Route path="/contacts" element={<FormCustom />} />
    </Routes>
  );
}

export default AllROutes;
