import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthContextProvider from './src/context/AuthContext';
import {LogBox} from 'react-native';
import RootNavigator from './src/navigation';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();

function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

export default App;
