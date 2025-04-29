import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';
import QuestionsScreen01 from '../views/QuestionsScreen01';
import QuestionsScreen02 from '../views/QuestionsScreen02';
import QuestionsScreen03 from '../views/QuestionsScreen03';
import QuestionsScreen04 from '../views/QuestionsScreen04';
import QuestionsScreen05 from '../views/QuestionsScreen05';
import Submit from '../views/Submit';

import NextBack from '../components/NextBack';
import StartRep from '../components/StartRep';

const Stack = createStackNavigator();

export default props => {
  const [answers, setAnswers] = useState({
    Social: { totalSelected: 0, totalMax: 0 },
    Ambiental: { totalSelected: 0, totalMax: 0 },
    Governança: { totalSelected: 0, totalMax: 0 }
  });

  const handleAnswer = (response, weight, category, maxWeight) => {
    setAnswers(prev => {
      const updated = { ...prev };
      updated[category].totalSelected += weight;
      updated[category].totalMax += maxWeight;
      return updated;
    });
  };

  return (
    <Stack.Navigator initialRouteName="Home">

      {/* Home screen */}
      <Stack.Screen name="Home" options={{ title: "Home" }}>
        {props => (
          <StartRep {...props} next="QuestionsScreen01">
            <Home />
          </StartRep>
        )}
      </Stack.Screen>

      {/* Questions screen 01 */}
      <Stack.Screen name="QuestionsScreen01" options={{ title: "Answer the questions" }}>
        {props => (
          <NextBack {...props} next="QuestionsScreen02">
            <QuestionsScreen01 onAnswer={handleAnswer} answers={answers} />
          </NextBack>
        )}
      </Stack.Screen>

      {/* Questions screen 02 */}
      <Stack.Screen name="QuestionsScreen02" options={{ title: "Answer the questions" }}>
        {props => (
          <NextBack {...props} next="QuestionsScreen03">
            <QuestionsScreen02 onAnswer={handleAnswer} answers={answers} />
          </NextBack>
        )}
      </Stack.Screen>

      {/* Questions screen 03 */}
      <Stack.Screen name="QuestionsScreen03" options={{ title: "Answer the questions" }}>
        {props => (
          <NextBack {...props} next="QuestionsScreen04">
            <QuestionsScreen03 onAnswer={handleAnswer} answers={answers} />
          </NextBack>
        )}
      </Stack.Screen>

      {/* Questions screen 04 */}
      <Stack.Screen name="QuestionsScreen04" options={{ title: "Answer the questions" }}>
        {props => (
          <NextBack {...props} next="QuestionsScreen05">
            <QuestionsScreen04 onAnswer={handleAnswer} answers={answers} />
          </NextBack>
        )}
      </Stack.Screen>

      {/* Questions screen 05 */}
      <Stack.Screen name="QuestionsScreen05" options={{ title: "Answer the questions" }}>
        {props => (
          <NextBack {...props} submit="Submit">
            <QuestionsScreen05 onAnswer={handleAnswer} answers={answers} />
          </NextBack>
        )}
      </Stack.Screen>

      {/* Submit screen */}
      <Stack.Screen name="Submit" options={{ title: "Done" }}>
        {props => (
          <Submit {...props} answers={answers} />
        )}
      </Stack.Screen>

    </Stack.Navigator>
  );
};
