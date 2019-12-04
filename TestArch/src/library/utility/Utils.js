/**
 * Common Place for all Utility Functions
 * Created by: Gautam Sharma
 */

import * as Log from './AppLogger';
import * as Func from './CommonFunc';
import * as Toast from './ToastUtility';
import * as Network from './NetworkUtility';
import * as Storage from './PrefUtility';
import * as Redux from './ReduxUtility';
import Api from './APIUtility';
import * as Constant from './Constants';
import * as ValidationFunc from './ValidationUtility';
import * as SagaUtility from './SagaUtility';

const Utils = {
  Log,
  Func,
  Toast,
  Network,
  Storage,
  Redux,
  Api,
  Constant,
  ValidationFunc,
  SagaUtility,
};

export default Utils;
