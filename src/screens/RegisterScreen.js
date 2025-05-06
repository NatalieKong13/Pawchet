import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join the pet care community</Text>

      <TextInput
        label="Name"
        mode="outlined"
        style={styles.input}
        placeholder="Your name"
      />

      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        placeholder="your@email.com"
      />

      <TextInput
        label="Password"
        mode="outlined"
        style={styles.input}
        secureTextEntry
        placeholder="********"
      />

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Register pressed")}
      >
        Register
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    marginBottom: 16,
  },
  link: {
    textAlign: "center",
    color: "#007BFF",
    marginTop: 16,
  },
});

export default RegisterScreen;
