import {useContext} from 'react';
import Context from './index';

export default function () {
  const context = useContext(Context);
  return context;
}
