import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import { persistedStore, store } from './src/redux/store/MyStore';
import { PersistGate } from 'redux-persist/integration/react';



const App = () => {


  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
      <AppNavigator/>
      </PersistGate>
      
    </Provider>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
