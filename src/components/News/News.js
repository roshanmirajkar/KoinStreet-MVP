import React from 'react';
import './News.css';
import { connect } from 'react-redux'
import { compose } from 'redux'


class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key={cfdb585fddb35a451da61fd2e37791c8a2e9764113014eeb3e9ab28ab4ae066e}')
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          articles: myJson.Data
        }
        );
      });
  }
  render() {

   // const {auth } = this.props;
      //  if (!auth.uid) return <Redirect to='/signin' />
    return (
    
      <div className="Card" >
            <h1>Digital Asset News</h1>
        {this.state.articles && this.state.articles.map((item, index) => {
          console.log(item)
          return (
            <a href ={item.url} > 
            <div>
             <img src={item.imageurl} alt = "article images from crypto compare" />
              <ul className="Bottom">
              <h3 > {item.title} </h3>
              </ul>
            </div>
            </a>
          )
        })}

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
)(News)
