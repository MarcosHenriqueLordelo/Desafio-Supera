import React from 'react';
import {Container, Label, UnselectedContainer, UnselectedLabel} from './styles';

type TypeProps = {
  handlePress: () => void;
  selected: boolean;
  label: string;
};

const Index: React.FC<TypeProps> = ({handlePress, selected, label}) => {
  if (selected)
    return (
      <Container onPress={handlePress}>
        <Label>{label}</Label>
      </Container>
    );

  return (
    <UnselectedContainer onPress={handlePress}>
      <UnselectedLabel>{label}</UnselectedLabel>
    </UnselectedContainer>
  );
};

export default Index;
