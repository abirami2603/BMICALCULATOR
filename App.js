import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = parseFloat(height) / 100;
      const calculatedBMI = (parseFloat(weight) / (heightInMeters ** 2)).toFixed(2);
      setBmi(calculatedBMI);
    } else {
      setBmi("Invalid input");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Calculate BMI" onPress={calculateBMI} />
      {bmi && <Text style={styles.result}>Your BMI: {bmi}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
