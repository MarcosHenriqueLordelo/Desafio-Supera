import styled from 'styled-components';
import {View, Image, Text} from 'react-native';

export const Container = styled(View)`
  width: 100%;
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  height: 130px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ProductImg = styled(Image)`
  width: 90px;
  height: 100%;
  margin-right: 10px;
`;

export const Content = styled(View)`
  flex: 1;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LblName = styled(Text)`
  font-size: 16px;
  color: ${props => props.theme.colors.font};
`;

export const LblScore = styled(Text)`
  margin-top: 2px;
  font-size: 18px;
  color: ${props => props.theme.colors.font};
`;

export const BottomView = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const LblPrice = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
`;
