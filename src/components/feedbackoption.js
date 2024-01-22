import { Btns, BtnStats } from './feedbackapp.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Btns>
      {options.map(option => (
        <BtnStats key={option} onClick={() => onLeaveFeedback(option)}>
          {option[0].toUpperCase() + option.slice(1)}
        </BtnStats>
      ))}
    </Btns>
  );
};
