import React, { useState } from 'react';
import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import questions from './data/questions';
import characters from './data/characters';
import scoreCalculator from './utils/scoreCalculator';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);
    if (currentQuestion === questions.length - 1) {
      const predominantPersonality = scoreCalculator(selectedAnswers);
      setResult(characters.find((character) => character.personality === predominantPersonality));
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <Header />
      {result ? (
        <ResultCard result={result} />
      ) : (
        <QuestionCard
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;