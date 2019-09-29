import React, { Component, Fragment } from 'react';
import TrackerList from './TrackerList';
import TrackerHeader from './TrackerHeader';
import { Container, Row, Col } from 'reactstrap';
import CurrencySelector from './CurrencySelector';
import Loader from './../../components/common/Loader/Loader';
import { withRouter } from 'react-router';
import TrackerFilter from './TrackerFilter';
import filter from 'lodash/filter';
import orderByFunc from 'lodash/orderBy';
import { API_URL_COINCAP, COINS_LIMIT } from './../../constants.js';
import { subscribeToSocketPrices } from './../Socket';
import { createSelector } from 'reselect';
import { scrollToTop } from './../../utils.js';
import isNull from 'lodash/isNull';
// import './../../assets/react-select.css';
import './Tracker.css';

const formatDataValues = (data) => data.map((item) => {
  const supply = !isNull(item.supply) ? parseFloat(item.supply, 10) : null;
  const maxSupply = item.maxSupply && !isNull(item.supply) ? parseFloat(item.maxSupply, 10) : supply;
  return {
    ...item,
    changePercent24Hr: !isNull(item.changePercent24Hr) ? parseFloat(item.changePercent24Hr, 10) : null,
    marketCapUsd: !isNull(item.marketCapUsd) ? parseFloat(item.marketCapUsd, 10) : null,
    maxSupply,
    priceUsd: !isNull(item.priceUsd) ? parseFloat(item.priceUsd, 10) : null,
    rank: !isNull(item.rank) ? parseInt(item.rank, 10) : null,
    supply,
    volumeUsd24Hr: !isNull(item.volumeUsd24Hr) ? parseFloat(item.volumeUsd24Hr, 10) : null,
    vwap24Hr: !isNull(item.vwap24Hr) ? parseFloat(item.vwap24Hr, 10) : null,
  }
});

function updateTrades(updates) {
  const { data: list } = this.state;
  let newList = [];
  Object.keys(updates).forEach((key) => {
    newList = updateCoinByIdSelector({
      list, key, values: { priceUsd: updates[key] }
    });
  });
  this.setState({
    data: newList
  });
}

const updateCoinById = (list, findId, values) => {
  let newList = [...list];
  const index = newList.findIndex(({ id }) => id === findId);
  if (index >= 0) {
    newList[index] = {
      ...newList[index],
      ...values,
    };
  }
  return newList;
}

const updateCoinByIdSelector = createSelector(
  [
    state => state.list,
    state => state.key,
    state => state.values,
  ],
  updateCoinById
);

class TrackerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      dataOriginal: [],
      currency: {
        key: 'USD',
        coef: 1
      },
      selectedPage: 0,
      orderBy: {
        field: null,
        order: 'asc'
      }
    };
    this.fetchData();
    this.updateTrades = updateTrades.bind(this)

    console.log('haseebpatel', props);  
  }

  subsribeToUpdates = () => {
    subscribeToSocketPrices((prices) => {
      this.updateTrades(JSON.parse(prices));
    });
  }

  fetchData() {
    fetch(`${API_URL_COINCAP}/assets?limit=${COINS_LIMIT}`)
      .then(resp => resp.json())
      .then(({ data }) => {
        console.log('success', data);
        this.subsribeToUpdates();
        const formattedData = formatDataValues(data);
        return this.setState({
          data: formattedData,
          dataOriginal: formattedData,
          loading: false
        });
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
  }

  onChangeSort = (mode) => {
    const { data, orderBy } = this.state;
    const order = orderBy.order === 'asc' ? 'desc' : 'asc';
    const sortedData = orderByFunc(data, mode, order);
    scrollToTop();
    this.setState({
      data: sortedData,
      orderBy: {
        order: order,
        field: mode
      }
    });
  }

  onChangeCurrency = (currency) => {
    this.setState({
      currency: currency
    })
  }

  onChageSearch = (query) => {
    const searchQuery = query ? query.toLowerCase() : '';
    const { dataOriginal, orderBy } = this.state;
    let filteredData = filter(dataOriginal, (item) => {
      return item.name && item.name.toLowerCase().indexOf(searchQuery) >= 0;
    });

    if (orderBy && orderBy.field) {
      filteredData = orderByFunc(filteredData, orderBy.field, orderBy.order);
    }

    this.setState({
      data: filteredData
    });
    scrollToTop();
  }

  render() {
    const { loading, data, orderBy, currency } = this.state;
    return (
      <div className="loader-wrapper app-h" style={{minHeight: '500px'}}>
        {
          !loading ?
          <Fragment>
            <div className="tracker-sticky-header">
              <Container>
                <Row className="mb-1">
                  <Col xs={12} sm={4} lg={3}>
                    <TrackerFilter onChageSearch={this.onChageSearch} />
                  </Col>
                  <Col>
                    <CurrencySelector onChange={this.onChangeCurrency} />
                  </Col>
                </Row>

                <TrackerHeader orderBy={orderBy} onChangeSort={this.onChangeSort} />
              </Container>
            </div>
            <Container className="tracker-wrapper">
              <TrackerList list={data} currency={currency} />
            </Container>
          </Fragment>
          :
          <Loader />
        }
      </div>
    )
  }
}

export default withRouter(TrackerWrapper);
