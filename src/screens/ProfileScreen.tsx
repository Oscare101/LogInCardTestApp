import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Theme, ThemeColor, UserData} from '../constants/interfaces';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import colors from '../constants/colors';
import {MMKV} from 'react-native-mmkv';
import ProfileCard from '../components/ProfileCard';
import ButtonBlock from '../components/ButtonBlock';
import ThemeBlock from '../components/ThemeBlock';

export const storage = new MMKV();
const width = Dimensions.get('screen').width;

export default function ProfileScreen({navigation}: any) {
  const systemTheme: ThemeColor['value'] = useColorScheme() ?? 'light';
  const theme: Theme['value'] = useSelector((state: RootState) => state.theme);
  const themeColor: ThemeColor['value'] =
    theme === 'system' ? systemTheme : theme;

  const [user, setUser] = useState<UserData>({
    name: 'User Name',
    imageUrl: 'https://reqres.in/img/faces/1-image.jpg',
    email: '',
  });

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const userEmail = storage.getString('email');
        setUser({...user, email: userEmail || ''});
      } catch (error) {
        console.error('Error fetching username from MMKV:', error);
      }
    };

    fetchUsername();
  }, []);

  const logOutFunc = useCallback(() => {
    storage.set('email', '');
    storage.set('password', '');
    navigation.reset({
      index: 0,
      routes: [{name: 'LogInScreen'}],
    });
  }, []);

  const titleStyles = useMemo(() => {
    return {color: colors[themeColor].error};
  }, [themeColor]);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <ProfileCard theme={themeColor} user={user} />
      <ThemeBlock themeColor={themeColor} theme={theme} />
      <View style={{flex: 1}} />
      <ButtonBlock
        title="Log Out"
        action={logOutFunc}
        theme={themeColor}
        titleStyle={titleStyles}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: width * 0.05,
  },
});
