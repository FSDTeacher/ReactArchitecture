/*
 * File Description
 * Redux Store for Application
 *
 * Created on Thu Sep 19 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';

import '@library/config/ReactotronConfig';
import Reactotron from 'reactotron-react-native';

import createReduxWaitForMiddleware from 'redux-wait-for-action';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import mainReducer from '../main/redux/Reducer';

import Config from '../../library/config/Config';

// Imports: Redux Root Saga
import {rootSaga} from './Sagas';

// create our new saga monitor
const sagaMonitor = Config.useReactotron ? Reactotron.createSagaMonitor() : {};

// Middleware: Redux Saga
const sagaMiddleware = Config.useReactotron
  ? createSagaMiddleware({sagaMonitor})
  : createSagaMiddleware();

const waitForActionMiddleware = createReduxWaitForMiddleware();

const appReducer = combineReducers({
  main: mainReducer,
});

const middleWares = [];

middleWares.push(thunk);
middleWares.push(sagaMiddleware);
middleWares.push(waitForActionMiddleware);

if (Config.reduxLogging) {
  middleWares.push(logger);
}

const rootReducer = (state, action) => {
  const newState = action.type === 'RESET' ? undefined : state;
  return appReducer(newState, action);
};

const store = Config.useReactotron
  ? createStore(
      rootReducer,
      compose(
        applyMiddleware(...middleWares),
        Reactotron.createEnhancer(),
      ),
    )
  : createStore(rootReducer, compose(applyMiddleware(...middleWares)));

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

export default store;
