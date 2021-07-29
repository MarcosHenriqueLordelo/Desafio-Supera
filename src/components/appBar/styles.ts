import styled from 'styled-components';
import {View, Text, TextInput} from 'react-native';

export const Container = styled(View)`
  padding-right: 16px;
  padding-left: 16px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  padding-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
  align-items: center;
`;

export const Header = styled(View)`
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

export const ButtonsContainer = styled(View)`
  flex-direction: row;
`;

export const SearchIput = styled(View)`
  width: 80%;
`;
