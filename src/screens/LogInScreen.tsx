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
import ButtonBlock from '../components/ButtonBlock';

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
      <ButtonBlock title="Log In" action={() => {}} theme={themeColor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
