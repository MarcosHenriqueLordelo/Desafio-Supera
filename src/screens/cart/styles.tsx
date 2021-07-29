import styled from 'styled-components';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const HeaderContainer = styled(View)`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 110px;
  justify-content: space-between;
`;

export const HeaderRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled(Text)`
  font-family: fantasy;
  font-size: 24px;
  color: ${props => props.theme.colors.white};
`;

export const Subtitle = styled(Text)`
  font-family: fantasy;
  font-size: 16px;
  color: ${props => props.theme.colors.font};
  margin: 16px;
`;

export const CartItems = styled(ScrollView)`
  flex: 1;
  padding-right: 16px;
  padding-left: 16px;
`;

export const BuyBtn = styled(TouchableOpacity)`
  width: 160px;
  height: 50px;
  background-color: ${props => props.theme.colors.secondary};
  align-self: center;
  margin: 16px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;
