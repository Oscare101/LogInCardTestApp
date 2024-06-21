import FeedsScreen from '../screens/FeedsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import TabComponent from './TabComponent';
import {Theme, ThemeColor} from '../constants/interfaces';
import {useColorScheme} from 'react-native';
import colors from '../constants/colors';

const Tab = createMaterialTopTabNavigator();

export default function MainTopNavigation() {
  const systemTheme: ThemeColor['value'] = useColorScheme() ?? 'light';
  const theme: Theme['value'] = useSelector((state: RootState) => state.theme);
  const themeColor: ThemeColor['value'] =
    theme === 'system' ? systemTheme : theme;
  return (
    <Tab.Navigator
      initialRouteName="FeedsScreen"
      screenOptions={{
        tabBarPressColor: '#00000000',
        tabBarIndicatorStyle: {backgroundColor: colors[themeColor].main},
        tabBarStyle: {backgroundColor: colors[themeColor].bg},
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TabComponent
              title="Feeds"
              icon="home"
              focused={focused}
              theme={themeColor}
            />
          ),
        }}
        name="FeedsScreen"
        component={FeedsScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TabComponent
              title="Profile"
              icon="profile"
              focused={focused}
              theme={themeColor}
            />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
