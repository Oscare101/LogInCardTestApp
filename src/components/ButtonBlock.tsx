import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {ThemeColor} from '../constants/interfaces';
import colors from '../constants/colors';

const width = Dimensions.get('screen').width;

interface ButtonBlockProps {
  title: string;
  action: any;
  theme: ThemeColor['value'];
  titleStyle?: any;
}

function ButtonBlock(props: ButtonBlockProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.action}
      style={[styles.button, {backgroundColor: colors[props.theme].card}]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
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
    marginVertical: width * 0.015,
  },
  title: {fontSize: width * 0.05},
});

export default memo(ButtonBlock);
