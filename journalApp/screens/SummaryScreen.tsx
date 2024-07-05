// screens/SummaryScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import axios from 'axios';

const SummaryScreen = () => {
    const [period, setPeriod] = useState('Daily');
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchSummary = async () => {
        try {
            const response = await axios.get(`http://your-backend-url/summary?period=${period.toLowerCase()}`);
            setSummary(response.data);
        } catch (error) {
            console.error('Failed to fetch summary:', error);
        }
        };

        fetchSummary();
    }, [period]);

    return (
        <View style={styles.container}>
        <Text>Summary</Text>
        <Picker
            selectedValue={period}
            onValueChange={(itemValue) => setPeriod(itemValue)}
            style={styles.picker}
        >
            <Picker.Item label="Daily" value="Daily" />
            <Picker.Item label="Weekly" value="Weekly" />
            <Picker.Item label="Monthly" value="Monthly" />
        </Picker>
        <View>
            {summary.map((item, index) => (
            <View key={index} style={styles.entry}>
                <Text>{item.date}: {item.count} entries</Text>
            </View>
            ))}
        </View>
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
});

export default SummaryScreen;
