import React, {createContext, useState, useEffect} from 'react';
import {DefaultTheme} from 'styled-components';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert} from 'react-native';

// Types
import Cart from '../models/cart';
import Product from '../models/product';
import light from '../themes/light';
import dark from '../themes/dark';

// Fake data
import fakeData from '../utils/products.json';

type TypeContext = {
  loading: boolean;
  theme: DefaultTheme;
  toggleTheme: () => void;
  cart: Cart;
  products: Array<Product>;
  addProduct: (product: Product) => void;
  remProduct: (product: Product) => void;
  buy: () => void;
  isInCart: (productId: number) => boolean;
  loadProducts: () => void;
};

const empytCart: Cart = {
  items: [],
  value: 0,
  shipping: 0,
};

const Context = createContext<TypeContext>({} as TypeContext);

export const ContextProvider: React.FC = ({children}) => {
  const tokenKey = '@desafio:token:';

  const [theme, setTheme] = useState<DefaultTheme>(light);
  const [cart, setCart] = useState<Cart>(empytCart);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadStoragedData = async () => {
      setLoading(true);

      // Get Theme Data
      const themeData = await AsyncStorage.getItem(`${tokenKey}theme`);
      setTheme(themeData ? JSON.parse(themeData) : light);

      // Get Cart Data
      const cartData = await AsyncStorage.getItem(`${tokenKey}cart`);
      setCart(cartData ? JSON.parse(cartData) : empytCart);

      setLoading(false);
    };

    loadStoragedData();
  }, []);

  const isInCart = (productId: number): boolean => {
    let isIn = false;
    cart.items.forEach(item => {
      if (item.id === productId) isIn = true;
    });

    return isIn;
  };

  const addProduct = (product: Product) => {
    if (isInCart(product.id)) return;

    const items = [...cart.items, product];

    let value = 0;
    items.forEach(item => (value = value + item.price));

    let shipping = 0;
    if (value < 250) shipping = items.length * 10;

    setCart({items, value, shipping});
  };

  const remProduct = (product: Product) => {
    if (!isInCart(product.id)) return;

    const items = cart.items.filter(item => item.id != product.id);

    let value = 0;
    items.forEach(item => (value = value + item.price));

    let shipping = 0;
    if (value < 250) shipping = items.length * 10;

    setCart({items, value, shipping});
  };

  const buy = () => {
    setCart(empytCart);
    Alert.alert('Compra Finalizada', 'Compra realizada com sucesso', [
      {text: 'OK'},
    ]);
  };

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const loadProducts = () => {
    setProducts(fakeData);
  };

  return (
    <Context.Provider
      value={{
        loading,
        addProduct,
        buy,
        cart,
        isInCart,
        products,
        remProduct,
        theme,
        toggleTheme,
        loadProducts,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
