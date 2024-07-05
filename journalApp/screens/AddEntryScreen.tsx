import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const AddEntryScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleAddEntry = async () => {
        try {
        const response = await axios.post('http://your-backend-url/entries', { title, content, category, date, });
        console.log('Entry added:', response.data);
        navigation.navigate('JournalList');
        } catch (error) {
        console.error('Failed to add entry:', error);
        }
    };

    return (
        <View style={styles.container}>
        <Text>Add New Entry</Text>
        <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
        />
        <TextInput
            style={styles.input}
            placeholder="Content"
            value={content}
            onChangeText={setContent}
        />
        <TextInput
            style={styles.input}
            placeholder="Category"
            value={category}
            onChangeText={setCategory}
        />
        <Button title="Add Entry" onPress={handleAddEntry} />
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

export default AddEntryScreen;
