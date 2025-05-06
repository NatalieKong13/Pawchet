import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Card, Divider } from "react-native-paper";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Icon size={80} icon="account" />
        <Text style={styles.name}>User Name</Text>
        <Text style={styles.email}>user@example.com</Text>
        <Button mode="outlined" style={styles.editButton}>
          Edit Profile
        </Button>
      </View>

      <Divider style={styles.divider} />

      <Text style={styles.sectionTitle}>My Pets</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Text>No pets added yet.</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Add Pet</Button>
        </Card.Actions>
      </Card>

      <Text style={styles.sectionTitle}>Recent Activities</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Text>No recent activities.</Text>
        </Card.Content>
      </Card>

      <Button
        mode="outlined"
        style={styles.logoutButton}
        onPress={() => console.log("Logout pressed")}
      >
        Logout
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginVertical: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  editButton: {
    marginTop: 8,
  },
  divider: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  card: {
    marginBottom: 16,
  },
  logoutButton: {
    marginVertical: 16,
  },
});

export default ProfileScreen;
