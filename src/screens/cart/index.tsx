import React from 'react';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';

import useContext from '../../context/useContext';
import {StackActions, useNavigation} from '@react-navigation/native';

import {
  Container,
  HeaderContainer,
  HeaderRow,
  Title,
  Subtitle,
  CartItems,
  BuyBtn,
} from './styles';

import CartItem from '../../components/cartItem';

const Index: React.FC = () => {
  const {theme, cart, remProduct, buy} = useContext();
  const navigation = useNavigation();

  const handleBuy = () => {
    buy();
    navigation.dispatch(StackActions.pop());
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderRow>
          <Title>e-Commerce</Title>
          <Icon
            size={24}
            name="close"
            onPress={() => navigation.dispatch(StackActions.pop())}
            color={theme.colors.white}
          />
        </HeaderRow>
        <HeaderRow>
          <Title>Total:</Title>
          <Title>{`R$ ${cart.value + cart.shipping}`}</Title>
        </HeaderRow>
      </HeaderContainer>
      <HeaderRow>
        <Subtitle>Frete:</Subtitle>
        <Subtitle>{`R$ ${cart.shipping}.00`}</Subtitle>
      </HeaderRow>
      <CartItems>
        {cart.items.map(item => (
          <CartItem
            key={item.id}
            cartItem={item}
            onRemove={() => remProduct(item)}
          />
        ))}
        <View style={{height: 10}} />
      </CartItems>
      <BuyBtn
        onPress={() =>
          cart.items.length > 0 ? handleBuy() : console.log('Carrinho Vazio')
        }>
        <Title>Comprar</Title>
      </BuyBtn>
    </Container>
  );
};

export default Index;
