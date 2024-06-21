import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconName, ThemeColor} from '../constants/interfaces';

import Icon from '../icons/Icon';
import colors from '../constants/colors';

const width = Dimensions.get('screen').width;

export default function TabComponent(props: {
  title: string;
  icon: IconName['value'];
  focused: boolean;
  theme: ThemeColor['value'];
}) {
  return (
    <View style={styles.block}>
      <Icon
        name={props.icon}
        color={
          props.focused ? colors[props.theme].main : colors[props.theme].comment
        }
        size={width * 0.05}
      />
      <Text
        style={[
          styles.title,
          {
            color: props.focused
              ? colors[props.theme].main
              : colors[props.theme].comment,
          },
        ]}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  title: {
    fontSize: width * 0.05,
    marginLeft: width * 0.03,
  },
});
