/*
 * File Description
 * Main App Reducer All Types
 *
 * Created on Thu Sep 19 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

import Utils from '../../../library/utility';

const Types = {
  REQUEST: '_REQUEST',
  SUCCESS: '_SUCCESS',
  FAILURE: '_FAILURE',

  COUNTER_INCREMENT: 'COUNTER_INCREMENT',
  COUNTER_DECREMENT: 'COUNTER_DECREMENT',

  DECREMENT_COUNT: 'DECREMENT_COUNT',
  INCREMENT_COUNT: 'INCREMENT_COUNT',

  API_REQUEST_SAGA: 'API_REQUEST_SAGA',
  API_REQUEST: Utils.Redux.asyncActionNames('API_REQUEST'),
  // API_REQUEST: createRequestTypes('API_REQUEST'),
};

export default Types;
