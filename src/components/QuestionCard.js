import React from 'react';
import { Card, CardContent, Typography, Button, RadioGroup, Radio, FormControlLabel } from '@mui/material';

const QuestionCard = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
    setSelectedOption('');
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{question.text}</Typography>
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          {question.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
        <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!selectedOption}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;