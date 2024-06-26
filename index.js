import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppRedux);
