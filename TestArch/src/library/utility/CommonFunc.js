/**
 * Common Functions
 * Created by: Gautam Sharma
 */

import * as Constant from "./Constants";
import R from "../../res";
import Utils from "../../library/utility";

const currencyFormatter = value => {
  if (value) {
    var x = value.toString();
    var afterPoint = "";
    if (x.indexOf(".") > 0) afterPoint = x.substring(x.indexOf("."), x.length);
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      lastThree +
      afterPoint;
    return res;
  }
  return "0";
};

const currencyFormatterWithSign = value => {
  var res = "\u20B9" + " " + currencyFormatter(value);
  return res;
};

const nFormatter = value => {
  if (num >= 10000000) {
    return (num / 10000000).toFixed(1).replace(/\.0$/, "") + "CR +";
  }
  if (num >= 100000) {
    return (num / 100000).toFixed(1).replace(/\.0$/, "") + "L +";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K +";
  }
  return num;
};

const nFormatterWithSign = value => {
  var res = "\u20B9" + " " + nFormatter(value);
  return res;
};

const getRandomNumber = preFix => {
  var tick = new Date().getTime();
  var rand = getRand(1, 100009);

  // Utils.Log.log("rand " + rand);

  var temp = "" + tick + rand;

  let threshold = 9;
  var randomString = "";
  for (var i = 0; i < threshold; i++) {
    randomString += temp.charAt(getRand(1, temp.length - 1));
  }

  // Utils.Log.log("randomString " + randomString);

  return "" + preFix + randomString;
};

const getRand = (min, max) => {
  return Math.floor(Math.random() * (max + min));
};

const isEmptyObject = obj => {
  if (
    typeof obj === "undefined" ||
    obj == null ||
    Object.keys(obj).length === 0
  ) {
    if (typeof obj === "Array" && obj.length > 0) {
      return false;
    }
    return true;
  }
  return false;
};

const getIconNameFromProductId = id => {
  switch (id) {
    case Constant.ProductId.CAR: {
      return R.images.car;
    }
    case Constant.ProductId.TERM: {
      return R.images.term_life;
    }
    case Constant.ProductId.HEALTH: {
      return R.images.health;
    }
    case Constant.ProductId.INVESTMENT: {
      return R.images.investment;
    }
    case Constant.ProductId.TRAVEL: {
      return R.images.travel;
    }
    case Constant.ProductId.TWO_WHEELER: {
      return R.images.two_wheeler;
    }
    case Constant.ProductId.CREDIT_CARD: {
      return R.images.credit_card;
    }
    case Constant.ProductId.HOME_LOAN: {
      return R.images.home_loan;
    }
    case Constant.ProductId.PERSONAL_ACCIDENT: {
      return R.images.personal_accident;
    }
    case Constant.ProductId.CORPORATE_INS: {
      return R.images.corporate_insurance;
    }
    case Constant.ProductId.CANCER_INS: {
      return R.images.cancer;
    }
    case Constant.ProductId.HOSPITALIZATION: {
      return R.images.hospitalization;
    }
    case Constant.ProductId.SUPER_TOPUP: {
      return R.images.super_topup;
    }
    case Constant.ProductId.HOME_INS: {
      return R.images.home_insurance;
    }
    case Constant.ProductId.RSA: {
      return R.images.rsa;
    }
    case Constant.ProductId.IHO: {
      return R.images.iho;
    }
    case Constant.ProductId.COMMERCIAL: {
      return R.images.commercial;
    }
    case Constant.ProductId.DENGUE_CARE: {
      return R.images.dengue;
    }
    case Constant.ProductId.HEART: {
      return R.images.heart;
    }
    case Constant.ProductId.HEART_CANCER: {
      return R.images.heart_and_cancer;
    }
    case Constant.ProductId.LIFE: {
      return R.images.life;
    }
    default: {
      return R.images.corporate_insurance;
    }
  }
};

const getIconNameFromLoanProductId = id => {
  switch (id) {
    case Constant.LoanProductId.BUSINESS_LOAN: {
      return R.images.home_loan;
    }
    case Constant.LoanProductId.HOME_LOAN: {
      return R.images.home_loan;
    }
    case Constant.LoanProductId.LOAN_AGAINST_PROPERTY: {
      return R.images.home_loan;
    }
    case Constant.LoanProductId.PERSONAL_LOAN: {
      return R.images.home_loan;
    }
    default: {
      return R.images.corporate_insurance;
    }
  }
};

// function groupBy<T extends any, K extends keyof T>(array: T[], key: K | { (obj: T): string }): Record<string, T[]> {
//   const keyFn = key instanceof Function ? key : (obj: T) => obj[key]
//   return array.reduce(
//     (objectsByKeyValue, obj) => {
//       const value = keyFn(obj)
//       objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
//       return objectsByKeyValue
//     },
//     {} as Record<string, T[]>
//   )
// }

function groupBy(array, key) {
  const keyFn = key instanceof Function ? key : obj => obj[key];
  return array.reduce((objectsByKeyValue, obj) => {
    const value = keyFn(obj);
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
}

const getProductIdForRenewal = id => {
  switch (id) {
    case Constant.ProductId.CAR:
    case Constant.ProductId.TWO_WHEELER: {
      return 0;
    }
    case Constant.ProductId.HEALTH: {
      return 2;
    }
    default: {
      return 0;
    }
  }
};

const isAlphaNumeric = str => {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

const getProductGroupIDFromProductId = id => {
  switch (id) {
    case Constant.ProductId.TERM:
    case Constant.ProductId.INVESTMENT: {
      return Constant.ProductGroupId.TERM_INVESTMENT;
    }
    case Constant.ProductId.CAR: {
      return Constant.ProductGroupId.MOTOR;
    }
    case Constant.ProductId.TWO_WHEELER: {
      return Constant.ProductGroupId.TWO_WHEELER;
    }
    case Constant.ProductId.HEALTH: {
      return Constant.ProductGroupId.HEALTH;
    }
    case Constant.ProductId.OTHER: {
      return Constant.ProductGroupId.OTHERS;
    }
    case Constant.ProductId.COMMERCIAL: {
      return Constant.ProductGroupId.COMMERCIAL;
    }
    default: {
      return Constant.ProductGroupId.OTHERS;
    }
  }
};

const getInsurerIconFromName = (name: string) => {
  if (name) {
    let insurerName = name.toLowerCase();
    // Utils.Log.log(insurerName);
    if (insurerName.includes("icici prudential")) {
      // return 'https://www.policybazaar.com/images/product-reviews/ICICI_logo.png';
      return "http://www.salespointonline.com/storage/images/insurer/WrOCzVKcUriTa6OXxgmVOD2bKyPe8A2hK0w0wqGn.png";
    } else if (insurerName.includes("hdfc life")) {
      // return 'https://www.policybazaar.com/images/product-reviews/HDFC_Standard_logo.png';
      return "http://www.salespointonline.com/storage/images/insurer/5WCR6saes6ctrElEERoyfZhi0GBec4sILco8LrYS.png";
    } else if (insurerName.includes("max life")) {
      // return 'https://www.policybazaar.com/images/product-reviews/MAX_logo.png';
      return "http://www.salespointonline.com/storage/images/insurer/zkeHhWB7BZdAbryLBuY5sTHxRI8RAuhKVgOTym6H.png";
    } else if (insurerName.includes("aegon life")) {
      // return 'https://www.policybazaar.com/images/product-reviews/Aegon_Religare_logo.png';
      return "http://www.salespointonline.com/storage/images/insurer/DHTN5kI7n0TpKPuXLYPxDEZppXXwgAeqIO2CMcRm.png";
    } else if (insurerName.includes("pnb metlife")) {
      // return 'https://www.policybazaar.com/images/product-reviews/pnbmetlife.jpg';
      return "http://www.salespointonline.com/storage/images/insurer/HI6XJuxkOqKRMbUsgSIjikDv8ErawzrYwGCPIow1.jpeg";
    } else if (
      insurerName.includes("edelwiess") ||
      insurerName.includes("edelweiss")
    ) {
      // return 'https://www.policybazaar.com/images/product-reviews/totalsecure.jpg';
      return "http://www.salespointonline.com/storage/images/insurer/mlSpRwZk9bTtKR1LLfJkV8tkruYyR2ku8rEYrLKq.png";
    } else if (insurerName.includes("bharti axa")) {
      // return 'https://www.policybazaar.com/images/product-reviews/BhrtiAxa_life.jpg';
      return "http://www.salespointonline.com/storage/images/insurer/aGNTPdEECtV2fX1vLsHBuEMxadEJGZrtsRR6Hzex.jpeg";
    } else if (insurerName.includes("birla sun life")) {
      // return 'https://www.policybazaar.com/images/insurer-logo/aditya_birla_sun_life_logo.png';
      return "http://www.salespointonline.com/storage/images/insurer/ucFqnFsRwIQ3iFjwZosukGuanbQ31dNs624Nkg0u.png";
    } else if (insurerName.includes("sbi life")) {
      // return 'https://www.policybazaar.com/images/product-reviews/SBI_logo.png';
      return "http://www.salespointonline.com/storage/images/insurer/Om2QDSxq9h5b7PXIEqmkoY0Tx3VZhKy6EZ3QIFrO.png";
    } else if (insurerName.includes("future generali")) {
      // return 'https://www.policybazaar.com/images/product-reviews/future-generali.png';
      return "http://www.salespointonline.com/storage/images/insurer/tGQ05ZsvIYKn02YiTJAYKGgyX7Bzybe1Seg1KpN7.png";
    } else if (insurerName.includes("idbi federal life")) {
      // return 'https://www.policybazaar.com/images/product-reviews/life/IDBI-Federal-Life-Insurance.gif';
      return "http://www.salespointonline.com/storage/images/insurer/Ekjm2THkEZhfygdONd7wa5o9xpH6b3OSbqpySNB0.gif";
    } else if (insurerName.includes("bajaj allianz life")) {
      // return 'https://www.policybazaar.com/images/product-reviews/BAJAJ_logo.png';
      return "http://www.salespointonline.com/storage/images/insurer/qDa10NuME1IWNipCAxV5zD2pIfTBED4UKnuM5CLk.png";
    } else if (insurerName.includes("bajaj allianz general")) {
      // return 'https://www.policybazaar.com/images/product-reviews/BAJAJ_logo.png';
      return "http://www.salespointonline.com/storage/images/insurer/BSPEuefNFvCt3DhDCRp1kjqiu8pq0IwbwjCRgV2Z.jpeg";
    } else if (insurerName.includes("bajaj allianz")) {
      // return 'https://www.policybazaar.com/images/product-reviews/BAJAJ_logo.png';
      return "http://www.salespointonline.com/storage/images/insurer/BSPEuefNFvCt3DhDCRp1kjqiu8pq0IwbwjCRgV2Z.jpeg";
    } else if (insurerName.includes("canara hsbc obc life")) {
      // return 'https://www.policybazaar.com/images/product-reviews/CHO.png';
      return "http://www.salespointonline.com/storage/images/insurer/7va5Sr2ItVB2RMmkr51KyXQOMPXB9oog8NFlGMRm.png";
    } else if (insurerName.includes("kotak life insurance")) {
      return "https://www.policybazaar.com/images/product-reviews/kotak-Logo.png";
    } else if (insurerName.includes("dhfl pramerica life")) {
      return "https://www.policybazaar.com/images/insurer-logo/dhfl-life-insurance.jpg";
    } else if (insurerName.includes("aviva life")) {
      // return 'https://www.policybazaar.com/images/product-reviews/AVIVA_logo.png';
      return "http://www.salespointonline.com/storage/images/insurer/OTXIWnb8X1W0OsMAAe9XZY52OlKzIzTPsdV1cNPB.png";
    } else if (insurerName.includes("exide life")) {
      // return 'https://www.policybazaar.com/images/product-reviews/Exide-Life-Insurance-Company-Limited.jpg';
      return "http://www.salespointonline.com/storage/images/insurer/qeX3b2RoLIl1e3c3nX6ZsWkxMROHTLwXNLlx5lxq.jpeg";
    } else if (insurerName.includes("indiafirst life")) {
      return "https://www.policybazaar.com/images/insurer-logo/IndiaFirst_logo.png";
    } else if (insurerName.includes("reliance life")) {
      return "https://www.policybazaar.com/images/product-reviews/RELIANCE_logo.png";
    } else if (insurerName.includes("apollo munich")) {
      // return 'https://www.policybazaar.com/images/product-reviews/Apollo_Munich_buy.gif';
      return "http://www.salespointonline.com/storage/images/insurer/tTQJolLP13llW7bs0Z8B6nS0Agot7Fy6MEyRoGSe.jpeg";
    } else if (insurerName.includes("star health")) {
      return "https://www.policybazaar.com/images/product-reviews/Star_Health_buy.gif";
    } else if (insurerName.includes("religare health")) {
      return "https://www.policybazaar.com/images/product-reviews/religare.jpg";
    } else if (insurerName.includes("hdfc ergo")) {
      return "https://www.policybazaar.com/images/product-reviews/hdfcergo.jpg";
    } else if (insurerName.includes("max bupa")) {
      // return "https://www.policybazaar.com/images/product-reviews/Max_Bupa_buy.gif";
      return "http://healthcompanion.maxbupa.com/DST3/images/logo.png";
    } else if (insurerName.includes("royal sundaram")) {
      return "https://www.policybazaar.com/images/product-reviews/royal_sundaram.jpg";
    } else if (insurerName.includes("aditya birla health")) {
      return "https://www.policybazaar.com/images/product-reviews/abhi.png";
    } else if (insurerName.includes("shriram general")) {
      return "https://www.shriramgi.com/images/logo.jpg";
    } else if (insurerName.includes("united india")) {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/UIIC_.jpg/220px-UIIC_.jpg";
    } else if (insurerName.includes("national insurance")) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/National_Insurance_Company_Limited_%28logo%29.jpg/200px-National_Insurance_Company_Limited_%28logo%29.jpg";
    } else if (insurerName.includes("the new india")) {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/New_India_Assurance.svg/100px-New_India_Assurance.svg.png";
    } else if (insurerName.includes("digit")) {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZMnqFGm3W_w9L2mNhvqpWYBmHiK92ZMI-wFjTxx8CtMHOCYOOQ";
    } else if (insurerName.includes("iffco tokio")) {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kPJKwr1tTD6ZPY6mCORXTp_AO9SoGoFuJDalyZmJ8skZJNn7";
    } else if (insurerName.includes("oriental")) {
      // return 'https://image3.mouthshut.com/images/imagesp/925843244s.jpg';
      // return 'https://d28wu8o6itv89t.cloudfront.net/images/orientaljpg-1542965668733.jpeg';
      return "http://www.salespointonline.com/storage/images/insurer/mRroOEmtowmFeTMmJ3vlsxa35QbcU6SVraR8fpJy.jpeg";
    } else if (insurerName.includes("raheja")) {
      return "http://www.rahejaqbe.com/content/groups/public/documents/webcontent/img_ext_incon_logo.gif";
    } else if (insurerName.includes("liberty")) {
      // return 'https://www.libertyinsurance.in//Style%20Library/CportalImages/logo1.png';
      return "http://www.salespointonline.com/storage/images/insurer/tkcK30yFiPMxtQFWeUYFCzlLYPXYchegoAcSi8Tp.jpeg";
    } else if (insurerName.includes("tata aig")) {
      return "https://www.tataaig.com/content/dam/tagic/images/LOGO.png";
    } else if (insurerName.includes("universal sompo")) {
      return "http://www.salespointonline.com/storage/images/insurer/YlUF6AaVUKfyMfTFMUAkVFPPfoYNFb4O0SeZZKtZ.jpeg";
    } else if (insurerName.includes("reliance general")) {
      return "http://www.salespointonline.com/storage/images/insurer/AdQi3X3UeIAcLX2xjmdyedxIWBoTlQ4ncJnKCyR6.jpeg";
    } else if (insurerName.includes("cigna")) {
      return "http://www.salespointonline.com/storage/images/insurer/8bCNAaT5ItlkXmD3rT7SDHkSxaY9IlcbYy6inzva.png";
    } else if (insurerName.includes("chola")) {
      return "https://www.cholainsurance.com/images/mandalam-logo.png";
    } else if (insurerName.includes("kotak mahindra general")) {
      return "https://www.policybazaar.com/images/insurer-logo/kotakmahindra-genral-insurance.png";
    } else if (insurerName.includes("berkshire")) {
      return "https://www.berkshireinsurancegroup.com/sites/default/files/logo.png";
    } else if (insurerName.includes("icici lombard")) {
      return "https://www.icicilombard.com/includes_new/images/Insurancelogo.png";
    } else if (insurerName.includes("l&t") || insurerName.includes("l and t")) {
      return "https://www.5paisa.com/images/default-source/insurance/07.png";
    } else if (insurerName.includes("tata aia")) {
      return "http://tataaia.com/images/tata-aia-life.png";
    } else if (insurerName.includes("lic india")) {
      return "https://www.licindia.in/CorporateSiteDemo/media/LIC_Media/LIC_LOGO.png";
    } else if (insurerName.includes("magma hdi")) {
      return "https://magma-hdi.co.in/o/magma-journey-theme/images/magma-hdi-logo.png";
    } else if (insurerName.includes("sbi general")) {
      return "https://www.sbigeneral.in/SBIG/sites/all/themes/sbigeneral/logo.png";
    }
    // else if (insurerName.includes("max bupa")) {
    //   return "http://healthcompanion.maxbupa.com/DST3/images/logo.png";
    // }
  }
};

// export all functions;
export {
  currencyFormatter,
  currencyFormatterWithSign,
  isEmptyObject,
  getIconNameFromProductId,
  getProductGroupIDFromProductId,
  getInsurerIconFromName,
  getProductIdForRenewal,
  getIconNameFromLoanProductId,
  isAlphaNumeric,
  getRandomNumber,
  nFormatter,
  nFormatterWithSign,
  groupBy
};
