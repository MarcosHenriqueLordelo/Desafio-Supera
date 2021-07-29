import React, {useEffect} from 'react';
import useContext from '../../context/useContext';

import {Container, ProductsList} from './styles';
import {View} from 'react-native';

// Components
import AppBar from '../../components/appBar';
import ProdctCard from '../../components/productCard';

const Index: React.FC = () => {
  const {products, loadProducts, addProduct, remProduct} = useContext();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container>
      <AppBar />
      <ProductsList>
        {products.map(item => (
          <ProdctCard
            key={item.id}
            product={item}
            handleAdd={() => addProduct(item)}
            handleRem={() => remProduct(item)}
          />
        ))}
        <View style={{height: 20}} />
      </ProductsList>
    </Container>
  );
};

export default Index;
