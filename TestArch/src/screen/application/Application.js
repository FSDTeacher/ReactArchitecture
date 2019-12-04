/*
 * File Description
 * Main Application Starting point
 *
 * Created on Thu Sep 19 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

//import liraries
import React from 'react';
import BaseApplication from '@library/component/base/BaseApplication';
import {Provider} from 'react-redux';
import store from './AppStore';
import MainScreen from '../main';
// import BaseViewModel from '../../library/component/base/BaseViewModel';

// create a component
class Application extends BaseApplication {
  render() {
    return (
      <Provider store={store}>
        <MainScreen
        // ref={navigatorRef => {
        //   BaseViewModel.setStore(store);
        // }}
        />
      </Provider>
    );
  }
}

//make this component available to the app
export default Application;
