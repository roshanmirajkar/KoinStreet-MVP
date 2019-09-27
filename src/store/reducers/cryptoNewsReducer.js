import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../../src/asset/utility";

const initialState = {
  latestNews: {
    loaded: false,
    loading: false,
    error: null,
    data: null
  },
  topNews: {
    loaded: false,
    loading: false,
    error: null,
    data: null
  },
  topNewsByCoin: {}
};

/*------------------------------
topNewsByCoin: {
    bitcoin:{
        loaded: false,
        loading: false,
        error: null,
        data: null
    }
    l:{
        loaded: false,
        loading: false,
        error: null,
        data: null
    }

}
------------------------------
*/

//TODO: this is main reducer.
const cryptoNewsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.INIT_LATEST_NEW:
      return initLatestNews(state, payload);
    case actionTypes.INIT_TOP_NEW:
      return initTopNews(state, payload);
    case actionTypes.INIT_NEW_BY_COIN:
      return initNewsByCoin(state, payload);

    case actionTypes.FETCH_LATEST_NEW_SUCCES:
      return latestNewsSuccess(state, payload);
    case actionTypes.FETCH_TOP_NEW_SUCCES:
      return topNewsSuccess(state, payload);
    case actionTypes.FETCH_NEW_BY_COIN_SUCCES:
      return newsByCoinSuccess(state, payload);

    case actionTypes.FETCH_LATEST_NEW_FAIL:
      return latestNewsFail(state, payload);
    case actionTypes.FETCH_TOP_NEW_FAIL:
      return topNewsFail(state, payload);
    case actionTypes.FETCH_NEW_BY_COIN_FAIL:
      return newsByCoinFail(state, payload);

    default:
      return state;
  }
};

/*--- CASES ARE HERE DEFINED */

// Case createPost
const initLatestNews = (state, payload) => {
  const updatedLatestNewsObj = {
    ...state.latestNews,
    loading: true
  };

  return updateObject(state, { latestNews: updatedLatestNewsObj });
};
const initTopNews = (state, payload) => {
  const updatedtopNewsObj = {
    ...state.topNews,
    loading: true
  };

  return updateObject(state, { topNews: updatedtopNewsObj });
};
const initNewsByCoin = (state, payload) => {
  const { coinName } = payload;
  const coinObj = {
    loaded: false,
    loading: true,
    error: null,
    data: null
  };
  const newsByCoinObj = { ...state.topNewsByCoin };
  newsByCoinObj[coinName] = coinObj;
  return updateObject(state, { topNewsByCoin: newsByCoinObj });
};
//----------------------------------------

//---------------------------------- HERE EACH FETCH SUCCESS
const latestNewsSuccess = (state, payload) => {
  const updatedLatestNewsObj = {
    ...state.latestNews,
    loaded: true,
    loading: false,
    error: null,
    data: payload.data
  };

  return updateObject(state, { latestNews: updatedLatestNewsObj });
};
const topNewsSuccess = (state, payload) => {
  const updatedtopNewsObj = {
    ...state.topNews,
    loaded: true,
    loading: false,
    error: null,
    data: payload.data
  };

  return updateObject(state, { topNews: updatedtopNewsObj });
};
const newsByCoinSuccess = (state, payload) => {
  const { data, coinName } = payload;
  const coinObj = {
    loaded: true,
    loading: false,
    error: null,
    data: data
  };
  const newsByCoinObj = { ...state.topNewsByCoin };
  newsByCoinObj[coinName] = coinObj;
  return updateObject(state, { topNewsByCoin: newsByCoinObj });
};

//?---------------------- HERE EACH FETCH FAIL
const latestNewsFail = (state, payload) => {
  const updatedLatestNewsObj = {
    ...state.latestNews,
    loaded: false,
    loading: false,
    error: "something wrong",
    data: null
  };

  return updateObject(state, { latestNews: updatedLatestNewsObj });
};
const topNewsFail = (state, payload) => {
  const updatedtopNewsObj = {
    ...state.topNews,
    loaded: false,
    loading: false,
    error: "Something wrong",
    data: null
  };

  return updateObject(state, { topNews: updatedtopNewsObj });
};
const newsByCoinFail = (state, payload) => {
  const { error, coinName } = payload;
  const coinObj = {
    loaded: false,
    loading: false,
    error: "something wrong",
    data: null
  };
  const newsByCoinObj = { ...state.topNewsByCoin };
  newsByCoinObj[coinName] = coinObj;
  return updateObject(state, { topNewsByCoin: newsByCoinObj });
};
export default cryptoNewsReducer;
