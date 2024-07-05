import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const SignUpScreen = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignUp = async () => {
        try {
            const response = await axios.post('http://your-backend-url/signup', { firstname, lastname, email, password });
            console.log('Sign Up successful:', response.data);
        } catch (error) {
            console.error('Sign Up failed:', error);
        }
    }

    return (
        <View style={styles.container}>
        <Text>Welcome!!! Please Sign Up to continue</Text>
        <TextInput
            style={styles.input}
            placeholder="John"
            value={firstname}
            onChangeText={setFirstName}
        />
        <TextInput
            style={styles.input}
            placeholder="Doe"
            value={lastname}
            onChangeText={setLastName}
        />
        <TextInput
            style={styles.input}
            placeholder="user@gmail.com"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={styles.input}
            placeholder="*********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Button title="Sign Up" onPress={handleSignUp} />
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

export default SignUpScreen;
