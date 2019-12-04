/*
 * File Description
 * Reactotron config file
 *
 * Created on Thu Sep 19 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

import Reactotron, {
  openInEditor,
  asyncStorage,
  networking,
} from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import {name as appName} from '../../../../app.json';
import Config from './Config';

if (Config.useReactotron) {
  // First, set some configuration settings on how to connect to the app
  Reactotron.configure({
    name: appName,
    // host: "10.0.96.71",
    port: 9090,
  })
    .use(reduxPlugin()) // for redux log
    .use(sagaPlugin()) // <-- for saga
    .use(openInEditor()) // click on the error line of code to have the file open in your editor.
    .use(asyncStorage()) //  allows you to track AsyncStorage
    .use(networking()) // to trace your network request
    .useReactNative({
      asyncStorage: {ignore: ['secret']},
      networking: {
        // optionally, you can turn it off with false.
        ignoreUrls: /symbolicate/,
      },
    })
    .connect()
    .clear();

  console.tron = Reactotron;
}
