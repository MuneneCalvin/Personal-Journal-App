import React, { useState, useEffect } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import { getJournalEntries } from '../services/apiService';

const HomeScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await getJournalEntries();
        setEntries(response.data);
      } catch (error) {
        alert(error.response?.data?.message || error.message);
      }
    };

    fetchEntries();
  }, []);

  const handleAddEntry = () => {
    navigation.navigate('JournalEntry', { entry: null });
  };

  const handleEditEntry = (entry) => {
    navigation.navigate('JournalEntry', { entry });
  };

  return (
    <View>
      <Button title="Add Journal Entry" onPress={handleAddEntry} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Title: {item.title}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Date: {item.date}</Text>
            <Button title="Edit" onPress={() => handleEditEntry(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
