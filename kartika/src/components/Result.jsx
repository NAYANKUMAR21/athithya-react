import React from 'react';
import { useContext } from 'react';
import { generatecontext } from './Statecomponent';
import '../App.css';

export default function Result({ score }) {
  // console.log(marks, 'marks');

  return (
    <div>
      (
      <div className="body1">
        <p className="resulttitle">Your Score</p>
        <h1 className="percent">{score * 20}%</h1>
        <p className="numberof">Number of correct answers: {score}</p>
        <p className="wrong">Number of wrong answers: {5 - score}</p>
      </div>
      )
    </div>
  );
}
