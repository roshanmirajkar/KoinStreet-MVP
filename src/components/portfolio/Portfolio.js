import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import './Portfolio.css';
import PieChart from 'react-simple-pie-chart';



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
			balance: [],
			wallet:[],
		}

		
	}

	
	render() {

		const { auth } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		const urlParams = new URLSearchParams(window.location.search);
		const
			grant_type = 'authorization_code',
			client_id = '28122a9e9d25194c30e60a55c80d83553873ee308f47e8755f749d0c91782440',
			client_secret = 'cfbf46ca2f7108226c7366a1f364f562482c63569eb014fcda10dcb964593149',
			//redirect_uri = 'https://koinstreet-test.firebaseapp.com/portfolio';
			
			redirect_uri = 'https://www.coinbase.com/oauth/authorize?client_id=28122a9e9d25194c30e60a55c80d83553873ee308f47e8755f749d0c91782440&account=all&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fportfolio&response_type=code&scope=wallet%3Auser%3Aread,wallet:accounts:read';




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
				//			console.log(response);
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
											this.setState({walletName:walletName})
											console.log(this.state.balance)
											console.log(this.state.walletName)
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
		return (
			<div className="Coinbase">
			            <h1>Connect Your Wallet</h1>
			<div className="CryptoCards">
				<header className="Coinbase-header">
					<div>
						<p>Coinbase:</p>
						<span id="balance"></span>
					</div>
        <button className="Portfolio-button btn-primary" onClick={() => window.open('https://www.coinbase.com/oauth/authorize?client_id=28122a9e9d25194c30e60a55c80d83553873ee308f47e8755f749d0c91782440&account=all&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fportfolio&response_type=code&scope=wallet%3Auser%3Aread,wallet:accounts:read')}>Connect Account</button>
					</header>

	
	<div className="piechart">
					<PieChart

					slices={[
					{
						color: 'organge',
						value: 10,
					},
					{
					color: 'red',
					value: 20,
					},
					{
						color: 'yellow',
						value: 30,
						},
					{
						color: 'blue',
						value: 40,
						},
						{
							color: 'white',
							value: 2,
						},
						{
							color: 'red',
							value: 0,
						},
						
					]}
					/>

					</div>

					
			
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
