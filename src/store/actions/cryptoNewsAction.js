import * as actionTypes from "./actionTypes";

const CryptoNews = require("crypto-news-api").default;
const cryptoNewApi = new CryptoNews("2578efb728bb64d82adb264bad484470");

//?---------------- HERE INIIT THE NEWS WHEN COMPONENT RENDER
const initLatestNews = () => {
  return {
    type: actionTypes.INIT_LATEST_NEW
  };
};
const initTopNews = () => {
  return {
    type: actionTypes.INIT_TOP_NEW
  };
};
const initNewsByCoin = coinName => {
  return {
    type: actionTypes.INIT_NEW_BY_COIN,
    payload: { coinName }
  };
};
//-----------------------INIT END-------------------------

//?---------------------------------- HERE EACH FETCH SUCCESS
const latestNewsSuccess = data => {
  return {
    type: actionTypes.FETCH_LATEST_NEW_SUCCES,
    payload: { data }
  };
};
const topNewsSuccess = data => {
  return {
    type: actionTypes.FETCH_TOP_NEW_SUCCES,
    payload: { data }
  };
};
const newsByCoinSuccess = (data, coinName) => {
  return {
    type: actionTypes.FETCH_NEW_BY_COIN_SUCCES,
    payload: { data, coinName }
  };
};
//#-----------------------FETCH SUCCESS END-------------------------

//?---------------------- HERE EACH FETCH FAIL
const latestNewsFail = error => {
  return {
    type: actionTypes.FETCH_LATEST_NEW_FAIL,
    payload: { error }
  };
};
const topNewsFail = error => {
  return {
    type: actionTypes.FETCH_TOP_NEW_FAIL,
    payload: { error }
  };
};
const newsByCoinFail = (error, coinName) => {
  return {
    type: actionTypes.FETCH_NEW_BY_COIN_FAIL,
    payload: { error, coinName }
  };
};
//#-----------------------FETCH FAIL END-------------------------

//?---------------------- HERE MAKE ASYNC CALL
export const fetchLatestNews = params => {
  return (dispatch, getState) => {
    //TODO# HERE MAKE ASYNC CALLS.
    dispatch(initLatestNews());
    cryptoNewApi
      .getLatestNews()
      .then(data => {
        dispatch(latestNewsSuccess(data));
      })
      .catch(error => {
        dispatch(latestNewsFail(error));
      });
  };
};
export const fetchTopNews = params => {
  return (dispatch, getState) => {
    //TODO# HERE MAKE ASYNC CALLS.
    dispatch(initTopNews());
    cryptoNewApi
      .getTopNews()
      .then(data => {
        dispatch(topNewsSuccess(data));
      })
      .catch(error => {
        dispatch(topNewsFail(error));
      });
  };
};

export const fetchNewsbyCoin = coinName => {
  return (dispatch, getState) => {
    //TODO# HERE MAKE ASYNC CALLS.
    dispatch(initNewsByCoin(coinName));
    cryptoNewApi
      .getTopNewsByCoin(coinName)
      .then(data => {
        dispatch(newsByCoinSuccess(data, coinName));
      })
      .catch(error => {
        dispatch(newsByCoinFail(error, coinName));
      });
  };
};

//-------------------------------
// "bitcoin"
// "ethereum"
// "litecoin"
// Api.getTopNewsByCoin("bitcoin")
//   .then(function(articles) {
//     console.log(articles);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// Api.getTopNewsByCoin("ethereum")
//   .then(function(articles) {
//     console.log(articles);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// Api.getTopNewsByCoin("litecoin")
//   .then(function(articles) {
//     console.log(articles);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
