/*
 * GennadySX @2020
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteComponents} from './routes';
import {PersistGate} from 'redux-persist/es/integration/react';
// @ts-ignore
import {Provider} from 'react-redux';
import {persistor, store} from './store/store';
import {RouteActive} from './routes/Routes';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={RouteActive}>
            {RouteComponents.map((screen: any, index: number) => (
              <Stack.Screen
                key={index}
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
