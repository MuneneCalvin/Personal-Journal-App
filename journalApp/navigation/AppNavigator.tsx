import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import JournalEntryScreen from '../screens/AddEntryScreen';
import EditJournalEntryScreen from '../screens/EditEntryScreen';
import JournalDetailScreen from '../screens/JournalListScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="JournalEntry" component={JournalEntryScreen} />
            <Stack.Screen name="EditJournalEntry" component={EditJournalEntryScreen} />
            <Stack.Screen name="JournalDetail" component={JournalDetailScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
