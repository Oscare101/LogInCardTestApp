import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import MainNavigation from '../navigation/MainNavigation';
import {StatusBar, useColorScheme} from 'react-native';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import {Theme, ThemeColor} from '../constants/interfaces';

export default function AppComponent() {
  const systemTheme: ThemeColor['value'] = useColorScheme() ?? 'light';
  const theme: Theme['value'] = useSelector((state: RootState) => state.theme);
  const themeColor: ThemeColor['value'] =
    theme === 'system' ? systemTheme : theme;

  return (
    <>
      <StatusBar
        barStyle={themeColor === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors[themeColor].bg}
      />
      <NavigationContainer
        theme={themeColor === 'dark' ? DarkTheme : DefaultTheme}>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
}
