import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { List, Switch, Divider, Text, Button } from "react-native-paper";

const SettingsScreen = () => {
  const [pushNotifications, setPushNotifications] = React.useState(true);
  const [emailNotifications, setEmailNotifications] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [locationSharing, setLocationSharing] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <List.Section>
        <List.Subheader>Notifications</List.Subheader>
        <List.Item
          title="Push Notifications"
          right={() => (
            <Switch
              value={pushNotifications}
              onValueChange={setPushNotifications}
            />
          )}
        />
        <List.Item
          title="Email Notifications"
          right={() => (
            <Switch
              value={emailNotifications}
              onValueChange={setEmailNotifications}
            />
          )}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <List.Subheader>App Preferences</List.Subheader>
        <List.Item
          title="Dark Mode"
          right={() => <Switch value={darkMode} onValueChange={setDarkMode} />}
        />
        <List.Item
          title="Location Sharing"
          right={() => (
            <Switch
              value={locationSharing}
              onValueChange={setLocationSharing}
            />
          )}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <List.Subheader>Account</List.Subheader>
        <List.Item
          title="Change Password"
          left={(props) => <List.Icon {...props} icon="lock" />}
          onPress={() => console.log("Change password")}
        />
        <List.Item
          title="Privacy Policy"
          left={(props) => <List.Icon {...props} icon="shield" />}
          onPress={() => console.log("Privacy policy")}
        />
        <List.Item
          title="Terms of Service"
          left={(props) => <List.Icon {...props} icon="file-document" />}
          onPress={() => console.log("Terms of service")}
        />
      </List.Section>

      <Button
        mode="outlined"
        color="red"
        style={styles.dangerButton}
        onPress={() => console.log("Delete account")}
      >
        Delete Account
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
  },
  dangerButton: {
    margin: 16,
    borderColor: "red",
  },
});

export default SettingsScreen;
