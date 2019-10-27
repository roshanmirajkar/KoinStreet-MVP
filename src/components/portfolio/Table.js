if (urlParams.get('code') == null){
	//get data from database            
		  const accessToken = "123";
		  const authRef = firebase.auth();
		  const firestore = getFirestore();
		  var db = firebase.firestore();
		  axios.get('https://api.coinbase.com/v2/user', { headers: { Authorization: 'Bearer '+(accessToken) } })
		  .then(response => {
		  //  console.log(res.data.access_token);
			axios.get('https://api.coinbase.com/v2/accounts', { headers: { Authorization: 'Bearer '+accessToken } })
			.then(response => {
			  if(response)  { 
				const stringResponse = JSON.stringify(response)
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