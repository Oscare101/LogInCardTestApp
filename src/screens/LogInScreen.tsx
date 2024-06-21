import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect} from 'react';
import {Theme, ThemeColor} from '../constants/interfaces';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import colors from '../constants/colors';

export default function LogInScreen({navigation}: any) {
  const systemTheme: ThemeColor['value'] = useColorScheme() ?? 'light';
  const theme: Theme['value'] = useSelector((state: RootState) => state.theme);
  const themeColor: ThemeColor['value'] =
    theme === 'system' ? systemTheme : theme;

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <Text>LogInScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({container: {}});
