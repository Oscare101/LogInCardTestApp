import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Theme, ThemeColor} from '../constants/interfaces';
import colors from '../constants/colors';
import {useDispatch} from 'react-redux';
import {updateTheme} from '../redux/theme';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();
const width = Dimensions.get('screen').width;

export default function ThemeBlock(props: {
  themeColor: ThemeColor['value'];
  theme: Theme['value'];
}) {
  const dispatch = useDispatch();
  const themes: Theme['value'][] = ['system', 'light', 'dark'];
  function ThemeButton(item: {item: Theme['value']}) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          dispatch(updateTheme(item.item));

          storage.set('theme', item.item);
        }}
        style={[
          styles.button,
          {
            backgroundColor:
              props.theme === item.item
                ? colors[props.themeColor].bg
                : '#00000000',
          },
        ]}>
        <Text
          style={[styles.buttonTitle, {color: colors[props.themeColor].main}]}>
          {item.item}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <>
      <Text style={[styles.comment, {color: colors[props.themeColor].comment}]}>
        Theme
      </Text>
      <View
        style={[
          styles.block,
          {backgroundColor: colors[props.themeColor].card},
        ]}>
        {themes.map((item: any, index: number) => (
          <ThemeButton item={item} key={index} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  comment: {width: '92%', textAlign: 'left', fontSize: width * 0.04},

  block: {
    width: '92%',
    borderRadius: width * 0.03,
    padding: width * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    height: width * 0.08,
    borderRadius: width * 0.02,
  },
  buttonTitle: {
    fontSize: width * 0.05,
  },
});
