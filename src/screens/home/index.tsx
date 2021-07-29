import React from 'react';
import {Text} from 'react-native';

import {Container} from './styles';

// Components
import AppBar from '../../components/appBar';

const Index: React.FC = () => {
  return (
    <Container>
      <AppBar />
      <Text>Hello World!</Text>
    </Container>
  );
};

export default Index;
