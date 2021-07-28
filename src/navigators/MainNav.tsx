import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Home from '../screens/home';
import Cart from '../screens/cart';

const MainStack = createStackNavigator();

const screenOpts = {
  gestureEnabled: false,
};

const MainNav: React.FC = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Home" component={Home} options={screenOpts} />
      <MainStack.Screen name="Cart" component={Cart} options={screenOpts} />
    </MainStack.Navigator>
  );
};

export default MainNav;
