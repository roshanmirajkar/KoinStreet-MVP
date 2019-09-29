import React from 'react';
import Loader from './../../components/common/Loader/Loader';
import TrackerItemFull from './../../components/tracker/TrackerItemFull';

const CurrencySingle = (props) => {
  const { match: { params: { code } } } = props;

  window.scrollTo(0,0);

  return (
    code ?
      <TrackerItemFull id={code} />
      :
      <Loader />
  )
}

export default CurrencySingle;
