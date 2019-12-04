/**
 * Toast Message Utility
 * Created by: Gautam Sharma
 */

import Toast from 'react-native-simple-toast';

const showToast = (message) => {
    Toast.show(message, Toast.SHORT);
}

const showLongToast = (message) => {
    Toast.show(message, Toast.LONG);
}

export {
    showToast,
    showLongToast,
}