import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { createJournal, updateJournal } from '../services/apiService';

const JournalEntryForm = ({ entry, onSave }) => {
    const [title, setTitle] = useState(entry ? entry.title : '');
    const [content, setContent] = useState(entry ? entry.content : '');
    const [category, setCategory] = useState(entry ? entry.category : '');
    const [date, setDate] = useState(entry ? entry.date : new Date());
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const handleSave = async () => {
        const newEntry = { title, content, category, date };
        try {
        if (entry) {
            await updateJournal(entry.id, newEntry);
        } else {
            await createJournal(newEntry);
        }
        onSave();
        setSnackbarVisible(true); 
        } catch (error) {
        alert(error.response?.data?.message || error.message);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
        <TextInput
            style={{ height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
        />
        <TextInput
            style={{ height: 100, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10, textAlignVertical: 'top' }}
            placeholder="Content"
            value={content}
            onChangeText={setContent}
            multiline
        />
        <TextInput
            style={{ height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
            placeholder="Category"
            value={category}
            onChangeText={setCategory}
        />
        <TextInput
            style={{ height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
            placeholder="Date"
            value={date.toString()}
            onChangeText={(text) => setDate(new Date(text))}
        />
        <Button mode="contained" onPress={handleSave} style={{ marginBottom: 10 }}>
            Save
        </Button>

        <Snackbar
            visible={snackbarVisible}
            onDismiss={() => setSnackbarVisible(false)}
            action={{
            label: 'Close',
            onPress: () => {
                setSnackbarVisible(false);},
            }}
        >
            Entry saved successfully!
        </Snackbar>
        </View>
    );
};

export default JournalEntryForm;
