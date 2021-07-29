import styled from 'styled-components';
import {View, TextInput} from 'react-native';

export const Container = styled(View)`
  width: 100%;
  margin-top: 20px;
`;

export const Content = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Line = styled(View)`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.white};
`;

export const Input = styled(TextInput)`
  flex: 1;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  padding: 0px;
  margin-left: 10px;
`;
