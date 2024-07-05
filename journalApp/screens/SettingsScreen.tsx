import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { updateUsername, updatePassword } from '../services/apiService';

const SettingsScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdateUsername = async () => {
    try {
      await updateUsername(username);
      Alert.alert('Username updated successfully');
    } catch (error) {
      Alert.alert(error.response?.data?.message || error.message);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      await updatePassword(password);
      Alert.alert('Password updated successfully');
    } catch (error) {
      Alert.alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="New Username" value={username} onChangeText={setUsername} />
      <Button title="Update Username" onPress={handleUpdateUsername} />

      <TextInput placeholder="New Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Update Password" onPress={handleUpdatePassword} />
    </View>
  );
};

export default SettingsScreen;
