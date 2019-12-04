/*
 * File Description
 * Main App Saga
 *
 * Created on Thu Sep 26 2019
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
function* getDetailsAsync(action) {
  const {details} = action;
  try {
    yield put(details.evnets.request());

    const state = yield select();
    Utils.Log.log('state', state);

    const respone = yield call(Utils.SagaUtility.get, details.url);

    // const [res1, res2, res3] = yield all([
    //   call(
    //     Utils.SagaUtility.getRequest,
    //     'https://jsonplaceholder.typicode.com/todos/1',
    //   ),
    //   call(
    //     Utils.SagaUtility.getRequest,
    //     'https://jsonplaceholder.typicode.com/todos/2',
    //   ),
    //   call(
    //     Utils.SagaUtility.getRequest,
    //     'https://jsonplaceholder.typicode.com/todos/3',
    //   ),
    // ]);

    // Utils.Log.log('res1', res1);
    // Utils.Log.log('res2', res2);
    // Utils.Log.log('res3', res3);

    yield put(details.evnets.success(respone));
  } catch (error) {
    if (
      error instanceof Object &&
      error.response &&
      error.response.statusCode !== undefined &&
      error.response.statusCode == 401
    ) {
      yield put(details.evnets.sessionexpire());
    }
    yield put(details.evnets.failure(error));
  }
}

// Watcher: For Lead List Api Call
export function* watchGetDetails() {
  // Take Last Action Only
  yield takeLatest('API_REQUEST_SAGA', getDetailsAsync);
}
