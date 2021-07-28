import React from 'react';
import {Text} from 'react-native';

import {Container} from './styles';

const Index: React.FC = () => {
  return (
    <Container
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello World!</Text>
    </Container>
  );
};

export default Index;
