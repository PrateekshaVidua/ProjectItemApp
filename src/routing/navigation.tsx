// App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import CarList from '../Modules/Car';
import CarFilter from '../Modules/CarFilter';
import {store} from '../Store/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Car" component={CarList} options={{ title: 'Car' }} />
          <Stack.Screen name="CarFilter" component={CarFilter} options={{ title: 'Car Filter' }} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
};

export default App;
