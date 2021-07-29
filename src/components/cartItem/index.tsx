import React from 'react';
import Product from '../../models/product';

import {View} from 'react-native';
import {Icon} from 'react-native-elements';

import {
  Container,
  ProductImg,
  Content,
  BottomView,
  LblName,
  LblPrice,
  LblScore,
} from './styles';
import useContext from '../../context/useContext';

type TypeProps = {
  onRemove: () => void;
  cartItem: Product;
};

const images: {[key: number]: any} = {
  312: require('../../assets/games/super-mario-odyssey.png'),
  201: require('../../assets/games/call-of-duty-infinite-warfare.png'),
  102: require('../../assets/games/the-witcher-iii-wild-hunt.png'),
  99: require('../../assets/games/call-of-duty-wwii.png'),
  12: require('../../assets/games/mortal-kombat-xl.png'),
  74: require('../../assets/games/shards-of-darkness.png'),
  31: require('../../assets/games/terra-media-sombras-de-mordor.png'),
  420: require('../../assets/games/fifa-18.png'),
  501: require('../../assets/games/horizon-zero-dawn.png'),
};

const Index: React.FC<TypeProps> = ({onRemove, cartItem}) => {
  const {theme} = useContext();

  return (
    <Container>
      <ProductImg source={images[cartItem.id]} resizeMode="contain" />
      <Content>
        <View>
          <LblName>{cartItem.name}</LblName>
          <LblScore>{`${cartItem.score} pts`}</LblScore>
        </View>
        <BottomView>
          <LblPrice>{`R$ ${cartItem.price}`}</LblPrice>
          <Icon
            name="remove-shopping-cart"
            size={24}
            color={theme.colors.secondary}
            onPress={onRemove}
          />
        </BottomView>
      </Content>
    </Container>
  );
};

export default Index;
