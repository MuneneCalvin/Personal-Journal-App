import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { getJournalsByUser } from '../services/apiService';

const HomeScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await getJournalsByUser();
        setEntries(response.data.data);
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
    navigation.navigate('EditJournalEntry', { entry });
  };

  const renderItem = ({ item }) => (
    <View style={styles.entryContainer}>
      <Text style={styles.entryTitle}>Title: {item.title}</Text>
      <Text style={styles.entryCategory}>Category: {item.category}</Text>
      <Text style={styles.entryDate}>Date: {new Date(item.createdAt).toLocaleDateString()}</Text>
      <Text style={styles.entryContent}>Content: {item.content}</Text>

      <Button mode="outlined" onPress={() => handleEditEntry(item)} style={styles.editButton}>
        Edit
      </Button>
    </View>
  );

  console.log('Entries length:', entries.length);

  return (
    <View style={styles.container}>
      {entries.length === 0 ? (
        <Text style={styles.noEntriesText}>No entries available</Text>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
  
      <Button mode="contained" onPress={handleAddEntry} style={styles.button}>
        Add New Journal
      </Button>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  button: {
    marginBottom: 10,
  },
  noEntriesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  entryContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  entryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  entryCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  entryDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  entryContent: {
    fontSize: 14,
    marginBottom: 10,
  },
  editButton: {
    alignSelf: 'flex-start',
  },
});

export default HomeScreen;
