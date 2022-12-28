import React from 'react';
import css from 'components/FeedbackOptions/FeedBackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.buttonDiv}>
      <button
        className={css.buttonGood}
        onClick={ev => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={css.buttonNeutral}
        onClick={ev => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={css.buttonBad} onClick={ev => onLeaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
