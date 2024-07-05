import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Picker, StyleSheet } from 'react-native';
import axios from 'axios';

const JournalListScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://your-backend-url/entries');
        setEntries(response.data);
      } catch (error) {
        console.error('Failed to fetch entries:', error);
      }
    };

    fetchEntries();
  }, []);

  const filteredEntries = category === 'All' ? entries : entries.filter(entry => entry.category === category);

  return (
    <View style={styles.container}>
      <Text>Journal Entries</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Personal" value="Personal" />
        <Picker.Item label="Work" value="Work" />
        <Picker.Item label="Travel" value="Travel" />
      </Picker>
      <FlatList
        data={filteredEntries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.content}</Text>
            <Text>{item.category}</Text>
            <Text>{item.date}</Text>
            <Button title="Edit" onPress={() => navigation.navigate('EditEntry', { entryId: item.id })} />
          </View>
        )}
      />
      <Button title="Add Entry" onPress={() => navigation.navigate('AddEntry')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  entry: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default JournalListScreen;
