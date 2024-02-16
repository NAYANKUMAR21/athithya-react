import React from 'react';
import AllROutes from './Routes/AllROutes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div id="left">
          <Link to="/">Kalvium</Link>
        </div>
        <div id="right">
          <Link to="/contacts">
            <span>Contacts</span>
          </Link>
          <Link to="/registerform">
            <span>Register form</span>
          </Link>
        </div>
      </nav>
      <AllROutes />
    </div>
  );
}

export default App;
