/*
 * File Description
 * Main App Reducer All Actions
 *
 * Created on Thu Sep 19 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

// import
import ActType from './Types';
import Utils from '../../../library/utility';
import {WAIT_FOR_ACTION, ERROR_ACTION} from 'redux-wait-for-action';

function action(type, payload = {}) {
  return {type, ...payload};
}

// Actions
export const increment = () => ({
  type: ActType.COUNTER_INCREMENT,
});

export const decrement = () => ({
  type: ActType.COUNTER_DECREMENT,
});

export const incrementSaga = () => ({
  type: ActType.INCREMENT_COUNT,
});

export const decrementSaga = () => ({
  type: ActType.DECREMENT_COUNT,
});

export const apiCall = details => ({
  type: ActType.API_REQUEST_SAGA,
  details,
  [WAIT_FOR_ACTION]: ActType.API_REQUEST.success,
  [ERROR_ACTION]: ActType.API_REQUEST.failure,
});

export const actApiRequest = Utils.Redux.buildAsyncActions(ActType.API_REQUEST);
