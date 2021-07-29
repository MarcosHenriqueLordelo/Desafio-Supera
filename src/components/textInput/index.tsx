import React from 'react';
import {useState} from 'react';

import {Icon} from 'react-native-elements';
import useContext from '../../context/useContext';

import {Container, Content, Input, Line} from './styles';

type TypeProps = {
  onChangeText: (text: string) => void;
};

const Index: React.FC<TypeProps> = ({onChangeText}) => {
  const {theme} = useContext();

  const [value, setValue] = useState<string>('asdasd');

  const handleChange = (text: string) => {
    setValue(text);
    onChangeText(text);
  };

  return (
    <Container>
      <Content>
        <Icon size={20} color={theme.colors.white} name="search" />
        <Input
          value={value}
          onChangeText={handleChange}
          placeholder="Pesquisar"
          placeholderTextColor={theme.colors.white}
        />
        {value.length > 0 && (
          <Icon
            size={20}
            color={theme.colors.white}
            name="close"
            onPress={() => handleChange('')}
          />
        )}
      </Content>
      <Line />
    </Container>
  );
};

export default Index;
