import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { updateUsername, updatePassword } from '../services/apiService';

const SettingsScreen = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdateUsername = async () => {
    try {
      await updateUsername(firstname, lastname);
      alert('Username updated successfully');
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  }

  const handleUpdatePassword = async () => {
    try {
      await updatePassword(password);
      alert('Password updated successfully');
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
        placeholder="First Name"
        value={firstname}
        onChangeText={setFirstName}
      />
      <TextInput
        style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
        placeholder="Last Name"
        value={lastname}
        onChangeText={setLastName}
      />
      <Button mode="contained" onPress={handleUpdateUsername} style={{ marginBottom: 10 }}>
        Update Username
      </Button>
      <TextInput
        style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
        placeholder="Confirm Password"
        secureTextEntry
      />

      <Button mode="contained" onPress={handleUpdatePassword}>
        Update Password
      </Button>
    </View>
  );
};

export default SettingsScreen;
