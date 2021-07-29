import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 60px;
  background-color: ${props => props.theme.colors.primary};
  padding: 2px;
  margin-right: 10px;
  align-items: center;
  border-radius: 20px;
`;

export const Label = styled(Text)`
  color: ${props => props.theme.colors.white};
`;

export const UnselectedContainer = styled(TouchableOpacity)`
  width: 60px;
  background-color: ${props => props.theme.colors.gray};
  padding: 2px;
  margin-right: 10px;
  align-items: center;
  border-radius: 20px;
`;

export const UnselectedLabel = styled(Text)`
  color: ${props => props.theme.colors.white};
`;
