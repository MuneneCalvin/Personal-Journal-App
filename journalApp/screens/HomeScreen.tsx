import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import { getJournalsByUser, getJournalsByCategory, deleteJournal } from '../services/apiService';

const HomeScreen = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [entries, setEntries] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  useEffect(() => {
    extractCategories();
  }, [entries]);

  const fetchEntries = async () => {
    try {
      const response = await getJournalsByUser();
      setEntries(response.data.data);
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  const extractCategories = () => {
    // Extract unique categories from entries
    const uniqueCategories = [...new Set(entries.map(entry => entry.category))];
    setCategoryOptions(uniqueCategories.map(category => ({ label: category, value: category })));
  };

  const handleAddEntry = () => {
    navigation.navigate('JournalEntry', { entry: null });
  };

  const handleEditEntry = (entry) => {
    navigation.navigate('EditJournalEntry', { entry });
  };

  const handleDeleteEntry = async (entryId) => {
    try {
      await deleteJournal(entryId);
      fetchEntries();
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  }

  const handleViewByCategory = async () => {
    if (category) {
      try {
        const response = await getJournalsByCategory(category);
        setEntries(response.data.data);
      } catch (error) {
        alert(error.response?.data?.message || error.message);
      }
    } else {
      fetchEntries();
    }
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
      
      <Button mode="outlined" onPress={() => handleDeleteEntry(item.id)} style={styles.editButton}>
        Delete
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={handleAddEntry} style={styles.button}>
        Add New Journal
      </Button>

      <RNPickerSelect
        placeholder={{ label: 'Select a category', value: null }}
        items={categoryOptions}
        onValueChange={(value) => setCategory(value)}
        style={{ ...pickerSelectStyles }}
      />

      <Button mode="outlined" onPress={handleViewByCategory} style={styles.button}>
        View by Category
      </Button>

      {entries.length === 0 ? (
        <Text style={styles.noEntriesText}>No entries available</Text>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
  },
});

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
