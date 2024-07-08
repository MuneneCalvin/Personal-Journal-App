import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getJournal, updateJournal } from '../services/apiService';

const EditEntryScreen = ({ route, navigation }) => {
  const { entryId } = route.params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await getJournal(entryId);
        setTitle(response.data.title);
        setContent(response.data.content);
        setCategory(response.data.category);
      } catch (error) {
        console.error('Failed to fetch entry:', error);
      }
    };

    fetchEntry();
  }, [entryId]);

  const handleEditEntry = async () => {
    try {
      await updateJournal(entryId, { title, content, category });
      navigation.navigate('Home');
    } catch (error) {
      console.error('Failed to update entry:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Edit Journal Entry</Text>
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
