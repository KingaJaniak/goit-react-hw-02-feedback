import { useState } from 'react';
import {
  Btns,
  BtnStats,
  Title,
  Stats,
  TextP,
  Widget,
  FeedbackArea,
} from './stats.styled';
const FeedbackApp = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleFeedback = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeed = countTotalFeedback();
    return totalFeed === 0 ? 0 : (state.good / totalFeed) * 100;
  };
  return (
    <Widget>
      <FeedbackArea>
        <Title>Please leave feedback</Title>
        <Btns>
          <BtnStats onClick={() => handleFeedback('good')}>Good</BtnStats>
          <BtnStats onClick={() => handleFeedback('neutral')}>Neutral</BtnStats>
          <BtnStats onClick={() => handleFeedback('bad')}>Bad</BtnStats>
        </Btns>
        <Title>Statistics:</Title>
        <Stats>
          <TextP>Good: {state.good}</TextP>
          <TextP>Neutral: {state.neutral}</TextP>
          <TextP>Bad: {state.bad}</TextP>
          <TextP>Total: {countTotalFeedback()}</TextP>
          <TextP>
            Good total feedback: {countPositiveFeedbackPercentage()}%
          </TextP>
        </Stats>
      </FeedbackArea>
    </Widget>
  );
};

export default FeedbackApp;
