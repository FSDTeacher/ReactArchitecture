/*
 * File Description
 * Config For Axios
 *
 * Created on Thu Sep 26 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */
import * as axios from 'react-native-axios';
import Utils from '../utility';

var instance = axios.create();
// instance.defaults.baseURL = "";
instance.defaults.timeout = 60 * 1000; // 1 Minute
instance.defaults.headers.post['Content-Type'] =
  'application/json; charset=utf-8';

instance.interceptors.request.use(request => requestHandler(request));

instance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
);

const requestHandler = request => {
  // Modify request here
  // request.headers['X-CodePen'] = 'https://codepen.io/teroauralinna/full/vPvKWe';
  return request;
};

const errorHandler = error => {
  return Promise.reject({...error});
};

const successHandler = response => {
  return response;
};

export default instance;
