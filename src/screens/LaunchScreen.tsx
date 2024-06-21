import {Dimensions, SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const width = Dimensions.get('screen').width;

export default function LaunchScreen() {
  return (
    <SafeAreaView style={styles.centerView}>
      <Text style={styles.title}>LaunchScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors['dark'].bg,
  },
  title: {
    fontSize: width * 0.05,
    color: colors['dark'].main,
  },
});
