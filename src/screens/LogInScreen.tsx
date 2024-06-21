import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Theme, ThemeColor} from '../constants/interfaces';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import colors from '../constants/colors';
import InputTextBlock from '../components/InputTextBlock';

export default function LogInScreen({navigation}: any) {
  const systemTheme: ThemeColor['value'] = useColorScheme() ?? 'light';
  const theme: Theme['value'] = useSelector((state: RootState) => state.theme);
  const themeColor: ThemeColor['value'] =
    theme === 'system' ? systemTheme : theme;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <Text>LogInScreen</Text>
      <InputTextBlock
        value={email}
        setValue={(newValue: string) => setEmail(newValue)}
        theme={themeColor}
        type="email"
        placeHolder="email"
      />
      <InputTextBlock
        value={password}
        setValue={(newValue: string) => setPassword(newValue)}
        theme={themeColor}
        type="password"
        placeHolder="password"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({container: {}});
