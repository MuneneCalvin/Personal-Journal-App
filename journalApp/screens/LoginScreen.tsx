import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { login } from '../services/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
        const response = await login(email, password);
        await AsyncStorage.setItem('token', response.data.token);
        navigation.replace('App');
        } catch (error) {
        alert(error.response?.data?.message || error.message);
        }
    };

    return (
        <View>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
        </View>
    );
};

export default LoginScreen;
