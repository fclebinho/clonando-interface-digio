import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
