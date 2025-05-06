import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Care App</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

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
        onPress={() => console.log("Login pressed")}
      >
        Login
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Don't have an account? Register here</Text>
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

export default LoginScreen;
