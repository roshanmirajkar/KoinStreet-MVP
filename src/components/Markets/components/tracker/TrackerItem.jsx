import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import { FormattedNumber, FormattedMessage, injectIntl } from 'react-intl';
import isEqual from 'lodash/isEqual';
import AnimateRow from './AnimateRow';
import Exchange from './../Exchange';
import { pickSvgUrl } from './../../icons.js';
import { CHANGELLY_REF_ID, SYMBOL_EMPTY } from './../../constants.js';
import isNumber from 'lodash/isNumber';

const pickCap24hrChangeColor = (val, formatNumber) => {
  if (!isNumber(val)) {
    return SYMBOL_EMPTY;
  } else if (val > 0) {
    return (
      <div className="d-inline-block text-success">
        <span className="d-inline-block font-xs app-arrow">&#9650;</span>
        {formatNumber(val / 100, { style: 'percent', maximumFractionDigits: 2 })}
      </div>
    )
  } else if (val < 0) {
    return (
      <div className="text-danger">
        <span className="font-xs app-arrow">&#9660;</span>
        {formatNumber(val / 100, { style: 'percent', maximumFractionDigits: 2 })}
      </div>
    )
  }
  return formatNumber(val / 100, { style: 'percent', maximumFractionDigits: 2 });
}

class TrackerItem extends Component {

  shouldComponentUpdate(nextProps) {
    const { item, currency } = this.props;
    return item.symbol !== nextProps.item.symbol ||
      item.changePercent24Hr !== nextProps.item.changePercent24Hr ||
      currency.coef !== nextProps.currency.coef ||
      parseFloat(item.priceUsd, 10) !== parseFloat(nextProps.item.priceUsd, 10) ||
      !isEqual(item, nextProps.item);
  }

  sell = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://changelly.com/?ref_id=${CHANGELLY_REF_ID}`, '_blank');
  }

  buy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://changelly.com/?ref_id=${CHANGELLY_REF_ID}`, '_blank');
  }

  render() {
    const { item, currency, intl: { formatNumber } } = this.props;
    const changePercent24Hr = pickCap24hrChangeColor(item.changePercent24Hr, formatNumber);
    const priceUsd = parseFloat(item.priceUsd, 10);
    return (
      <Link className="app-table-row" to={{
        pathname: `/currency/${item.id}`,
        state: { modal: true }
      }} key={`link-${item.id}`}>
        <AnimateRow value={priceUsd} key={`anim-${item.id}`} />
        <div className="app-table-col app-table-col-size-name">
          <img src={pickSvgUrl(item.symbol)} alt={`Logo ${item.name}`} width={32} height={32} />
          &nbsp;<div className="item-badge"><Badge color="secondary" className="mx-1">{item.symbol}</Badge></div>&nbsp;<div className="item-name">{item.name}</div>
        </div>
        <div className="app-table-col text-right app-table-col-size-mktcap">
          <span className="d-inline-block text-label d-sm-none mr-1">
            <FormattedMessage id="app.market-cap"
              defaultMessage="Market Cap" />:</span>
          {formatNumber(item.marketCapUsd * currency.coef, {
            currency: currency.key,
            style: 'currency',
            currencyDisplay: 'symbol'
          })}
        </div>
        <div className="app-table-col text-right">
          <span className="d-inline-block text-label d-sm-none mr-1">
            <FormattedMessage id="app.price"
              defaultMessage="Price" />:</span>
          {isNumber(priceUsd) ?
            formatNumber(priceUsd * currency.coef, {
              currency: currency.key,
              style: 'currency',
              currencyDisplay: 'symbol'
            }) : SYMBOL_EMPTY}
        </div>
        <div className="app-table-col text-right">
          <span className="d-inline-block text-label d-sm-none mr-1">
            <FormattedMessage id="app.volume24"
              defaultMessage="Volume (24hr)" />:</span>
          {isNumber(item.volumeUsd24Hr) ? <FormattedNumber value={item.volumeUsd24Hr} /> : SYMBOL_EMPTY}
        </div>
        <div className="app-table-col text-right">
          <span className="d-inline-block text-label d-sm-none mr-1">
            <FormattedMessage id="app.circulating-supply"
              defaultMessage=" Circulating Supply" />:</span>
          {isNumber(item.maxSupply) ? <FormattedNumber value={item.maxSupply} /> : SYMBOL_EMPTY}
        </div>
        <div className="app-table-col text-right app-table-col-size-cap24hrChange">
          <span className="d-inline-block text-label d-sm-none mr-1">
            <FormattedMessage id="app.change24"
              defaultMessage="Change (24hr)" />:</span>
          {changePercent24Hr}
        </div>
        <div className="app-table-col text-right">
          <span className="d-inline-block text-label d-sm-none mr-1">
            <FormattedMessage id="app.trade"
              defaultMessage="Trade" />:</span>
          <Exchange currency={item.symbol} type="link" />
        </div>
      </Link>
    )
  }
}

export default injectIntl(TrackerItem);
