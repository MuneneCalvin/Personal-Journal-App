import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { signup } from '../services/apiService';

const SignupScreen = ({ navigation }) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
        await signup(firstname, lastname, email, password);
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
        <TextInput
            style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
            placeholder="First Name"
            value={firstname}
            onChangeText={setFirstName}
        />
                <TextInput
            style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
            placeholder="Last name"
            value={firstname}
            onChangeText={setLastName}
        />

        <Button mode="contained" onPress={handleSignup} style={{ width: '100%', marginBottom: 10 }}>
            Signup
        </Button>
        <Button onPress={() => navigation.navigate('Login')}>
            Already have an account? Login
        </Button>
        </View>
    );
};

export default SignupScreen;
