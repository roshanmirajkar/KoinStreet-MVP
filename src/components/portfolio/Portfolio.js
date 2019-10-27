import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import axios from 'axios';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import './Portfolio.css';
import firebase from 'firebase'

import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};



/////////////////////////////////////////////


class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      access_token: '',
        token_type: '',
        expires_in: '',
        access_token: '',
        refresh_token: '',
        created_at: '',
        error: '',
        balance: [],
        wallet:[],
    };    
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
  render() {
    const {auth } = this.props;
    const authRef = firebase.auth(); 
    const db = firebase.firestore();
    const firestore = getFirestore();
    const
      grant_type = 'authorization_code',
      refresh_token = 'refresh_token',
			client_id = '28122a9e9d25194c30e60a55c80d83553873ee308f47e8755f749d0c91782440',
			client_secret = 'cfbf46ca2f7108226c7366a1f364f562482c63569eb014fcda10dcb964593149',
			//redirect_uri = 'https://koinstreet-test.firebaseapp.com/portfolio';
      redirect_uri = 'http://localhost:3000/portfolio';
    var currentTimestamp = new Date().getTime()
    
    //if not signed in redirect to sign in page
    if (!auth.uid) return <Redirect to='/signin' />

    //if use is signed out
    if (firebase.auth().currentUser === null) {
      console.log('User not signed in');
    }
    //if user is signed in
    if (firebase.auth().currentUser != null) {
      const getDatabaseDocs = db.collection("users").doc(authRef.currentUser.uid)
      firebase.firestore().collection("users").doc(authRef.currentUser.uid).get()
                .then(doc => {
                  if (!doc.exists) {
                    console.log('No such document!');
                  } else {
                    console.log(doc.data().firstName + " is currently logged in" );
                  }
                })
              .catch(err => {
                console.log('Error getting document', err);
              });
    const urlParams = new URLSearchParams(window.location.search);
      //if the user clicks on OAuth
      if (urlParams.get('code') != null) {
        const myParam = urlParams.get('code');
        axios
          .post('https://api.coinbase.com/oauth/token', {
            "grant_type": `${grant_type}`,
            "code": `${myParam}`,
            "client_id": `${client_id}`,
            "client_secret": `${client_secret}`,
            "redirect_uri": `${redirect_uri}`
          })
          .then(res => {
        //    console.log(res)
            //response contains valid Access & Refresh token
            //use token to make API call
            if (res) {
              console.log(res)
              const accessToken = res.data.access_token
              const refreshToken = res.data.refresh_token
              const tokenExpire = res.data.expires_in
              const tokenExpiryTime = (currentTimestamp + ( (tokenExpire/60) * 60 * 1000))              
              console.log()
              const authRef = firebase.auth();
              const firestore = getFirestore();
              var db = firebase.firestore();

              
        
            //Set the data of a document within a collection, 
            //  explicitly specifying a document identifier.
            //checks to see if a USER has a doc,
            //gets the current firebase user and updates their DOC)
              if (db.collection("users").doc(authRef.currentUser.uid) || (db.collection("users").doc(authRef.currentUser.uid).accessToken =! null) ) {
                db.collection("users").doc(authRef.currentUser.uid).get()
                .then(doc => {
                  if (!doc.exists) {
                    console.log('No such document!');
                  } else {
                    console.log('Document data:', doc.data().firstName);
                  }
                })
              .catch(err => {
                console.log('Error getting document', err);
              });
                db.collection("users").doc(authRef.currentUser.uid).update({
                //  "accessToken":"Bitcoin",
                "accessToken":accessToken, 
               //update current access token and save
                  "refreshToken":refreshToken,
                  "tokenExpiryTime": tokenExpiryTime,
                })
              }
            //something that checks to see if a user is logged in

              axios.get('https://api.coinbase.com/v2/user', { headers: { Authorization: 'Bearer '+(accessToken) } })
              .then(response => {
                      //add logic here that makes the request
                //if the access token is expired, mint a 
                //new one
                //make API request with access token to access data
                axios.get('https://api.coinbase.com/v2/accounts', { headers: { Authorization: 'Bearer '+accessToken } })
                .then(response => {
                  if(response)
                  { const stringResponse = JSON.stringify(response)
             //       console.log(stringResponse)
                    const newStringResponse = JSON.parse(stringResponse)
              //      console.log(newStringResponse)
                    //this logs the second Post request response 
                      var i = 0
                      while (i < newStringResponse.data.data.length  ) {
                        var balance = newStringResponse.data.data[i].balance.amount;
                        var walletName = newStringResponse.data.data[i].name;
                    //		console.log(balance)
                        var currency = newStringResponse.data.data[i].currency;
                        this.setState({balance:balance})
                        this.setState({wallet:walletName})
                  //this.setState({access_token:})
                        console.log("balance is" + this.state.balance)
                        console.log("the wallet is "+ this.state.wallet)

                        i++;
                        document.getElementById("balance").innerHTML = 
                        newStringResponse.data.data[0].name + " " + newStringResponse.data.data[0].balance.amount
                        + "<br />" + newStringResponse.data.data[1].name + " " + newStringResponse.data.data[1].balance.amount
                        + "<br />" + newStringResponse.data.data[2].name + " " + newStringResponse.data.data[2].balance.amount
                        + "<br />" + newStringResponse.data.data[3].name + " " + newStringResponse.data.data[3].balance.amount
                        + "<br />" + newStringResponse.data.data[4].name + " " + newStringResponse.data.data[4].balance.amount
                        + "<br />" + newStringResponse.data.data[5].name + " " + newStringResponse.data.data[5].balance.amount
                        + "<br />" + newStringResponse.data.data[6].name + " " + newStringResponse.data.data[6].balance.amount
                        + "<br />" + newStringResponse.data.data[7].name + " " + newStringResponse.data.data[7].balance.amount
                        + "<br />" + newStringResponse.data.data[8].name + " " + newStringResponse.data.data[8].balance.amount
                        + "<br />" + newStringResponse.data.data[9].name + " " + newStringResponse.data.data[9].balance.amount
                        + "<br />" + newStringResponse.data.data[10].name + " " + newStringResponse.data.data[10].balance.amount
                        + "<br />" + newStringResponse.data.data[11].name + " " + newStringResponse.data.data[11].balance.amount
                        + "<br />" + newStringResponse.data.data[12].name + " " + newStringResponse.data.data[12].balance.amount
                        + "<br />" + newStringResponse.data.data[13].name + " " + newStringResponse.data.data[13].balance.amount
                        + "<br />" + newStringResponse.data.data[14].name + " " + newStringResponse.data.data[14].balance.amount
                        + "<br />" + newStringResponse.data.data[15].name + " " + newStringResponse.data.data[15].balance.amount
                        + "<br />" + newStringResponse.data.data[16].name + " " + newStringResponse.data.data[16].balance.amount
                        + "<br />" + newStringResponse.data.data[17].name + " " + newStringResponse.data.data[17].balance.amount;
                      }
                  }
                })
  
              })
              window.history.pushState({ page: "another" }, "another page", "example.html");
  
            }
          }).catch(e => {
            if (e) {
              console.log(e);
            }
          })
      }
      //first try to make a call with a token
      //this logic should be under componentDidMount
      //refresh token can only be used once, we did get status 200
       //first try to make a call with a token
      //this logic should be under componentDidMount
      //you get a createdAt param that you can use in the logic
      //the time creation is in UTC so 4hr
      else if (urlParams.get('code') == null) {
          getDatabaseDocs.get()
          .then(doc => {
            console.log("current time stamp is" + currentTimestamp)
            if(currentTimestamp > doc.data().tokenExpiryTime){
              console.log("the expired time is" + doc.data().tokenExpiryTime)
              //get new Access & refresh token
              const currentRefreshToken = doc.data().refreshToken
              //you need another post or get request that gets the data
              axios.post('https://api.coinbase.com/oauth/token', {
                          "grant_type": `${refresh_token}`,
                          "client_id": `${client_id}`,
                          "client_secret": `${client_secret}`,
                          "refresh_token": `${currentRefreshToken}`
                        }).then(res => {
                          //update new token in database
                          console.log(res)
                          const tokenExpiryTime = (currentTimestamp + ( (res.data.expires_in/60) * 60 * 1000))
                          const accessToken = res.data.access_token
                          const refreshToken = res.data.refresh_token              
                          if (db.collection("users").doc(authRef.currentUser.uid) || (db.collection("users").doc(authRef.currentUser.uid).accessToken =! null) ) {
                            db.collection("users").doc(authRef.currentUser.uid).get()
                            .then(doc => {
                              if (!doc.exists) {
                                console.log('No such document!');
                              } else {
                                console.log('Document data:', doc.data().accessToken);
                              }
                            })
                          .catch(err => {
                            console.log('Error getting document', err);
                          });
                            db.collection("users").doc(authRef.currentUser.uid).update({
                            "accessToken":accessToken, 
                           //update current access token and save
                              "refreshToken":refreshToken,
                              "tokenExpiryTime": tokenExpiryTime,
                            }).then(console.log("Token update was successfull"))
                          }
                        })
            }
              const userToken = doc.data().accessToken          
              axios.get('https://api.coinbase.com/v2/user', { headers: { Authorization: 'Bearer '+(userToken) } })
              .then(response => {
              //  console.log(res.data.access_token);
              axios.get('https://api.coinbase.com/v2/accounts', { headers: { Authorization: 'Bearer '+ (userToken) } })
              .then(response => {
                if(response)  { 
                console.log(response)
                const stringResponse = JSON.stringify(response)
                const newStringResponse = JSON.parse(stringResponse)
                console.log(newStringResponse)
                var i = 0
                while (i < newStringResponse.data.data.length  ) {
                  var balance = newStringResponse.data.data[i].balance.amount;
                  var walletName = newStringResponse.data.data[i].name;
                //		console.log(balance)
                  var currency = newStringResponse.data.data[i].currency;
                  i++;
                  document.getElementById("balance").innerHTML = 
                  newStringResponse.data.data[0].name + " " + newStringResponse.data.data[0].balance.amount
                  + "<br />" + newStringResponse.data.data[1].name + " " + newStringResponse.data.data[1].balance.amount
                  + "<br />" + newStringResponse.data.data[2].name + " " + newStringResponse.data.data[2].balance.amount
                  + "<br />" + newStringResponse.data.data[3].name + " " + newStringResponse.data.data[3].balance.amount
                  + "<br />" + newStringResponse.data.data[4].name + " " + newStringResponse.data.data[4].balance.amount
                  + "<br />" + newStringResponse.data.data[5].name + " " + newStringResponse.data.data[5].balance.amount
                  + "<br />" + newStringResponse.data.data[6].name + " " + newStringResponse.data.data[6].balance.amount
                  + "<br />" + newStringResponse.data.data[7].name + " " + newStringResponse.data.data[7].balance.amount
                  + "<br />" + newStringResponse.data.data[8].name + " " + newStringResponse.data.data[8].balance.amount
                  + "<br />" + newStringResponse.data.data[9].name + " " + newStringResponse.data.data[9].balance.amount
                  + "<br />" + newStringResponse.data.data[10].name + " " + newStringResponse.data.data[10].balance.amount
                  + "<br />" + newStringResponse.data.data[11].name + " " + newStringResponse.data.data[11].balance.amount
                  + "<br />" + newStringResponse.data.data[12].name + " " + newStringResponse.data.data[12].balance.amount
                  + "<br />" + newStringResponse.data.data[13].name + " " + newStringResponse.data.data[13].balance.amount
                  + "<br />" + newStringResponse.data.data[14].name + " " + newStringResponse.data.data[14].balance.amount
                  + "<br />" + newStringResponse.data.data[15].name + " " + newStringResponse.data.data[15].balance.amount
                  + "<br />" + newStringResponse.data.data[16].name + " " + newStringResponse.data.data[16].balance.amount
                  + "<br />" + newStringResponse.data.data[17].name + " " + newStringResponse.data.data[17].balance.amount;
                  }
                }
              }).catch(function (error){
                if (response.status == 401)
                console.log('It is a 401 error, maybe expired token', error);
              });
              })

              window.history.pushState({ page: "another" }, "another page", "example.html");
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log(doc.data());
            }
          })
      }
    }

     
      //if the user is logged in, then hide the connect CoinBase Button
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">$5,000</div>
                <div> Your Binance Account</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">$1000</div>
                <div> Your Gemini Account</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">$50</div>
                <div>Your Kraken Account</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">$100</div>
                <div>Your Coinbase Pro Account</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">

          <div className="small text-muted">October 2019</div>
                

                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Bitcoin</div>
                    <strong>7.703 BTC (10%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Litecoin</div>
                    <strong>24.093 LTC (20%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Ripple</div>
                    <strong>78.706 XRP (30%)</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Ethereum</div>
                    <strong>22.123 ETH (30%)</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="80" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Tether</div>
                    <strong>Average Gain/Loss (40.15%)</strong>
                    <Progress className="progress-xs mt-2" color="primary" value="40" />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <CardBody className="pb-0">
                  <div className="pb-0">
			            <h3>Connect Your Wallet</h3>
			<div className="CryptoCards" style={{ height: 300 + 'px', marginLeft: 40 + 'px' }} >
					<div>
						<p>Coinbase:</p>
						<span id="balance"></span>
					</div>
        <button className="Portfolio-button btn-primary" onClick={() => window.open('https://www.coinbase.com/oauth/authorize?client_id=28122a9e9d25194c30e60a55c80d83553873ee308f47e8755f749d0c91782440&account=all&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fportfolio&response_type=code&scope=wallet%3Auser%3Aread,wallet:accounts:read')}>Connect Account</button>
                    </div>
					</div>  
          </CardBody>


      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
)(Portfolio)

//



//use the code returned from Coinbase OAuth to set the attribute for the user
//firebase ID token like their email and password, you can add
//other values this is not what custom claims are for
//create a new reference to path in database using admin sdk 
//postusing the user's UID as the key
//authenticted users appear in the Firebase database


