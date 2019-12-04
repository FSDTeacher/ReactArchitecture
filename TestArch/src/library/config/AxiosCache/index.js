import axios from '../../config/AxiosConfig';
var Cachios = require('./cachios');

var instance = new Cachios(axios);

// allow for similar axios syntax
instance.create = function create(axiosInstance, nodeCacheConf) {
  Utils.Log.log('Cachios axiosInstance');
  return new Cachios(axiosInstance, nodeCacheConf);
};

module.exports = instance;
