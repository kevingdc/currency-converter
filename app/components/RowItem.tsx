import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

import colors from '../constants/colors';

type Props = {
  text: string;
  onPress(event: GestureResponderEvent): void;
  rightIcon?: React.ReactNode | undefined;
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export function RowItem({ text, onPress, rightIcon }: Props) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
}

export function RowSeparator() {
  return <View style={styles.separator} />;
}

RowItem.defaultProps = {
  rightIcon: undefined,
};
