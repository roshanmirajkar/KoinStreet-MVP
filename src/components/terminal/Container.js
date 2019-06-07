import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import select from 'react-select';



//import react select
import Select from 'react-select';
//need to import index.js functions for full functionality

//entire BinanceOCOForm is a component

//keeps track of the preference variable
const preference = [
  { value: 1, label: 'Take Profit' },
  { value: 2, label: 'Stop Loss' },
];


const symbol = [
{value: optionsAsString, label: 'optionsAsString' },
]

var optionsAsString = 'test';

//Node Modules
const api = require('binance');

//Variables
var gv_symbols={};


export default class container extends React.Component {

  //constructor (props) initalizes state. //Calling super(props) allows reference to this.properties
  constructor(props) {
      super(props);
      //assign inital state to this.state
      this.state = {
        selectedOption: null,
        isToggleOn: 'off',
        apiKey: '',
        secretKey:'',
        tradeQuantity:'',
        profitPrice:'',
        stopLossPrice:'',

      }
      this.handleChange = this.handleChange.bind(this);
      this.handleToggleClick = this.handleToggleClick.bind(this);
      this.handleApiKeyChange = this.handleApiKeyChange.bind(this);
      this.handleSecretChange = this.handleSecretChange.bind(this);
      this.handleQuantityChange = this.handleQuantityChange.bind(this);
      this.handleProfitPrice = this.handleProfitPrice.bind(this);
      ////////////////////////////////////////////////////////////
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleApiKeySubmit = this.handleApiKeySubmit.bind(this);
      this.handleSecretSubmit = this.handleSecretSubmit.bind(this);
      this.handleQuantitySubmit = this.handleQuantitySubmit.bind(this);
      this.handleProfitPrice = this.handleProfitPrice.bind(this);

    }

   //handleChange(event) {
    //this.setState({value: event.target.value});
  //}

//make this general handle change later
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    }

  handleToggleClick() {
  		this.setState(function(prevState) {
        console.log({isToggleOn: !prevState.isToggleOn});
  			return {isToggleOn: !prevState.isToggleOn};
  		});
  	}

  handleApiKeyChange = (apiKey) => {
      this.setState({ apiKey });
      console.log(`The current key is:`, apiKey);
    }

  handleSecretChange = (secretKey) => {
      this.setState({ secretKey});
      console.log(`The secret current key is:`, secretKey);
    }

  handleQuantityChange = (tradeQuantity) => {
      this.setState({tradeQuantity});
      console.log(`The current quantity is`, tradeQuantity);
    }

  handleProfitPrice = (profitPrice) => {
      this.setState({profitPrice});
      console.log(`The current profit price is `, profitPrice);
    }

////////////////////////////////////////////////////


  handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      console.log('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }

  handleApiKeySubmit = (event) => {
      alert('Your favorite flavor is: ' + this.state.value);
      console.log('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
      // console.log(this.state);
      //this.props.createPost(this.state);
      //this.props.history.push('/');
    }

  handleSecretSubmit = (event) => {
      alert('The current api secret key' + this.state.value);
      console.log('The current api secret key' + this.state.value);
      event.preventDefault();
      // console.log(this.state);
      //this.props.createPost(this.state);
      //this.props.history.push('/');
    }

  handleQuantitySubmit = (event) => {
      alert('The current quantity is' + this.state.value);
      console.log('The current quantity is' + this.state.value);
      event.preventDefault();
      // console.log(this.state);
    }

  handleProfitSubmit = (event) => {
      alert('The current profit submit' + this.state.value);
      console.log('The current profit submit' + this.state.value);
      event.preventDefault();
      // console.log(this.state);
    }



///new edits

//telling react dom render this
  render() {
    const { selectedOption } = this.state;
    return (
      <div className="container">
        <br />
        <h1>Binance OCO OrderForm</h1>
        <br />
        <br />


        <div clas="card-body">
          <div className="row">
            <div className="col-sm-10">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <h6>Binance API Key:</h6>
                    </td>
                    <td>
                      <input type="text" id="binanceapikey" onChange={this.handleApiKeyChange} />
                    </td>
                  </tr>


                  <tr>
                    <td>
                      <h6>Binance Secret Key:</h6>
                    </td>
                    <td>
                      <input type="password" id="binanceseckey" onChange={this.handleSecretChange}/>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <h6>Symbol:</h6>
                    </td>




                    <Select id = "symbol"
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={preference}/>

                    <td>
                      <select className="col-sm-4" id="symbol" />
                    </td>
                  </tr>


                  <tr>
                    <td>
                      <h6>Quantity:</h6>
                    </td>
                    <td>
                      <input className="col-sm-3" type="text" id="qty" onChange={this.handleQuantityChange} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Profit Price:</h6>
                    </td>
                    <td>
                      <input
                        className="col-sm-3"
                        type="text"
                        id="profitprice"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Stop-Loss Price:</h6>
                    </td>
                    <td>
                      <input
                        className="col-sm-3"
                        type="text"
                        id="stoplossprice"
                      />
                    </td>
                  </tr>


                <tr>
                      <h6>Preference:</h6>
                    <td>
                    <Select id = "preference"
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={preference}/>
                    </td>
                  </tr>


                  <tr>
                      <h6>Toggle:</h6>
                      <button
                        id="botSwitch"
                        data-onstyle="success"
                        data-offstyle="warning"
                        data-size="small"
                        type="checkbox"
                        data-toggle="toggle"
                        onClick ={this.handleToggleClick}>
                        {this.state.isToggleOn ? 'ON' : 'OFF'}

                        //this tracks Toggle state
                      </button>


                  </tr>


                  <tr>
                    <td>
                      <h6>Form:</h6>
                    </td>
                    <td>
                      <div id="formstatus">
                        <h4>Off</h4>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Take Profit Status:</h6>
                    </td>
                    <td>
                      <div id="tpstatus" className="row" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Stop Loss Status:</h6>
                    </td>
                    <td>
                      <div id="slstatus" className="row" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="container">
            <button
              onclick="saveSettings();"
              type="button"
              className="btn btn-danger"
            >
              Save Form
            </button>
            <button
              onclick="loadSettings();"
              type="button"
              className="btn btn-success"
            >
              Load Form
            </button>
          </div>
        </div>
      </div>
    );
  }
}




//need to fix the onClick event handlers for JavaScript
//this entire component should be one Div that renders different type of components

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
   // createPost: (post) => dispatch(createPost(post))
  }
}
var gv_trade={},gv_checkStatus;

loadSymbols();

function loadSymbols(){
  //gets ticket price data from Binance
    request('GET','https://api.binance.com/api/v3/ticker/price').
    then((r1) => {
        var lv_r1Resp = JSON.parse(r1.target.responseText);
        //console.log(lv_r1Resp);
        //var optionsAsString = '';
        for(var i=0;i<lv_r1Resp.length;i++){
            optionsAsString += "<option value='" + lv_r1Resp[i]["symbol"] + "'>" + lv_r1Resp[i]["symbol"] + "</option>";
            //optionsAsString is a var that stores data in format below
            //its loaded in the format for HTML options tag
            //value='LTCBTC'>LTCBTC</option><option
        }
        //Jquery function that puts. Select symbol is the dropdown and optionsAsString is where symbols populate
       $('select[id="symbol"]' ).append( optionsAsString );

       console.log(optionsAsString);
      //  console.log(lv_r1Resp);
    }).
    catch((err) => {
        console.error(err);
    });
}




$('#botSwitch').change(function() {
    if(document.getElementById('botSwitch').checked){
       //Perform validation
       //performInputValidation();
       //disableInputFields();
       gv_trade["apikey"] = document.getElementById("binanceapikey").value;
       gv_trade["seckey"] = document.getElementById("binanceseckey").value;
       gv_trade["symbol"] = document.getElementById("symbol").value;
       gv_trade["qty"] = parseFloat(document.getElementById("qty").value);
       gv_trade["profitprice"] = parseFloat(document.getElementById("profitprice").value);
       gv_trade["stoplossprice"] = parseFloat(document.getElementById("stoplossprice").value);
       var lv_den = gv_trade["symbol"].substring(gv_trade["symbol"].length-3,gv_trade["symbol"].length);
       if(lv_den == "SDT"){
           gv_trade["num"] = gv_trade["symbol"].substring(0,gv_trade["symbol"].length-4);
           gv_trade["den"] = gv_trade["symbol"].substring(gv_trade["symbol"].length-4,gv_trade["symbol"].length);
        }
        else{
           gv_trade["num"] = gv_trade["symbol"].substring(0,gv_trade["symbol"].length-3);
           gv_trade["den"] = gv_trade["symbol"].substring(gv_trade["symbol"].length-3,gv_trade["symbol"].length);
        }
       gv_trade["preference"] = document.getElementById("preference").value;

       //placeInitialOrder();
       //gv_checkStatus = setInterval(checkCurrentStatus,1*1000);
       //runBot();//Turn On the Bot
    }
    else{
        document.getElementById("formstatus").innerHTML = '<h4>Off</h4>';
        clearInterval(gv_checkStatus);
        enableInputFields();
        //Turn Off the bot
    }

})


function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function placeInitialOrder(){

    //Get Exchange Info
    var binanceRest = new api.BinanceRest({
        key: document.getElementById("binanceapikey").value, // Get this from your account on binance.com
        secret: document.getElementById("binanceseckey").value, // Same for this
        timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
        recvWindow: 10000, // Optional, defaults to 5000, increase if you're getting timestamp errors
        disableBeautification: false,
        handleDrift: true
    });

    if(gv_trade["preference"] == 1){//1 - Take Profit
        binanceRest.exchangeInfo()
        .then((r1) => {
            //Normalize Price and Quantity
            var lv_qty1 = gv_trade["qty"];
            var lv_qty;
            var lv_prc1 = gv_trade["profitprice"];
            var lv_prc;

            for(var m=0;m<r1["symbols"].length;m++){
                if(r1["symbols"][m]["symbol"] == gv_trade["symbol"]){
                  var lv_stepsize = Math.log10(1/parseFloat(r1["symbols"][m]["filters"][2]["stepSize"]));
                  var lv_ticksize = Math.log10(1/parseFloat(r1["symbols"][m]["filters"][0]["tickSize"]));
                  lv_qty = Math.floor(lv_qty1 * 10**lv_stepsize)/10**lv_stepsize;
                  lv_prc = Math.floor(lv_prc1 * 10**lv_ticksize)/10**lv_ticksize;
                }
            }

          //Place the Order based on preference
          return binanceRest.newOrder({
                                    symbol: gv_trade["symbol"],
                                    side: 'SELL',
                                    type: 'LIMIT',
                                    quantity: lv_qty,
                                    price: lv_prc,
                                    timeInForce: "GTC",
                                    newOrderRespType: 'RESULT',
                                })

        }).then((r2) => {
            gv_trade["binanceid"] = r2["clientOrderId"];
            //Update the status
            document.getElementById("tpstatus").innerHTML = '<h4 class="bg-warning">TAKE PROFIT ORDER PLACED</h4>';

        }).catch((err) => {
            console.error(err);
        });
    }
    else{//Stop Loss
        binanceRest.exchangeInfo()
        .then((r1) => {
            //Normalize Price and Quantity
            var lv_qty1 = gv_trade["qty"];
            var lv_qty;
            var lv_prc1 = gv_trade["stoplossprice"];
            var lv_prc;

            for(var m=0;m<r1["symbols"].length;m++){
                if(r1["symbols"][m]["symbol"] == gv_trade["symbol"]){
                  var lv_stepsize = Math.log10(1/parseFloat(r1["symbols"][m]["filters"][2]["stepSize"]));
                  var lv_ticksize = Math.log10(1/parseFloat(r1["symbols"][m]["filters"][0]["tickSize"]));
                  lv_qty = Math.floor(lv_qty1 * 10**lv_stepsize)/10**lv_stepsize;
                  lv_prc = Math.floor(lv_prc1 * 10**lv_ticksize)/10**lv_ticksize;
                }
            }

          //Place the Order based on preference
          return binanceRest.newOrder({
                                    symbol: gv_trade["symbol"],
                                    side: 'SELL',
                                    type: 'STOP_LOSS_LIMIT',
                                    quantity: lv_qty,
                                    stopPrice: lv_prc,
                                    price: lv_prc,
                                    timeInForce: "GTC",
                                    newOrderRespType: 'RESULT',
                                })

        }).then((r2) => {
            gv_trade["binanceid"] = r2["clientOrderId"];
            //Update the status
            document.getElementById("slstatus").innerHTML = '<h4 class="bg-warning">STOP-LOSS ORDER PLACED</h4>';

        }).catch((err) => {
            console.error(err);
        });
    }
}

function performInputValidation(){
       if(document.getElementById("binanceapikey").value == ""){
          alert("Enter the API key");
          $('#botSwitch').bootstrapToggle('off');
          throw new Error('Enter the API key');
       }
       if(document.getElementById("binanceseckey").value == ""){
          alert("Enter Binance Secret Key");
          $('#botSwitch').bootstrapToggle('off');
          throw new Error('Enter Binance Secret Key');
       }
       if(!parseFloat(document.getElementById("qty").value)){
          alert("Enter quantity");
          $('#botSwitch').bootstrapToggle('off');
          throw new Error('Enter quantity');
       }
       if(!parseFloat(document.getElementById("profitprice").value)){
          alert("Enter Profit Price");
          $('#botSwitch').bootstrapToggle('off');
          throw new Error('Enter Profit Price');
       }
       if(!parseFloat(document.getElementById("stoplossprice").value)){
          alert("Enter Stop Loss Price");
          $('#botSwitch').bootstrapToggle('off');
          throw new Error('Enter Stop Loss Price');
       }
}
function disableInputFields(){
       document.getElementById("binanceapikey").disabled = true;
       document.getElementById("binanceseckey").disabled = true;
       document.getElementById("symbol").disabled = true;
       document.getElementById("qty").disabled = true;
       document.getElementById("profitprice").disabled = true;
       document.getElementById("stoplossprice").disabled = true;
       document.getElementById("preference").disabled = true;
}
function enableInputFields(){
       document.getElementById("binanceapikey").disabled = false;
       document.getElementById("binanceseckey").disabled = false;
       document.getElementById("symbol").disabled = false;
       document.getElementById("qty").disabled = false;
       document.getElementById("profitprice").disabled = false;
       document.getElementById("stoplossprice").disabled = false;
       document.getElementById("preference").disabled = false;
}
function saveSettings(){
    localStorage.setItem("binocobinanceapikey", document.getElementById("binanceapikey").value);
    localStorage.setItem("binocobinanceseckey", document.getElementById("binanceseckey").value);
    localStorage.setItem("binocosymbol", document.getElementById("symbol").value);
    localStorage.setItem("binocoqty", document.getElementById("qty").value);
    localStorage.setItem("binocoprofitprice", document.getElementById("profitprice").value);
    localStorage.setItem("binocostoplossprice", document.getElementById("stoplossprice").value);
    localStorage.setItem("binocopreference", document.getElementById("preference").value);
    alert("Settings have been saved");
}
function loadSettings(){
    document.getElementById("binanceapikey").value = localStorage.getItem("binocobinanceapikey");
    document.getElementById("binanceseckey").value = localStorage.getItem("binocobinanceseckey");
    document.getElementById("symbol").value = localStorage.getItem("binocosymbol");
    document.getElementById("qty").value = localStorage.getItem("binocoqty");
    document.getElementById("profitprice").value = localStorage.getItem("binocoprofitprice");
    document.getElementById("stoplossprice").value = localStorage.getItem("binocostoplossprice");
    document.getElementById("preference").value = localStorage.getItem("binocopreference");
}
