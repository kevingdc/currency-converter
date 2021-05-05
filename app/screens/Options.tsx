import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Linking,
  Alert,
  StatusBar,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function openUrl(url: string): Promise<void> {
  return Linking.openURL(url).catch(() => {
    Alert.alert('Oops! Something went wrong.', 'The URL cannot be opened.');
  });
}

export default function Options() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => alert('todo')}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          text="React Native Basics"
          onPress={() =>
            openUrl(
              'https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter'
            )
          }
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          text="React Native by Example"
          onPress={() => openUrl('https://reactnativebyexample.com')}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
