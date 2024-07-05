import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const SettingsScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put('http://your-backend-url/user', {
        username,
        password,
      });
      console.log('User updated:', response.data);
      // Handle success, navigate to next screen, etc.
    } catch (error) {
      console.error('Failed to update user:', error);
      // Show error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <Text>Update Settings</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default SettingsScreen;
