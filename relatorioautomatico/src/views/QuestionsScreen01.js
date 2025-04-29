import React from 'react';
import { View, ScrollView } from 'react-native';
import Question from '../components/Question';

export default ({ onAnswer, answers }) => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Question
        question="Does your company define its ESG stakeholders (those parties who have the potential to influence or be affected by the business)?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        weights={[0, 1, 2, 3, 4]}
        category="Social"
        onAnswer={onAnswer}
      />

      <Question
        question="Does your company communicate periodically with stakeholders?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        weights={[0, 1, 2, 3, 4]}
        category="Social"
        onAnswer={onAnswer}
      />

      <Question
        question="Does your company use social media to communicate with stakeholders?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        weights={[0, 1, 2, 3, 4]}
        category="Social"
        onAnswer={onAnswer}
      />

      <Question
        question="Does your company have a strategy (at least for one year forward) to communicate with stakeholders?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        weights={[0, 1, 2, 3, 4]}
        category="Social"
        onAnswer={onAnswer}
      />

      <Question
        question="Does your company receive feedback from stakeholders?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        weights={[0, 1, 2, 3, 4]}
        category="Social"
        onAnswer={onAnswer}
      />
    </ScrollView>
  );
};
