import styled from 'styled-components';
import {View, ScrollView} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const ProductsList = styled(ScrollView)`
  flex: 1;
  padding-right: 16px;
  padding-left: 16px;
`;

export const SortContainer = styled(View)`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
`;
