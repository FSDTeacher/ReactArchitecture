/**
 * Pref Utility
 * Created by: Gautam Sharma
 */
import { AsyncStorage } from 'react-native';
import * as Log from './AppLogger';

/**
 * 
 * @param {key} key 
 * @param {default value} defaultValue 
 */
const getAsync = async (key: string, defaultValue) => {
    try {
        const retrievedItem = await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        return item;
    } catch (error) {
        Log.error(error.message);
    }
    return JSON.parse(defaultValue);
}

/**
 * 
 * @param {Key} key 
 * @param {value} value 
 */
const setAsync = async (key: string, value) => {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
        Log.error(error.message);
    }
}

/**
 * 
 * @param {Key} key 
 */
const get = (key: string) => {
    return AsyncStorage.getItem(key);
}

/**
 * 
 * @param {key} key 
 * @param {value} value 
 */
const set = (key: string, value) => {
    AsyncStorage.setItem(key, JSON.stringify(value));
}

/**
 * 
 */
const reset = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.clear(() => {
            return resolve(true);
        })
    });
}

/**
 * 
 * @param { ['Key1', 'key2'] } keys 
 */
const multiGet = (keys) => {
    return AsyncStorage.multiGet(keys);
}

/**
 * 
 * @param { [['Key1', 'value1'], ['Key2', 'value2']] } keys 
 */
const multiSet = (keys) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.multiSet(keys)
            .then(value => {
                resolve(value)
            }).catch(err => {
                reject(err)
            })
    })
}

/**
 * 
 * @param { key } key 
 */
const remove = (key) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.removeItem(key)
            .then(value => {
                resolve(value)
            }).catch(err => {
                reject(err)
            })
    });
}

/**
 * 
 * @param { ['Key1', 'key2'] } keys 
 */
const multiRemove = (keys) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.multiRemove(keys)
            .then(value => {
                resolve(value)
            }).catch(err => {
                reject(err)
            })
    });
}

export {
    get,
    getAsync,
    set,
    setAsync,
    reset,
    multiGet,
    multiSet,
    remove,
    multiRemove,
}
