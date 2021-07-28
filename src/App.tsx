import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';
import {SafeAreaView} from 'react-native-safe-area-context';

import MainNav from './navigators/MainNav';

import useContext from './context/useContext';

const App: React.FC = () => {
  const {theme} = useContext();

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          animated={true}
          backgroundColor={theme.colors.background}
          barStyle={theme.title === 'light' ? 'dark-content' : 'light-content'}
        />
        <MainNav />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
