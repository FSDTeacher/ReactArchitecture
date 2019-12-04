/*
 * File Description
 * Main View Model Class (Handler)
 *
 * Created on Thu Sep 19 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

//import liraries
import BaseViewModel from '../../library/component/base/BaseViewModel';
import * as Actions from './redux/Actions';
import Utils from '../../library/utility';
import OfflineFirstAPI from 'react-native-offline-api';

const API_OPTIONS = {
  domains: {
    default: 'http://dummy.restapiexample.com',
    staging: 'http://dummy.restapiexample.com',
  },
  prefixes: {default: '/api/v1', apiV2: '/api/v1'},
  debugAPI: true,
  printNetworkRequests: true,
};

const API_SERVICES = {
  articles: {
    path: 'articles',
  },
  documents: {
    domain: 'staging',
    prefix: 'apiV2',
    path: 'documents/:documentId',
    disableCache: true,
  },
  create: {
    path: 'create',
    method: 'POST',
    expiration: 1000,
  },
};

const api = new OfflineFirstAPI(API_OPTIONS, API_SERVICES);

// create a Class
class MainViewModel extends BaseViewModel {
  constructor(mainNavigator) {
    super();
    this.nav = mainNavigator;
    this.nav.showError('dsfsa');
  }

  async fetchSampleData() {
    try {
      const request = await api.fetch('create', {
        fetchOptions: {
          body: {name: 'test', salary: '123', age: '23'},
        },
      });

      //api.clearCache('create');
      //const request = await api.fetch('create');

      Utils.Toast.showToast('Our fetched document data' + request);
    } catch (err) {
      // Handle any error
      Utils.Toast.showToast('Old Count ' + err);
    }
  }

  onIncrementPress() {
    //this.fetchSampleData();

    let {count} = this.getCurrentState().main;
    Utils.Toast.showToast('Old Count ' + count);
    this.dispatchEvent(Actions.incrementSaga());
    // this.dispatchEvent(Actions.increment());
    let details = {
      url: 'https://jsonplaceholder.typicode.com/todos/2',
      evnets: Actions.actApiRequest,
    };
    this.dispatchEvent(Actions.apiCall(details))
      .then(res => {
        Utils.Log.log('UI res', res);
      })
      .catch(err => {
        Utils.Log.log('UI err', err);
      });
  }

  onDecrementPress() {
    let {count} = this.getCurrentState().main;
    Utils.Toast.showToast('Old Count ' + count);
    this.dispatchEvent(Actions.decrementSaga());

    // this.dispatchEvent(Actions.decrement());

    let details = {
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      evnets: Actions.actApiRequest,
    };
    this.dispatchEvent(Actions.apiCall(details))
      .then(res => {
        Utils.Log.log('UI res', res);
      })
      .catch(err => {
        Utils.Log.log('UI err', err);
      });
  }
}

//make this component available to the app
export default MainViewModel;
