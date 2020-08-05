/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './store/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={Routes[0].name}>
            {Routes.map((screen: any, index: number) => (
              <Stack.Screen
                key={index}
                name={screen.name}
                component={screen.component}
                options={{
                  headerShow: false,
                }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
