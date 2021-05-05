import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  GestureResponderEvent,
} from 'react-native';
import colors from '../constants/colors';

type Props = {
  text: string;
  onPress(event: GestureResponderEvent): void;
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export function Button({ text, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require('../assets/images/reverse.png')}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
