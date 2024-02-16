import React, { useState } from 'react';
import { Link } from 'react-router-dom';
let QuestionsArray = [
  {
    question: 'What temperature does water boil at?',
    optionA: '50 degrees Celcius',
    optionB: '25 degrees Celcius',
    optionC: '100 degrees Celcius',
    optionD: '150 degrees Celcius',
    answer: '100 degrees Celcius',
  },

  {
    question: 'Who wrote Julius Caesar, Macbeth and Hamlet?',
    optionA: 'Wole Soyinka',
    optionB: 'William Shakespeare',
    optionC: 'Ngozi Chimamanda Adichie',
    optionD: 'Dan Brown',
    answer: 'William Shakespeare',
  },

  {
    question: 'What did the crocodile swallow in Peter Pan?',
    optionA: 'A Book',
    optionB: 'A Computer',
    optionC: 'A pair of shoes',
    optionD: 'Alarm Clock',
    answer: 'Alarm Clock',
  },

  {
    question: 'Which is the only mammal that can’t jump?',
    optionA: 'Dog',
    optionB: 'Elephant',
    optionC: 'Goat',
    optionD: 'Lion',
    answer: 'Elephant',
  },

  {
    question: 'Who lived at 221B, Baker Street, London?',
    optionA: 'Tony Stark',
    optionB: 'Morgan Freeman',
    optionC: 'Sherlock Holmes',
    optionD: 'Samuel L. Jackson',
    answer: 'Sherlock Holmes',
  },

  {
    question: 'What colour is a panda?',
    optionA: 'Green and Yellow',
    optionB: 'Blue and Red',
    optionC: 'Green and White',
    optionD: 'Black and White',
    answer: 'Black and White',
  },

  {
    question: 'Where is the smallest bone in the human body?',
    optionA: 'The Chest',
    optionB: 'The Ear',
    optionC: 'The Legs',
    optionD: 'The Hands',
    answer: 'The Ear',
  },

  {
    question: 'What does the roman numeral C represent?',
    optionA: '100',
    optionB: '10',
    optionC: '10,000',
    optionD: '1,000,000',
    answer: '100',
  },

  {
    question: "What takes place in Hong Kong's Happy Valley?",
    optionA: 'Chicken Wrestling',
    optionB: 'Horse racing',
    optionC: 'Street Racing',
    optionD: 'Arm Wrestling',
    answer: 'Horse racing',
  },

  {
    question: 'Who painted the Mona Lisa?',
    optionA: 'Alexander Graham Bell',
    optionB: 'Sir Isaac Newton',
    optionC: 'Leonardo Da Vinci',
    optionD: 'Albert Einstein',
    answer: 'Leonardo Da Vinci',
  },

  {
    question: 'What’s the most important book in the Moslem religion?',
    optionA: 'The Koran',
    optionB: 'The Dictionary',
    optionC: 'The Bible',
    optionD: 'The Chemistry text Book',
    answer: 'The Koran',
  },

  {
    question: 'What’s the capital of Ethiopia?',
    optionA: 'Cape Town',
    optionB: 'San Francisco',
    optionC: 'Abuja',
    optionD: 'Syndey',
    answer: 'Addis Ababa',
  },

  {
    question: 'How many squares are there on a chess board?',
    optionA: '128',
    optionB: '64',
    optionC: '32',
    optionD: '256',
    answer: '64',
  },

  {
    question: 'Who invented the electric light bulb?',
    optionA: 'Tom Cruise',
    optionB: 'Barack Obama',
    optionC: 'Wole Soyinka',
    optionD: 'Thomas Edison',
    answer: 'Thomas Edison',
  },

  {
    question: 'What are the first three words of the bible?',
    optionA: 'be with everyone',
    optionB: 'Again Jesus asked',
    optionC: 'In the beginning',
    optionD: 'At that time',
    answer: 'In the beginning',
  },
];
function Questions() {
  const [state, SetState] = useState(0);
  const EachQuestion = QuestionsArray[state].question;
  let optionA = QuestionsArray[state].optionA;
  let optionB = QuestionsArray[state].optionB;
  let optionC = QuestionsArray[state].optionC;
  let optionD = QuestionsArray[state].optionD;
  const handleNext = () => {
    console.log(state);
    if (state == QuestionsArray.length - 1) {
      return SetState(0);
    }
    SetState(state + 1);
  };
  const handlePrev = () => {
    if (state == 0) {
      return SetState(QuestionsArray.length - 1);
    }
    SetState(state - 1);
  };

  const handleQuit = () => {
    alert('Are you sure you want to quit?');
  };
  return (
    <div>
      <div>
        <div>{EachQuestion}</div>
        <div>{optionA}</div>
        <div>{optionB}</div>
        <div>{optionC}</div>
        <div>{optionD}</div>
      </div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleQuit}>Quit</button>
        <button>
          <Link to="/final">Finish</Link>
        </button>
      </div>
    </div>
  );
}

export default Questions;
