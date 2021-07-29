import Product from './product';

export default interface Cart {
  items: Array<Product>;
  value: number;
  shipping: number;
}
