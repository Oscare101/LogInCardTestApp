import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {ImageData, ThemeColor} from '../constants/interfaces';
import {BlurView} from '@react-native-community/blur';
import colors from '../constants/colors';

const width = Dimensions.get('screen').width;

function RenderFeedItem(props: {item: ImageData; theme: ThemeColor['value']}) {
  return (
    <View style={styles.block}>
      <Image
        source={{uri: props.item.download_url}}
        resizeMode="cover"
        style={{
          width: width * 0.95,
          aspectRatio: 1.5,
        }}
      />
      <BlurView
        style={{width: '100%', position: 'absolute', bottom: 0}}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="light">
        <View
          style={[
            styles.titleBlock,
            {backgroundColor: `${colors[props.theme].bg}20`},
          ]}>
          <Text style={[styles.title, {color: '#ffffff'}]}>
            {props.item.author}
          </Text>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    borderRadius: width * 0.03,
    overflow: 'hidden',
    marginTop: width * 0.025,
  },
  titleBlock: {
    width: '100%',
    paddingVertical: width * 0.01,
    paddingHorizontal: width * 0.03,
  },
  title: {},
});

export default memo(RenderFeedItem);
