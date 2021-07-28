import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {ContextProvider} from './context';

import App from './App';

const AppProviders: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ContextProvider>
          <App />
        </ContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppProviders;
