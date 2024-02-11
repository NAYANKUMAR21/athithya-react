import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ClassCOmp from './ClassCOmp.jsx';
import Rendering from './Rendering.jsx';
import KalviumNote from './KalviumNote.jsx';
import Crousel from './Crousel.jsx';
import QuizQuestion from './Quiz/Question.jsx';
import Hook2Context from './Hooks/Hook2Context.jsx';
import AppContextProvider from './Hooks/SetupContext.jsx';
import Z from './Hooks/Z.jsx';
import Y from './Hooks/Y.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <Y />
  </AppContextProvider>
);
