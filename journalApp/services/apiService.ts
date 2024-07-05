import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'https://localhost:4200';

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

export const login = (email: string, password: string) => api.post('/users/login', { email, password });
export const signup = (email: string, password: string) => api.post('/users/register', { email, password });

export const getJournals = () => api.get('/journals');
export const getJournal = (journalId: string) => api.get(`/journals/${journalId}`);
export const getSummary = () => api.get('/journals/summary');
export const getJournalsByCategory = (category: string) => api.get(`/journals/category/${category}`);
export const getJournalsByUser = () => api.get('/journals/user');
export const createJournal = (journal: any) => api.post('/journals', journal);
export const updateJournal = (journalId: string, journal: any) => api.put(`/journals/${journalId}`, journal);
export const deleteJournal = (journalId: string) => api.delete(`/journals/${journalId}`);

export const updateUsername = (username: string) => api.put('/users/username', { username });
export const updatePassword = (password: string) => api.put('/users/password', { password });
