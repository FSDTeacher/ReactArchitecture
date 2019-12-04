/*
 * File Description
 * Main App Reducer
 *
 * Created on Thu Sep 19 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

import ActType from './Types';

const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  console.log('reducer');
  switch (action.type) {
    case ActType.COUNTER_INCREMENT: {
      newState.count = state.count + 1;
      break;
    }
    case ActType.COUNTER_DECREMENT: {
      newState.count = state.count - 1;
      break;
    }
    default:
      break;
  }
  return newState;
}
