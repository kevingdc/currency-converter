import React, { useContext } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/core';

import { RootStackParams } from '../config/Navigation';
import { ConversionContext } from '../util/ConversionContext';
import { RowItem, RowSeparator } from '../components/RowItem';
import colors from '../constants/colors';
import currencies from '../data/currencies.json';

type Props = {
  navigation: StackNavigationProp<RootStackParams, 'CurrencyList'>;
  route: RouteProp<RootStackParams, 'CurrencyList'>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function CurrencyList({ navigation, route }: Props) {
  const params = route.params || {};
  const {
    setBaseCurrency,
    setQuoteCurrency,
    baseCurrency,
    quoteCurrency,
  } = useContext(ConversionContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected =
            (params.isBaseCurrency && item === baseCurrency) ||
            (!params.isBaseCurrency && item === quoteCurrency);

          return (
            <RowItem
              text={item}
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </SafeAreaView>
  );
}
