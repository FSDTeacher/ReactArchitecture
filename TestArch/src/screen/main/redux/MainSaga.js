/*
 * File Description
 * Saga for Main
 *
 * Created on Fri Sep 27 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */
import Utils from '../../../library/utility';

import {
  delay,
  takeEvery,
  takeLatest,
  put,
  take,
  all,
  select,
  call,
  fork,
} from 'redux-saga/effects';

// Worker: For Lead List Api Call
function* countIncrement(action) {
  yield put({type: 'COUNTER_INCREMENT'});
}

function* countDecrement(action) {
  yield put({type: 'COUNTER_DECREMENT'});
}

// Watcher: For Lead List Api Call
export function* incrementCount() {
  // Take Last Action Only
  yield takeEvery('INCREMENT_COUNT', countIncrement);
}

// Watcher: For Lead List Api Call
export function* decrmentCount() {
  // Take Last Action Only
  yield takeEvery('DECREMENT_COUNT', countDecrement);
}
