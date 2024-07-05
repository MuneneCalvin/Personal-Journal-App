import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://your-backend-url/signup', { email, password });
            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
            style={styles.input}
            placeholder="user@gmail.com"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={styles.input}
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <Button title="Login" onPress={handleLogin} />
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

export default LoginScreen;
