import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreator from "../../store/actions/cryptoNewsAction";
import Card from "./card";
import Spinner from "../UI/spinner";
import Coursel from "../UI/coursel";
import CardAction from "./CardAction";
import CardHori from "./CardHori";

class TopNews extends Component {
  componentDidMount() {
    this.props.topNewsFetch();
  }
  render() {
    const { topNewObj } = this.props;
    // let CardList = <Spinner />;

    return (
      <div className="News-Wrapper top-part">
        <h2>TOP NEWS</h2>
        <div className="row top-news-wrapper ">
          <div className="col-lg-8 col-md-6 col-sm-12 ">
            {topNewObj && topNewObj.loaded ? (
              <CardAction
                data={topNewObj.data[Math.floor(Math.random() * 30)]}
              />
            ) : (
              <Spinner />
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            {topNewObj && topNewObj.loaded ? (
              <CardHori data={topNewObj.data} />
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ newsReducer: { topNews } }) => {
  return {
    topNewObj: topNews.loaded ? topNews : null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    topNewsFetch: () => dispatch(actionCreator.fetchTopNews())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNews);
