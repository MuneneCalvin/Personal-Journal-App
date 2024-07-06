import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { getJournalsByUser } from '../services/apiService';

const HomeScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await getJournalsByUser();
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
    <View style={{ flex: 1, padding: 20 }}>
      <Button mode="contained" onPress={handleAddEntry} style={{ marginBottom: 10 }}>
        Add Journal Entry
      </Button>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Title: {item.title}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Date: {item.date}</Text>
            <Button onPress={() => handleEditEntry(item)} style={{ marginTop: 5 }}>
              Edit
            </Button>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
