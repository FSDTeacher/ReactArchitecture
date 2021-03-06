var hash = require('object-hash');
var extendPrototype = require('./extendPrototype');
import CacheStore from '../AsyncCacheStore';

/**
 *
 * @param {*} config
 * Customise key for chache response.
 */
function defaultCacheIdentifer(config) {
  return {
    method: config.method,
    url: config.url,
    params: config.params,
    data: config.data,
  };
}
/**
 *
 * @param {*} response
 * Customise your response for chache response {Value}
 */
function defaultResponseCopier(response) {
  return {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
  };
}

function Cachios(axiosInstance, nodeCacheConf) {
  this.axiosInstance = axiosInstance;
  this.cache = CacheStore;
  // requests that have been fired but have not yet been completed
  this.stagingPromises = {};

  this.getCacheIdentifier = defaultCacheIdentifer;
  this.getResponseCopy = defaultResponseCopier;
}

Cachios.prototype.getCacheKey = function(config) {
  return hash(this.getCacheIdentifier(config));
};

Cachios.prototype.getCachedValue = function(cacheKey) {
  let item = this.cache.get(cacheKey);
  return item;
};

Cachios.prototype.setCachedValue = function(cacheKey, value, ttl) {
  return this.cache.set(cacheKey, value, ttl);
};

Cachios.prototype.request = async function request(config) {
  var ttl = config.ttl;
  var force = config.force || false;
  var cacheKey = this.getCacheKey(config);
  var cachedValue = await this.getCachedValue(cacheKey);
  // if we find a cached value, return it immediately
  if (cachedValue !== undefined && force !== true) {
    return Promise.resolve(cachedValue);
  }

  // if we find a staging promise (a request that has not yet completed, so it is not yet in cache),
  // return it.
  if (this.stagingPromises[cacheKey]) {
    return this.stagingPromises[cacheKey];
  }

  // otherwise, send a real request and cache the value for later
  var me = this;
  var pendingPromise = this.axiosInstance.request(config);

  // store the promise in stagingPromises so it can be used before completing
  // we don't store it in the cache immediately because:
  // - we don't want it in the cache if the request fails
  // - our cache backend may not support promises
  this.stagingPromises[cacheKey] = pendingPromise;

  // once the request successfully copmletes, store it in cache
  pendingPromise
    .then(function(resp) {
      me.setCachedValue(cacheKey, me.getResponseCopy(resp), ttl);
    })
    .catch(function() {})
    .then(function() {
      // always delete the staging promise once the request is complete
      // (finished or failed)
      delete me.stagingPromises[cacheKey];
    });
  // return the original promise
  return pendingPromise;
};

extendPrototype(Cachios.prototype);

module.exports = Cachios;
