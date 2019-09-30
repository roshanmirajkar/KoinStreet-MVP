import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import './Portfolio.css';
import { render } from 'react-dom';
import DonutChart from "react-svg-donut-chart"

const dataPie = [
    {value: 100, stroke: "#22594e", strokeWidth: 6},
    {value: 60, stroke: "#2f7d6d"},
    {value: 30, stroke: "#3da18d"},
    {value: 20, stroke: "#69c2b0"},
    {value: 10, stroke: "#a1d9ce"},
  ]

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			access_token: '',
			token_type: '',
			expires_in: '',
			refresh_token: '',
			created_at: '',
			error: '',
			data: [],
			balance: [],
		}
	}
	render() {

		// The value will be wrapped inside a <strong> tag.
		
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		const urlParams = new URLSearchParams(window.location.search);
		const
			grant_type = 'authorization_code',
			client_id = '28122a9e9d25194c30e60a55c80d83553873ee308f47e8755f749d0c91782440',
			client_secret = 'cfbf46ca2f7108226c7366a1f364f562482c63569eb014fcda10dcb964593149',
		//	redirect_uri = 'https://koinstreet-test.firebaseapp.com/portfolio';
		redirect_uri = 'http://localhost:3000/portfolio';



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
					if (res) {
						axios.get('https://api.coinbase.com/v2/user', { headers: { Authorization: 'Bearer '+res.data.access_token } })
						.then(response => {
							console.log(response);
							var name = response.data.data.name;

							axios.get('https://api.coinbase.com/v2/accounts', { headers: { Authorization: 'Bearer '+res.data.access_token } })
							.then(response => {

								if(response)
								{ const stringResponse = JSON.stringify(response)
									console.log(stringResponse)
									const newStringResponse = JSON.parse(stringResponse)
									console.log(newStringResponse)
						// 
										var i = 0
										while (i < newStringResponse.data.data.length  ) {
									//		console.log(newStringResponse.data.data.length)
								//			console.log(newStringResponse.data.data[i].balance.amount)
											var balance = newStringResponse.data.data[i].balance.amount;
											var walletName = newStringResponse.data.data[i].name;
									//		console.log(balance)
											var currency = newStringResponse.data.data[i].currency;
											this.setState({balance:balance})
											console.log(this.state.balance)
											i++;
										}
								//	var usdBalance = response.data.data[0].native_balance.amount;
								//	var usdCurrency = response.data.data[0].native_balance.currency;

									document.getElementById("balance").innerHTML = "Hello "+ name +" your " + walletName + 
									" balance is "+ balance + " " + currency + " or $ in ";
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
		return (
			
			<div className="Coinbase">
			            <h1>Connect Your Wallet</h1>	
			<div className="CryptoCards">
				<header className="Coinbase-header">
					<div>
						<p>Coinbase:</p>
						<span id="balance"></span>
					</div>
        <button className="Portfolio-button btn-primary" onClick={() => window.open('https://www.coinbase.com/oauth/authorize?client_id=28122a9e9d25194c30e60a55c80d83553873ee308f47e8755f749d0c91782440&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fportfolio&response_type=code&scope=wallet%3Auser%3Aread,wallet:accounts:read')}>Connect Account</button>
					</header>
				

					<header className="Coinbase-header">
					<div>
						<p>Binance: </p>
						<span id="balance"></span>
					</div>
        <button className="Portfolio-button" >Coming Soon</button>
					</header>
					<header className="Coinbase-header">
					<div>
						<p>Gemini: </p>
						<span id="balance"></span>
					</div>
        <button className="Portfolio-button" >Coming Soon</button>
					</header>
					<DonutChart data = {dataPie} height="300px" width = "600px"/>
					</div>
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
					)(App)
