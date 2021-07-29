import React from 'react';
import Product from '../../models/product';

import useContext from '../../context/useContext';

import {
  Container,
  ProductImg,
  Content,
  LblName,
  LblScore,
  BottomView,
  LblPrice,
} from './styles';

import {View} from 'react-native';
import {Icon} from 'react-native-elements';

type TypeProps = {
  product: Product;
  handleAdd: () => void;
  handleRem: () => void;
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

const Index: React.FC<TypeProps> = ({product, handleAdd, handleRem}) => {
  const {theme, isInCart} = useContext();

  return (
    <Container>
      <ProductImg source={images[product.id]} resizeMode="contain" />
      <Content>
        <View>
          <LblName>{product.name}</LblName>
          <LblScore>{`${product.score} pts`}</LblScore>
        </View>
        <BottomView>
          <LblPrice>{`R$ ${product.price}`}</LblPrice>
          <Icon
            name="shopping-cart"
            size={24}
            color={
              isInCart(product.id) ? theme.colors.primary : theme.colors.gray
            }
            onPress={() => (isInCart(product.id) ? handleRem() : handleAdd())}
          />
        </BottomView>
      </Content>
    </Container>
  );
};

export default Index;
