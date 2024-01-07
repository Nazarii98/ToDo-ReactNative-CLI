/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import store from './scr/store/store';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

if (!firebase.apps.length) {
  firebase.initializeApp({});
}

GoogleSignin.configure({
  webClientId:
    '777996315566-4ag9rg7pav02inqsua1bsmgatgqj63kg.apps.googleusercontent.com',
  offlineAccess: true,
});

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
