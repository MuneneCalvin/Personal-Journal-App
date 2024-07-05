import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addJournalEntry, updateJournalEntry } from '../services/apiService';

const JournalEntryForm = ({ entry, onSave }) => {
    const [title, setTitle] = useState(entry ? entry.title : '');
    const [content, setContent] = useState(entry ? entry.content : '');
    const [category, setCategory] = useState(entry ? entry.category : '');
    const [date, setDate] = useState(entry ? entry.date : new Date());

    const handleSave = async () => {
        const newEntry = { title, content, category, date };
        try {
        if (entry) {
            await updateJournalEntry(entry.id, newEntry);
        } else {
            await addJournalEntry(newEntry);
        }
        onSave();
        } catch (error) {
        alert(error.response?.data?.message || error.message);
        }
    };

    return (
        <View>
        <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
        <TextInput placeholder="Content" value={content} onChangeText={setContent} />
        <TextInput placeholder="Category" value={category} onChangeText={setCategory} />
        <TextInput placeholder="Date" value={date} onChangeText={setDate} />
        <Button title="Save" onPress={handleSave} />
        </View>
    );
};

export default JournalEntryForm;
