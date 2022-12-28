import React, { useState } from 'react';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setFeedbackGood] = useState(0);
  const [neutral, setFeedbackNeutral] = useState(0);
  const [bad, setFeedbackBad] = useState(0);

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  const countPositiveFeedbackPercentage = () => {
    const PositiveFeedbackPercentage = (good / countTotalFeedback()) * 100;

    return Math.round(PositiveFeedbackPercentage);
  };

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        const newGood = good + 1;
        setFeedbackGood(newGood);
        break;
      case 'neutral':
        const newNeutral = neutral + 1;
        setFeedbackNeutral(newNeutral);
        break;
      case 'bad':
        const newBad = bad + 1;
        setFeedbackBad(newBad);
        break;
      default:
        alert('Something went wrong');
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {good > 0 || bad > 0 || neutral > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
