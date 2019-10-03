import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreator from "../../store/actions/cryptoNewsAction";
import Card from "./card";
import Spinner from "../UI/spinner";
import Coursel from "../UI/coursel";

class LatestNews extends Component {
  componentDidMount() {
    this.props.latestNewsFetch();
  }
  render() {
    let CardList = <Spinner />;
    if (this.props.latestNewObj && this.props.latestNewObj.loaded) {
      const { data } = this.props.latestNewObj;
      const list = data.map(obj => {
        return <Card key={obj["_id"]} data={obj} />;
      });
      CardList = <Coursel>{list}</Coursel>;
    }
    return (
      <div className="News-Wrapper">
        <h2>Customized News</h2>
        {CardList}
      </div>
    );
  }
}

const mapStateToProps = ({ newsReducer: { latestNews } }) => {
  return {
    latestNewObj: latestNews.loaded ? latestNews : null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    latestNewsFetch: () => dispatch(actionCreator.fetchLatestNews())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestNews);
