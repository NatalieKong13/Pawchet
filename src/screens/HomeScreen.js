import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Pet Care</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Your Pets</Title>
          <Paragraph>
            You haven't added any pets yet. Add your first pet to get started!
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Add Pet</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Today's Activities</Title>
          <Paragraph>No activities scheduled for today.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Add Activity</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Social Feed</Title>
          <Paragraph>
            Connect with other pet owners to see their updates.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Explore</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default HomeScreen;
