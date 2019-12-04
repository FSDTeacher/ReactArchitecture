/*
 * File Description
 * Base View Model Class
 *
 * Created on Thu Sep 19 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

//import liraries
import store from '@screen/application/AppStore';

// create a Class
class BaseViewModel {
  getStore() {
    return store;
  }

  dispatchEvent(event) {
    return store.dispatch(event);
  }

  getCurrentState() {
    return store.getState();
  }
}

//make this component available to the app
export default BaseViewModel;
