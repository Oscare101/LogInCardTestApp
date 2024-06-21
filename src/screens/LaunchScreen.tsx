import {Dimensions, SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../constants/colors';
import {MMKV} from 'react-native-mmkv';
import {useDispatch} from 'react-redux';
import {updateTheme} from '../redux/theme';

export const storage = new MMKV();
const width = Dimensions.get('screen').width;

export default function LaunchScreen({navigation}: any) {
  const dispatch = useDispatch();

  function GetUserStorage() {
    const themeStorage = storage.getString('theme');
    if (
      themeStorage &&
      themeStorage.length &&
      themeStorage === ('system' || 'light' || 'dark')
    ) {
      dispatch(updateTheme(themeStorage));
    } else {
      dispatch(updateTheme('system'));
      storage.set('theme', 'system');
    }

    const userPassword = storage.getString('password');
    const userEmail = storage.getString('email');
    if (userPassword && userEmail) {
      navigation.reset({
        index: 0,
        routes: [{name: 'MainTabNavigation'}],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'LogInScreen'}],
      });
    }
  }

  useEffect(GetUserStorage, []);

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
