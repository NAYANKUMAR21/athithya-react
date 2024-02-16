import React from 'react';
import { Link } from 'react-router-dom';

function Playbtn() {
  return (
    <div>
      <button>
        <Link to="/questions">Play</Link>
      </button>
    </div>
  );
}

export default Playbtn;
