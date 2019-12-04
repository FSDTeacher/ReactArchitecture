/*
 * File Description
 * Validation Utils
 *
 * Created on Wed Aug 14 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

const isEmailValid = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email) == false;
};

const isMobileValid = mobileNumber => {
  let mobile_regex = "";
  if (__DEV__) {
    mobile_regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[123456789]\d{9}$/;
  } else {
    mobile_regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  }
  return mobile_regex.test(mobileNumber) == true;
};

const isUserNameValid = name => {
  let stringRegex = /^[a-zA-Z ]+$/;
  return stringRegex.test(name) == false;
};

const isEmptyString = str => {};

const isValidPinCode = pinCode => {
  let pinCode_regex = /^\d{6}$/;
  return stringRegex.test(pinCode) == false;
};

const isValidPanNumber = panNumber => {
  let pan_regex = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/;
  return stringRegex.test(panNumber) == false;
};

const isValidNumber = data => {
  if (data === undefined || data === null || data == 0) return false;
  else return true;
};

const isValidString = data => {
  if (data === undefined || data === null || data === "") return false;
  else return true;
};

export {
  isEmailValid,
  isMobileValid,
  isUserNameValid,
  isEmptyString,
  isValidPinCode,
  isValidPanNumber,
  isValidNumber,
  isValidString
};
/*
 * File Description
 *
 *
 * Created on Wed Aug 14 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */
