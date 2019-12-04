/*
 * File Description
 * Utility class for Saga
 *
 * Created on Thu Sep 26 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

import axios from '../config/AxiosConfig';
import Cachios from '../../library/config/AxiosCache';
import Utils from '../../library/utility';
export const SUCCESS = 200;
export const FAIL = 404;

const MIME_MULTI_PART = 'multipart/form-data';
const MIME_JSON = 'application/json';

export function* post(endpoint, requestData, requestHeaders) {
  try {
    const response = yield postRequest(
      endpoint,
      requestData,
      requestHeaders,
      MIME_JSON,
    );
    let responseOK =
      response && response.status >= 200 && response.status < 300;

    let data = yield response.data;
    if (responseOK) {
      // return [data, response];
      return data;
    } else {
      var error = new Error();
      error.response = data;
      error.statusCode = rawRes.status;
      error.statusText = rawRes.statusText;
      throw error;
    }
  } catch (e) {
    throw e;
  }
}

export function* multiPart(endpoint, requestData, requestHeaders) {
  try {
    const response = yield postRequest(
      endpoint,
      requestData,
      requestHeaders,
      MIME_MULTI_PART,
    );
    let responseOK =
      response && response.status >= 200 && response.status < 300;

    let data = yield response.data;
    if (responseOK) {
      // return [data, response];
      return data;
    } else {
      var error = new Error();
      error.response = data;
      error.statusCode = rawRes.status;
      error.statusText = rawRes.statusText;
      throw error;
    }
  } catch (e) {
    throw e;
  }
}

export function* get(endpoint, requestHeaders) {
  try {
    const response = yield getRequest(endpoint, requestHeaders);
    Utils.Log.log('response', response);
    let responseOK =
      response && response.status >= 200 && response.status < 300;

    let data = yield response.data;

    if (responseOK) {
      // return [data, response];
      return data;
    } else {
      var error = new Error();
      error.response = data;
      error.statusCode = response.status;
      error.statusText = response.statusText;
      throw error;
    }
  } catch (e) {
    throw e;
  }
}

export function getRequest(endpoint, requestHeaders) {
  let options;
  if (requestHeaders) {
    const allHeaders = Object.assign({}, requestHeaders, {
      'Content-Type': 'application/json',
    });
    options = {
      headers: allHeaders,
    };
  }

  // Cachios.get('https://jsonplaceholder.typicode.com/posts/1', {
  //   ttl: 300 /* seconds */,
  // }).then(console.log);
  let response = Cachios.get(endpoint, {...options, force: false, ttl: 50});
  Utils.Log.log('Cachios.get(endpoint', response);
  return response;
  // return axios.get(endpoint, options);
}

export function postRequest(
  endpoint,
  requestData,
  requestHeaders,
  contentType,
) {
  let options;
  if (requestHeaders) {
    const allHeaders = Object.assign({}, requestHeaders, {
      'Content-Type': contentType,
    });
    options = {
      headers: allHeaders,
    };
  } else {
    options = {
      headers: {'Content-Type': contentType},
    };
  }
  let response = Cachios.post(endpoint, requestData, {
    ...options,
    force: true,
    ttl: 30,
  });
  Utils.Log.log('Cachios.post', response);
  return response;
  // return axios.post(endpoint, requestData, options);
}
