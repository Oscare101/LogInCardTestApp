import {Dimensions, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {ThemeColor} from '../constants/interfaces';

const width = Dimensions.get('screen').width;

export default function ErrorTitleBlock(props: {
  title: string;
  theme: ThemeColor['value'];
}) {
  return (
    <>
      {props.title ? (
        <Text style={[styles.errorTitle, {color: colors[props.theme].error}]}>
          {props.title}
        </Text>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({errorTitle: {fontSize: width * 0.04}});
