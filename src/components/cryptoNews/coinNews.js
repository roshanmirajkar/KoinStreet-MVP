import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreator from "../../store/actions/cryptoNewsAction";
import Card from "./card";
import Spinner from "../UI/spinner";
import Coursel from "../UI/coursel";

class CoinNews extends Component {
  componentDidMount() {
    this.props.coinNewsFetch(this.props.coinName);
  }
  render() {
    let CardList = <Spinner />;
    if (this.props.coinNews && this.props.coinNews.loaded) {
      const { data } = this.props.coinNews;
      const list = data.map(obj => {
        return <Card key={obj["_id"]} data={obj} />;
      });
      CardList = <Coursel>{list}</Coursel>;
    }
    return (
      <div className="News-Wrapper">
        <h2>{this.props.coinName.toUpperCase()} NEWS</h2>
        {CardList}
      </div>
    );
  }
}

const mapStateToProps = ({ newsReducer: { topNewsByCoin } }, props) => {
  return {
    coinNews:
      topNewsByCoin[props.coinName] && topNewsByCoin[props.coinName].loaded
        ? topNewsByCoin[props.coinName]
        : null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    coinNewsFetch: coinName => dispatch(actionCreator.fetchNewsbyCoin(coinName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinNews);
