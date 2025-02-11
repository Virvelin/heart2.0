import React, { useState } from 'react';
import { View, Text, TextInput, Button, Keyboard, StyleSheet } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

  const calculateHeartRateLimits = () => {
    const ageNum = Number(age.trim());

    if (!age || isNaN(ageNum) || ageNum <= 0) {
      alert('Please enter a valid age');
      return;
    }

    const lower = (220 - ageNum) * 0.65;
    const upper = (220 - ageNum) * 0.85;

    setLowerLimit(lower.toFixed(1));
    setUpperLimit(upper.toFixed(1));

    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
        placeholderTextColor="#C0C0C0"
      />

      <Button title="Calculate" onPress={calculateHeartRateLimits} />

      {lowerLimit && upperLimit && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Lower Limit: {lowerLimit} bpm</Text>
          <Text style={styles.resultText}>Upper Limit: {upperLimit} bpm</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
    justifyContent: 'flex-start',
    backgroundColor: '#FF69B4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#C0C0C0',
    textShadowColor: 'rgba(192, 192, 192, 0.9)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ddd',
    fontSize: 18,
    color: '#C0C0C0',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#C0C0C0',
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
