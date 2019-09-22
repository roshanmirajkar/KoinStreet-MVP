import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'

var CryptoNewsAPI = require('crypto-news-api').default

class Cnews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoArticles: []
    }
  }

  componentDidMount() {
    const Api = new CryptoNewsAPI('2578efb728bb64d82adb264bad484470')

    Api.getLatestNews() 
        .then(
           (articles) => {
             console.log(articles)
              this.setState({
                cryptoArticles: articles
              });
            } 
          )
        .catch( (error) => { console.log(error) })

    Api.getTopNews()
        .then(articles => console.log(articles))
        .catch(error => console.error(error))


        Api.getTopNewsByCoin("bitcoin")
    .then(function (articles) { console.log(articles) })
    .catch(function (error) { console.log(error) })
    Api.getTopNewsByCoin("ethereum")
    .then(function (articles) { console.log(articles) })
    .catch(function (error) { console.log(error) })
    Api.getTopNewsByCoin("litecoin")
    .then(function (articles) { console.log(articles) })
    .catch(function (error) { console.log(error) })
 
 
  }

  render() {

    return (

      <div className="Card" >
            <h1>New Crypto News</h1>
        {this.state.cryptoArticles && this.state.cryptoArticles.map((item, index) => {
          console.log(item)
          return (
            <a href ={item.url} target="_blank" key = {index} >
            <div>
             <img src={item.originalImageUrl} alt = "images from CryptoControl" />
              <ul className="Bottom">
              <h3 > {item.title} </h3>
              </ul>
            </div>
            </a>
          )
        })
        }

      </div>
      
    );

  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
 //   auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
)(Cnews)
