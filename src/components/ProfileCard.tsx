import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeColor, UserData} from '../constants/interfaces';
import colors from '../constants/colors';

const width = Dimensions.get('screen').width;

export default function ProfileCard(props: {
  user: UserData;
  theme: ThemeColor['value'];
}) {
  return (
    <View style={[styles.card, {backgroundColor: colors[props.theme].card}]}>
      <Image
        source={{uri: props.user.imageUrl}}
        resizeMode="cover"
        style={{
          width: width * 0.2,
          aspectRatio: 1,
          borderRadius: width * 0.1,
        }}
      />
      <View style={styles.nameBlock}>
        <Text style={[styles.title, {color: colors[props.theme].main}]}>
          {props.user.name}
        </Text>
        <Text style={[styles.title, {color: colors[props.theme].main}]}>
          {props.user.email}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '92%',
    padding: width * 0.03,
    borderRadius: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameBlock: {flexDirection: 'column', marginLeft: width * 0.03},
  title: {fontSize: width * 0.04},
});
