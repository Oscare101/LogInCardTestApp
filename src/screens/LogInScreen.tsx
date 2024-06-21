import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {Theme, ThemeColor} from '../constants/interfaces';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import colors from '../constants/colors';
import InputTextBlock from '../components/InputTextBlock';
import ButtonBlock from '../components/ButtonBlock';
import rules from '../constants/rules';
import text from '../constants/text';
import ErrorTitleBlock from '../components/ErrorTitleBlock';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export default function LogInScreen({navigation}: any) {
  const systemTheme: ThemeColor['value'] = useColorScheme() ?? 'light';
  const theme: Theme['value'] = useSelector((state: RootState) => state.theme);
  const themeColor: ThemeColor['value'] =
    theme === 'system' ? systemTheme : theme;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');

  function LogInFunc() {
    const emailCheck = rules.emailCheck.test(email);
    const passwordCheck = rules.passwordCheck.test(password);

    if (emailCheck && passwordCheck) {
      storage.set('email', email);
      storage.set('password', password);
      navigation.reset({
        index: 0,
        routes: [{name: 'MainTopNavigation'}],
      });
    } else {
      setErrorEmail(!emailCheck ? text.emailError : '');
      setErrorPassword(!passwordCheck ? text.password : '');
    }
  }

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <InputTextBlock
        value={email}
        setValue={(newValue: string) => setEmail(newValue.replaceAll(' ', ''))}
        theme={themeColor}
        type="email"
        placeHolder="email"
      />
      <ErrorTitleBlock title={errorEmail} theme={themeColor} />
      <InputTextBlock
        value={password}
        setValue={(newValue: string) =>
          setPassword(newValue.replaceAll(' ', ''))
        }
        theme={themeColor}
        type="password"
        placeHolder="password"
      />
      <ErrorTitleBlock title={errorPassword} theme={themeColor} />
      <ButtonBlock title="Log In" action={LogInFunc} theme={themeColor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
