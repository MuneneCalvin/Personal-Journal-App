# MyJournalApp

MyJournalApp is a mobile journal application built using React Native and TypeScript. This app allows users to manage their journal entries, categorize them, view summaries, and update settings. It leverages the `react-native-paper` library for a clean and intuitive UI.

## Features

- **User Authentication**: Sign up and log in.
- **Journal Entry Management**: Add, edit, and delete journal entries with title, content, category, and date.
- **Journal View**: View a list of all journal entries.
- **Categorization**: Categorize entries (e.g., Personal, Work, Travel).
- **Summary View**: Display journal entries over a selected period (daily, weekly, monthly).
- **Settings**: Update username and password.

## Prerequisites

- Node.js (v14 or higher)
- Expo CLI (local version)

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/MyJournalApp.git
cd MyJournalApp
```

### 2. Install Dependencies

```sh
npm install
```

### 3.  Install Expo CLI (if not already installed)

```sh
npm install -g expo-cli / npm install expo
```

### 4. Start the App

```sh
npx expo start
```


## Built With

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/)


## Project Structure
    
    ```
    MyJournalApp/
    ├── src/
    │   ├── components/
    │   │   └── JournalEntryForm.tsx
    │   ├── screens/
    │   │   ├── HomeScreen.tsx
    │   │   ├── LoginScreen.tsx
    │   │   ├── SignupScreen.tsx
    │   │   ├── SummaryScreen.tsx
    │   │   └── SettingsScreen.tsx
    │   ├── services/
    │   │   └── apiService.ts
    │   ├── App.tsx
    │   └── navigation.tsx
    ├── App.tsx
    ├── package.json
    └── README.md
    ```

## License

Distributed under the MIT License. See `LICENSE` for more information.
