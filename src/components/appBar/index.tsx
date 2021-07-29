import React from 'react';
import {Header, Title, Container, ButtonsContainer, SearchIput} from './styles';
import {Icon, withBadge} from 'react-native-elements';
import useContext from '../../context/useContext';

import TextInput from '../textInput';

const Index: React.FC = () => {
  const {theme, toggleTheme, cart} = useContext();

  const BgIcon = withBadge(cart.items.length)(Icon);

  return (
    <Container>
      <Header>
        <Title>e-Commerce</Title>

        <ButtonsContainer>
          {cart.items.length > 0 /* @ts-ignore*/ ? (
            <BgIcon name="shopping-cart" color={theme.colors.white} size={24} />
          ) : (
            <Icon name="shopping-cart" color={theme.colors.white} size={24} />
          )}
          <Icon
            containerStyle={{marginLeft: 10}}
            size={24}
            name={theme.title === 'light' ? 'brightness-5' : 'nightlight-round'}
            onPress={toggleTheme}
            color={theme.colors.white}
          />
        </ButtonsContainer>
      </Header>
      <SearchIput>
        <TextInput onChangeText={text => console.log(text)} />
      </SearchIput>
    </Container>
  );
};

export default Index;
