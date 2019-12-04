/*
 * File Description
 * App Logger
 *
 * Created on Thu Sep 19 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

import Reactotron from 'reactotron-react-native';
import Config from '../config/Config';

const log = (text, ...args) => {
  if (Config.showLog) {
    console.log(text, args);
    if (Config.useReactotron) {
      if (args.length > 0) {
        console.tron.log(text, args);
      } else {
        console.tron.log(text);
      }
    }
  }
};

const error = (text, ...args) => {
  if (Config.showLog) {
    console.error(text, args);
    if (Config.useReactotron) {
      if (args.length > 0) {
        console.tron.error(text, args);
      } else {
        console.tron.error(text);
      }
    }
  }
};

const info = (text, ...args) => {
  if (Config.showLog) {
    console.info(text, args);
    if (Config.useReactotron) {
      if (args.length > 0) {
        console.tron.info(text, args);
      } else {
        console.tron.info(text);
      }
    }
  }
};

const warn = (text, ...args) => {
  if (Config.showLog) {
    console.warn(text, args);
    if (Config.useReactotron) {
      if (args.length > 0) {
        console.tron.warn(text, args);
      } else {
        console.tron.warn(text);
      }
    }
  }
};

const trace = (text, ...args) => {
  if (Config.showLog) {
    console.trace(text, args);
    if (Config.useReactotron) {
      if (args.length > 0) {
        console.tron.trace(text, args);
      } else {
        console.tron.trace(text);
      }
    }
  }
};

const debug = (text, ...args) => {
  if (Config.showLog) {
    console.debug(text, args);
    if (Config.useReactotron) {
      if (args.length > 0) {
        console.tron.debug(text, args);
      } else {
        console.tron.debug(text);
      }
    }
  }
};

const logImage = url => {
  if (Config.showLog) {
    const opt = {
      uri: url,
    };
    if (Config.useReactotron) {
      Reactotron.image(opt);
    }
  }
};

export {log, error, warn, trace, debug, info, logImage};
