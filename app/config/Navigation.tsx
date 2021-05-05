import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';
import { ConversionContextProvider } from '../util/ConversionContext';
import colors from '../constants/colors';

export type MainStackParams = {
  Home: undefined;
  Options: undefined;
};

export type RootStackParams = {
  Main: undefined;
  CurrencyList: {
    title: string;
    isBaseCurrency: boolean;
  };
};

const MainStack = createStackNavigator<MainStackParams>();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Options" component={Options} />
    </MainStack.Navigator>
  );
}

const RootStack = createStackNavigator<RootStackParams>();

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({ navigation, route }) => ({
          title: route.params && route.params.title,
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={{ paddingHorizontal: 10 }}
            >
              <Entypo name="cross" size={30} color={colors.blue} />
            </TouchableOpacity>
          ),
        })}
      />
    </RootStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <ConversionContextProvider>
        <RootStackScreen />
      </ConversionContextProvider>
    </NavigationContainer>
  );
}
