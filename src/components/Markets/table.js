import React, { Component } from 'react';
import axios from 'axios';
import './Market.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './components/portfolio/App.css';

//uncomment this to get old boostrap version

const CRYPTOCOMPARE_API_URI = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=45&tsym=USD';
const BaseImageUrl = "https://www.cryptocompare.com";

class Table extends Component {
     constructor(props) {
         super(props);
         this.state = {
                coinsData: [],
         };
        this.loadData = this.loadData.bind(this);
     }
        //Get Data from API and set state
      async loadData() {
      const coinsData = await axios.get(CRYPTOCOMPARE_API_URI);
      console.log(coinsData)

        //while loop that checks to see if the coin volume == $0 in the array in the coinsData object. If it is delete it 
        //from array

        var i = 0;
        while (i < coinsData.data.Data.length) {
                if (coinsData.data.Data[i].DISPLAY.USD.VOLUME24HOURTO.substring(2,4) <= 0 || coinsData.data.Data[i].DISPLAY.USD.VOLUME24HOURTO.substring(2,3) == 0  ) {
                   coinsData.data.Data.splice(i,3);
                }
                this.setState({
                  coinsData: coinsData.data.Data,
                });
            i++;
          }
      }

      

        //load the data in miliseconds, currenctly 4 seconds
      async componentDidMount() {
          console.log("Marktes componetdivmount")
          await this.loadData();
          setInterval(this.loadData, 1000);
      }

    render() {
        return (        
            <div className="table-responsive">
            <div className="market-header">
           
                <h1>Digital Asset Price Index</h1>
            </div>
        
                <table className="table">
                
                            <thead>
                                <tr >
                                <th scope="col">#</th>
                                <th scope="col">Logo</th>
                                <th scope="col">Name</th>
                                <th scope="col">Symbol</th>
                                <th scope="col">Price</th>
                                <th scope="col">Volume(24)</th>
                                <th scope="col">Market Cap</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.coinsData.map((coin, index) => (

                                            <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td><img id="coin-image" src={BaseImageUrl + coin.CoinInfo.ImageUrl} alt="logo"></img></td>
                                            <td>{coin.CoinInfo.FullName}</td>
                                            <td>{coin.CoinInfo.Name}</td>
                                            <td>{coin.DISPLAY.USD.PRICE}</td>
                                            <td>{coin.DISPLAY.USD.VOLUME24HOURTO}</td>
                                            <td>{coin.DISPLAY.USD.MKTCAP}</td>
                                            </tr>      
                                ))}
                                </tbody>

                        </table>
            </div>
        );

    }
}

export default Table;
