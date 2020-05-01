import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Main} from '~/pages';

const Routes = createStackNavigator();

export const AppRoutes: React.FC = () => (
  <Routes.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#fff'},
    }}>
    <Routes.Screen name="Main" component={Main} />
  </Routes.Navigator>
);

export default AppRoutes;
