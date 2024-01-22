import { Stats, TextP } from './feedbackapp.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Stats>
      <TextP>Good: {good}</TextP>
      <TextP>Neutral: {neutral}</TextP>
      <TextP>Bad: {bad}</TextP>
      <TextP>Total: {total}</TextP>
      <TextP>Good total feedback: {positivePercentage}%</TextP>
    </Stats>
  );
};
