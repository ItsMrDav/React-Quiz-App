import { useState } from 'react';
import Results from './results';

const questionBank = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'London', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Which language is used for web apps?',
    options: ['PHP', 'Python', 'Javascript', 'All'],
    answer: 'All',
  },
  {
    question: 'What does JSX stand for?',
    options: [
      'JavaScript XML',
      'Java Syntax Extension',
      'Just a Simple Example',
      'None of the above',
    ],
    answer: 'JavaScript XML',
  },
];

const initialAnswers = [null, null, null];

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const selectedAnswer = userAnswers[currentQuestion];

  function handleSelectOption(option) {
    setUserAnswers(prev => {
      const copy = [...prev];
      copy[currentQuestion] = option;
      return copy;
    });
  }

  function goToNext() {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
    }
    setCurrentQuestion(prev => prev + 1);
  }

  function goToPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  }

  function restartQuiz() {
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  if (isQuizFinished) {
    return (
      <Results
        questionBank={questionBank}
        userAnswers={userAnswers}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div>
      <h2> Question {currentQuestion + 1}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map(option => (
        <button
          key={option}
          className={`option ${selectedAnswer === option ? 'selected' : ''}`}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <p>Option Selected: {userAnswers[currentQuestion]}</p>

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === questionBank.length - 1 ? 'Finish Quiz' : 'Next'}
        </button>
      </div>
    </div>
  );
}
