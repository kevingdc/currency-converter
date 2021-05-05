import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
  GestureResponderEvent,
  KeyboardTypeOptions,
} from 'react-native';

import colors from '../constants/colors';

type Props = {
  text: string;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  onChangeText?: (text: string) => void;
  onButtonPress(event: GestureResponderEvent): void;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
  },

  containerDisabled: {
    backgroundColor: colors.offWhite,
  },

  button: {
    backgroundColor: colors.white,
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
  },

  input: {
    flex: 1,
    padding: 10,
    color: colors.textLight,
  },
});

export function ConversionInput({ text, onButtonPress, ...props }: Props) {
  const containerStyles: [Object] = [styles.container];
  if (!props.editable) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

ConversionInput.defaultProps = {
  keyboardType: 'numeric',
  editable: true,
  onChangeText: () => {},
};
