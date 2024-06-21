import 'react-native-gesture-handler';
import AppComponent from './src/components/AppComponent';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}
