const scoreCalculator = (selectedAnswers) => {
    const scores = {
      pragmatic: 0,
      conservative: 0,
      visionary: 0,
      ambitious: 0,
    };
  
    selectedAnswers.forEach((answer) => {
      scores[answer]++;
    });
  
    const maxScore = Math.max(...Object.values(scores));
    const predominantPersonality = Object.keys(scores).find((key) => scores[key] === maxScore);
  
    return predominantPersonality;
  };
  
  export default scoreCalculator;
  