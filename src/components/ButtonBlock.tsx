import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ThemeColor} from '../constants/interfaces';
import colors from '../constants/colors';

const width = Dimensions.get('screen').width;

interface ButtonBlockProps {
  title: string;
  action: any;
  theme: ThemeColor['value'];
}

export default function ButtonBlock(props: ButtonBlockProps) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[props.theme].card}]}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '92%',
    height: width * 0.12,
    borderRadius: width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: width * 0.05},
});
