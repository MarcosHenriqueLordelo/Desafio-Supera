import styled from 'styled-components';
import {View, ScrollView} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const ProductsList = styled(ScrollView)`
  flex: 1;
  padding: 16px;
`;
