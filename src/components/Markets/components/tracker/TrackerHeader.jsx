import React from 'react';
import { FormattedMessage } from 'react-intl';

const TrackerHeader = (props) => {
  const { onChangeSort, orderBy } = props;
  return (
    <div className={`d-none d-sm-block app-table-header app-table-order-${orderBy.order}`}>
      <div className={"app-table-col app-table-coll-sort app-table-col-size-name" + (orderBy.field === 'short' ? ' active' : '')} onClick={onChangeSort.bind(this, 'symbhol')}>
        <FormattedMessage id="app.name"
          defaultMessage="Name" />
      </div>
      <div className={"app-table-col app-table-coll-sort text-right app-table-col-size-mktcap" + (orderBy.field === 'mktcap' ? ' active' : '')} onClick={onChangeSort.bind(this, 'marketCapUsd')}>
        <FormattedMessage id="app.market-cap"
          defaultMessage="Market Cap" />
      </div>
      <div className={"app-table-col app-table-coll-sort text-right" + (orderBy.field === 'price' ? ' active' : '')} onClick={onChangeSort.bind(this, 'priceUsd')}>
        <FormattedMessage id="app.price"
          defaultMessage="Price" />
      </div>
      <div className={"app-table-col app-table-coll-sort text-right" + (orderBy.field === 'usdVolume' ? ' active' : '')} onClick={onChangeSort.bind(this, 'volumeUsd24Hr')}>
        <FormattedMessage id="app.volume24"
          defaultMessage="Volume (24hr)" />
      </div>
      <div className={"app-table-col app-table-coll-sort text-right" + (orderBy.field === 'supply' ? ' active' : '')} onClick={onChangeSort.bind(this, 'maxSupply')}>
        <FormattedMessage id="app.circulating-supply"
          defaultMessage=" Circulating Supply" />
      </div>
      <div className={"app-table-col app-table-coll-sort text-right app-table-col-size-cap24hrChange" + (orderBy.field === 'cap24hrChange' ? ' active' : '')} onClick={onChangeSort.bind(this, 'cap24hrChange')}>
        <FormattedMessage id="app.change24"
          defaultMessage="Change (24hr)" />
      </div>
      <div className="app-table-col text-right">
        <FormattedMessage id="app.trade"
          defaultMessage="Trade" />
      </div>
    </div>
  )
}

export default TrackerHeader;
