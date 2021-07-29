import React from 'react';
import {Header, Title, Container, ButtonsContainer, SearchIput} from './styles';
import {Icon, withBadge} from 'react-native-elements';

import useContext from '../../context/useContext';
import {StackActions, useNavigation} from '@react-navigation/native';

import TextInput from '../textInput';

type TypeProps = {
  onSearch: (text: string) => void;
};

const Index: React.FC<TypeProps> = ({onSearch}) => {
  const {theme, toggleTheme, cart} = useContext();
  const navigation = useNavigation();

  const BgIcon = withBadge(cart.items.length)(Icon);

  return (
    <Container>
      <Header>
        <Title>e-Commerce</Title>

        <ButtonsContainer>
          {cart.items.length > 0 ? (
            <BgIcon
              /* @ts-ignore*/
              name="shopping-cart"
              color={theme.colors.white}
              size={24}
              onPress={() => navigation.dispatch(StackActions.push('Cart'))}
            />
          ) : (
            <Icon
              name="shopping-cart"
              color={theme.colors.white}
              size={24}
              onPress={() => navigation.dispatch(StackActions.push('Cart'))}
            />
          )}
          <Icon
            containerStyle={{marginLeft: 20}}
            size={24}
            name={theme.title === 'light' ? 'brightness-5' : 'nightlight-round'}
            onPress={toggleTheme}
            color={theme.colors.white}
          />
        </ButtonsContainer>
      </Header>
      <SearchIput>
        <TextInput onChangeText={onSearch} />
      </SearchIput>
    </Container>
  );
};

export default Index;
