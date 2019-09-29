import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { CHANGELLY_REF_ID } from './../constants.js';

const buy = (e, currency) => {
  e.preventDefault();
  e.stopPropagation();
  currency = (currency !== 'BTC') ? currency : 'ETH';
  window.open(`https://changelly.com/exchange/BTC/${currency}/1?ref_id=${CHANGELLY_REF_ID}`, '_blank');
}

const sell = (e, currency) => {
  e.preventDefault();
  e.stopPropagation();
  currency = (currency !== 'BTC') ? currency : 'ETH';
  window.open(`https://changelly.com/exchange/${currency}/BTC/1?ref_id=${CHANGELLY_REF_ID}`, '_blank');
}

const Exchange = ({ currency, type }) => {
  return (
    type === 'link' ?
      <Fragment>
        <Button onClick={(e) => buy(e, currency)} size="md" style={{padding: '0 28px'}} color="link">
          <FormattedMessage id="app.buy"
            defaultMessage="Buy" />
        </Button>
        {type === 'link' ? <span className="divider">/</span> : null}
        <Button onClick={(e) => sell(e, currency)} size="md" style={{padding: '0 28px'}} color="link">
          <FormattedMessage id="app.sell"
            defaultMessage="Sell" />
        </Button>
      </Fragment>
      :
      <Fragment>
        <Button onClick={(e) => buy(e, currency)} size="md" style={{padding: '0 28px'}} color="success" className="mr-2">
          <FormattedMessage id="app.buy"
            defaultMessage="Buy" />
        </Button>
        <Button onClick={(e) => sell(e, currency)} size="md" style={{padding: '0 28px'}} color="danger">
          <FormattedMessage id="app.sell"
            defaultMessage="Sell" />
        </Button>
      </Fragment>
  )
}

export default Exchange;
