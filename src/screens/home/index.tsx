import React, {useEffect, useState} from 'react';
import useContext from '../../context/useContext';
import Product from '../../models/product';

import {Container, ProductsList, SortContainer} from './styles';
import {View} from 'react-native';

// Components
import AppBar from '../../components/appBar';
import ProdctCard from '../../components/productCard';
import SortButton from '../../components/sortButton';

const Index: React.FC = () => {
  const {products, loadProducts, addProduct, remProduct} = useContext();

  const [searchValue, setSearchValue] = useState<string>('');
  const [filtered, setfiltered] = useState<Product[]>([]);
  const [sorted, setSorted] = useState<Product[]>([]);
  const [sortType, setSortType] = useState<number>(0);

  const format = (text: string) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const filteredDemands = products.filter(product => {
      const productName = format(product.name);
      const searchText = format(searchValue);

      return productName.indexOf(searchText) > -1;
    });

    setfiltered(filteredDemands);
  }, [searchValue, products]);

  // TODO: Consertar Atualização da lista ao filtrar

  useEffect(() => {
    if (sortType === 1) {
      const aux = filtered.sort((firstEl, secondEl) =>
        firstEl.price > secondEl.price ? 1 : -1,
      );
      setSorted(aux);
    } else if (sortType === 2) {
      const aux = filtered.sort((firstEl, secondEl) =>
        firstEl.score > secondEl.score ? -1 : 1,
      );
      setSorted(aux);
    } else if (sortType == 3) {
      const aux = filtered.sort((firstEl, secondEl) =>
        firstEl.name > secondEl.name ? 1 : -1,
      );
      setSorted(aux);
    } else {
      setSorted(filtered);
    }
  }, [filtered, sortType]);

  return (
    <Container>
      <AppBar onSearch={setSearchValue} />
      <SortContainer>
        <SortButton
          handlePress={() => (sortType === 3 ? setSortType(0) : setSortType(3))}
          label="A - Z"
          selected={sortType === 3}
        />
        <SortButton
          handlePress={() => (sortType === 1 ? setSortType(0) : setSortType(1))}
          label="Preço"
          selected={sortType === 1}
        />
        <SortButton
          handlePress={() => (sortType === 2 ? setSortType(0) : setSortType(2))}
          label="Score"
          selected={sortType === 2}
        />
      </SortContainer>
      <ProductsList>
        {sorted.map(item => (
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
