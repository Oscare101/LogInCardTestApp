import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from '../navigation/MainNavigation';

export default function AppComponent() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
