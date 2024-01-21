import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ImageData from './Compoenets/DataComponent';
import AppClass from './AppClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App imageDataProp={ImageData} />
    {/* change the above line - for interchaning between App and AppClass */}
    <AppClass imageDataProp={ImageData} />
  </>
);
