// src/services/apiService.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'https://your-api-url.com';

const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const login = (email: string, password: string) => api.post('/auth/login', { email, password });
export const signup = (email: string, password: string) => api.post('/auth/signup', { email, password });

export const addJournalEntry = (entry) => api.post('/journal', entry);
export const updateJournalEntry = (id, entry) => api.put(`/journal/${id}`, entry);
export const deleteJournalEntry = (id) => api.delete(`/journal/${id}`);
export const getJournalEntries = () => api.get('/journal');
export const updateUsername = (username: string) => api.put('/user/username', { username });
export const updatePassword = (password: string) => api.put('/user/password', { password });
