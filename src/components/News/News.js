import React from 'react';
import './News.css';


class Hello extends React.Component {
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
        });
      });
  }
  render() {
    return (
      <div className="Card" >
        {this.state.articles && this.state.articles.map((item, index) => {
          return (
            <div >
             <img src={item.imageurl} />
              <ul className="Bottom">
              <h3 > {item.title} </h3>
                <a href={item.url}>Read More</a>
                <p >{item.author}</p>
              </ul>
            </div>
          )
        })}

      </div>
    );

  }
}

export default Hello;

  /* add image property */
