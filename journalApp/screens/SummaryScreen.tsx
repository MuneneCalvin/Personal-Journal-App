import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getJournalEntries } from '../services/apiService';
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';

const SummaryScreen = () => {
  const [entries, setEntries] = useState([]);
  const [summary, setSummary] = useState({ daily: [], weekly: [], monthly: [] });

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await getJournalEntries();
        const fetchedEntries = response.data;
        setEntries(fetchedEntries);
        calculateSummary(fetchedEntries);
      } catch (error) {
        alert(error.response?.data?.message || error.message);
      }
    };

    fetchEntries();
  }, []);

  const calculateSummary = (entries) => {
    const today = new Date();
    const daily = entries.filter(entry => format(new Date(entry.date), 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd'));

    const weekStart = startOfWeek(today);
    const weekEnd = endOfWeek(today);
    const weekly = entries.filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= weekStart && entryDate <= weekEnd;
    });

    const monthStart = startOfMonth(today);
    const monthEnd = endOfMonth(today);
    const monthly = entries.filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= monthStart && entryDate <= monthEnd;
    });

    setSummary({ daily, weekly, monthly });
  };

  return (
    <View>
      <Text>Daily Summary</Text>
      {summary.daily.map(entry => <Text key={entry.id}>{entry.title}</Text>)}

      <Text>Weekly Summary</Text>
      {summary.weekly.map(entry => <Text key={entry.id}>{entry.title}</Text>)}

      <Text>Monthly Summary</Text>
      {summary.monthly.map(entry => <Text key={entry.id}>{entry.title}</Text>)}
    </View>
  );
};

export default SummaryScreen;
