/**
 * Network utility
 * Created by : Gautam Sharma
 */

import { NetInfo } from "react-native";
import * as Log from "./AppLogger";
import Utils from "./Utils";

// check is Internet connected or not
const isNetworkConnected = () => NetInfo.isConnected.fetch();

// check is WIFI connected or not
const isWifiConnected = async () => {
  return new Promise(async (resolve, reject) => {
    var conInfo = await NetInfo.getConnectionInfo();
    if (conInfo) {
      Log.debug("type " + conInfo.type);
      Log.debug("effectiveType " + conInfo.effectiveType);
      if ("wifi" === conInfo.type) {
        Log.debug("Wifi connected");
        return resolve(true);
      } else {
        Log.debug("Wifi not connected");
        return resolve(false);
      }
    } else {
      return reject("");
    }
  });
};

// check is Mobile Network connected or not
const isMobileDataConnected = async () => {
  return new Promise(async (resolve, reject) => {
    var conInfo = await NetInfo.getConnectionInfo();
    if (conInfo) {
      Log.debug("type " + conInfo.type);
      Log.debug("effectiveType " + conInfo.effectiveType);
      if ("cellular" === conInfo.type) {
        Log.debug("Mobile data connected");
        return resolve(true);
      } else {
        Log.debug("Mobile data not connected");
        return resolve(false);
      }
    } else {
      return reject("");
    }
  });
};

// make request and fetch the response
const makeRequest = async (url, method, params, body, headers) => {
  return new Promise(async (resolve, reject) => {
    if (!method || !url) {
      return reject("Missing params");
    }

    // Build request
    const req = {
      method: method.toUpperCase()
      // headers: {
      //     'Content-Type': 'application/json',
      // },
    };

    if (headers) {
      const object2 = Object.assign({}, headers, {
        "Content-Type": "application/json"
      });
      req.headers = object2;
    } else {
      req.headers = {
        "Content-Type": "application/json"
      };
    }

    Log.log("Request header ", JSON.stringify(req.headers));
    Log.log("Request method ", JSON.stringify(req.method));
    Log.log("Request url ", JSON.stringify(url));

    if (body) {
      req.body = JSON.stringify(body);
      Log.log("Request ", JSON.stringify(body));
    }

    let urlParams = "";
    if (params) {
      if (typeof params === "object") {
        // Add the params as a query string
        const str = [];

        Object.keys(params).forEach(p => {
          const k = p;
          const v = params[p];
          str.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
        });

        str.join("&");

        urlParams = `?${str}`;
      } else if (typeof params === "string" || typeof params === "number") {
        urlParams = `/${params}`;
      }
    }

    // Make the request
    const thisUrl = url + urlParams;
    return await fetch(thisUrl, req)
      .then(async rawRes => {
        if (rawRes.status >= 200 && rawRes.status < 300) {
          let jsonRes = {};
          jsonRes = await rawRes.json();
          return jsonRes;
        } else {
          var error = new Error(rawRes.statusText || rawRes.status);
          const res = await rawRes.json();
          error.response = res;
          error.statusCode = rawRes.status;
          error.statusText = rawRes.statusText;
          throw error;
        }
      })
      .then(res => {
        Log.log(JSON.stringify(res));
        return resolve(res);
      })
      .catch(err => {
        Log.log(err);
        return reject(err);
      });
  });
};

// multipart request and fetch the response
const multiPartRequest = async (url, method, body, headers) => {
  return new Promise(async (resolve, reject) => {
    if (!method || !url) {
      return reject("Missing params");
    }

    // Build request
    const req = {
      method: method.toUpperCase()
    };

    if (headers) {
      const object2 = Object.assign({}, headers, {
        "Content-Type": "multipart/form-data"
      });
      req.headers = object2;
    } else {
      req.headers = {
        "Content-Type": "multipart/form-data"
      };
    }

    Log.log("Request header ", JSON.stringify(req.headers));
    Log.log("Request method ", JSON.stringify(req.method));
    Log.log("Request url ", JSON.stringify(url));

    if (body) {
      req.body = body;
      Log.log("Request body ", body);
    }

    // Make the request
    return await fetch(url, req)
      // .then(handleResponse)
      .then(async rawRes => {
        if (rawRes.status >= 200 && rawRes.status < 300) {
          let jsonRes = {};
          jsonRes = await rawRes.json();
          return jsonRes;
        } else {
          var error = new Error(rawRes.statusText || rawRes.status);
          const res = await rawRes.json();
          error.response = res;

          throw error;
        }

        //   if (rawRes.ok) {
        //     let jsonRes = {};
        //     jsonRes = await rawRes.json();
        //     return jsonRes;
        //   } else {
        //     const error = Object.assign({}, rawRes, {
        //         status: rawRes.status,
        //         statusText: rawRes.statusText,
        //     });

        //     return reject(error);
        //   }
      })

      .then(res => {
        Log.log(JSON.stringify(res));
        return resolve(res);
      })
      .catch(err => {
        Log.log(err);
        return reject(err);
      });
  });
};

function handleResponse(response) {
  return response.json().then(json => {
    if (!response.ok) {
      const error = Object.assign({}, json, {
        status: response.status,
        statusText: response.statusText
      });

      return Promise.reject(error);
    }
    return json;
  });
}

/**
 * timeout(1000, fetch('/hello')).then(function(response) {
  // process response
    }).catch(function(error) {
    // might be a timeout error
    })
 * @param {*} ms 
 * @param {*} promise 
 */
const timeout = (ms, promise) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error("timeout"));
    }, ms);
    promise.then(resolve, reject);
  });
};

export {
  isNetworkConnected,
  isWifiConnected,
  isMobileDataConnected,
  makeRequest,
  multiPartRequest,
  timeout
};
