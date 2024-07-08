import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../services/apiService';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            await AsyncStorage.setItem('token', response.data.token);
            navigation.navigate('Home');
        } catch (error) {
        alert(error.response?.data?.message || error.message);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <TextInput
            style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Button mode="contained" onPress={handleLogin} style={{ width: '100%', marginBottom: 10 }}>
            Login
        </Button>
        <Button onPress={() => navigation.navigate('Signup')}>
            Create an account
        </Button>
        </View>
    );
};

export default LoginScreen;
