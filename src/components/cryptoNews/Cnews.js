import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import LatestNews from "./latestNew";
import TopNews from "./topNews";
import CoinNews from "./coinNews";

//# css
import "./Cnews.css";

class Cnews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoArticles: []
    };
  }

  render() {
    return (
      <div className="Crypto-news-wrapper">
        <TopNews />

        <LatestNews />
        <CoinNews coinName="bitcoin" />
        <CoinNews coinName="ethereum" />
        <CoinNews coinName="litecoin" />
        <CoinNews coinName="dogecoin" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    //   auth: state.firebase.auth,
  };
};

export default compose(connect(mapStateToProps))(Cnews);
