import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Question = ({ question, responses, category, onAnswer }) => {
  const [selectedResponse, setSelectedResponse] = useState(responses[0]); // agora é o primeiro item correto

  const weights = responses.length === 2 ? [0, 1] : [0, 1, 2, 3, 4]; // só calculado dentro

  const handleSelect = (itemValue) => {
    setSelectedResponse(itemValue);
    const index = responses.indexOf(itemValue);
    const weight = weights[index];
    const maxWeight = Math.max(...weights);

    onAnswer && onAnswer(itemValue, weight, category, maxWeight);
  };

  return (
    <View style={{ marginVertical: 10, padding: 10 }}>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>{question}</Text>
      <Picker
        selectedValue={selectedResponse}
        onValueChange={(itemValue) => handleSelect(itemValue)}
      >
        {responses.map((response, index) => (
          <Picker.Item key={index} label={response} value={response} />
        ))}
      </Picker>
    </View>
  );
};

export default Question;
