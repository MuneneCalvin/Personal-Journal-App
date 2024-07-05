import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signup } from '../services/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
        const response = await signup(email, password);
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
        <Button title="Signup" onPress={handleSignup} />
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default SignupScreen;
