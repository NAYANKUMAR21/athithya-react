import React, { Component } from 'react';
const Questions = [
  {
    question: 'What is the capital of France?',
    op1: 'London',
    op2: 'Berlin',
    op3: 'Paris',
    op4: 'Rome',
    answer: 'Paris',
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    op1: 'London',
    op2: 'Berlin',
    op3: 'Paris',
    op4: 'Rome',

    answer: 'Harper Lee',
  },
  {
    question: 'What is the chemical symbol for water?',
    op1: 'London',
    op2: 'Berlin',
    op3: 'Paris',
    op4: 'Rome',
    answer: 'H2O',
  },
  {
    question: 'Who painted the Mona Lisa?',
    op1: 'London',
    op2: 'Berlin',
    op3: 'Paris',
    op4: 'Rome',
    answer: 'Leonardo da Vinci',
  },
];

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    let eachQuestion = Questions[this.state.index];
    return (
      <div>
        <div>{eachQuestion.question}</div>
        <button>{eachQuestion.op1}</button>
        <button>{eachQuestion.op2}</button>
        <button>{eachQuestion.op3}</button>
        <button>{eachQuestion.op4}</button>
        <button>{eachQuestion.answer}</button>
        <div>
          <button
            onClick={() => {
              if (this.state.index == 0) {
                return;
              }
              this.setState({ index: this.state.index - 1 });
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (this.state.index == Questions.length - 1) {
                return;
              }
              this.setState({ index: this.state.index + 1 });
            }}
          >
            Next
          </button>
          <button
            onClick={() => {
              alert('Are you sure you want to quit!..');
            }}
          >
            Quit
          </button>
        </div>
      </div>
    );
  }
}
export default QuizQuestion;
