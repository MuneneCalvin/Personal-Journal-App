// screens/EditEntryScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const EditEntryScreen = ({ route, navigation }) => {
  const { entryId } = route.params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await axios.get(`http://your-backend-url/entries/${entryId}`);
        const entry = response.data;
        setTitle(entry.title);
        setContent(entry.content);
        setCategory(entry.category);
        setDate(entry.date);
      } catch (error) {
        console.error('Failed to fetch entry:', error);
        // Show error message to the user
      }
    };

    fetchEntry();
  }, [entryId]);

  const handleEditEntry = async () => {
    try {
      const response = await axios.put(`http://your-backend-url/entries/${entryId}`, {
        title,
        content,
        category,
        date,
      });
      console.log('Entry updated:', response.data);
      // Navigate to the list screen or show success message
      navigation.navigate('JournalList');
    } catch (error) {
      console.error('Failed to update entry:', error);
      // Show error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <Text>Edit Entry</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Update Entry" onPress={handleEditEntry} />
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

export default EditEntryScreen;
