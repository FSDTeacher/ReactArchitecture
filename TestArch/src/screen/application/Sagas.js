/*
 * File Description
 * Combine All the Saga
 *
 * Created on Thu Sep 26 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import {watchGetDetails} from '../main/redux/Saga';
import {decrmentCount, incrementCount} from '../main/redux/MainSaga';
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(watchGetDetails), fork(decrmentCount), fork(incrementCount)]);
}
