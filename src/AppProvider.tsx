import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import App from './App';

const AppProviders: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppProviders;
