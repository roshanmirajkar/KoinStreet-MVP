import React from 'react';
import {Pie} from 'react-chartjs-2';
/*import "./chart.css";*/
import './chart.css';


const data = () => ( {
    
	labels: [
		'Business Development',
		'Airdrop & Future Distribution',
        'Founding Team',
        'Private Sale',
        'Treasury',
        'Public ICO',
	],
	datasets: [{
		data: [7, 10, 13.3, 15, 19.7, 35],
		backgroundColor: [
		'#212f3c',
		'#283747',
        '#2e4053',
        '#34495e',
        '#5d6d7e',
        '#85929e',
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#E633FF',
        '#33FF5B',
        '#3377FF',
		]
	}]
} )

const options = {
    maintainAspectRatio: true,
    responsive: false,
    legend: {
      position: 'left',
      labels: {
        boxWidth: 10
      }
    }
  } 

var createReactClass = require('create-react-class');

export default createReactClass({
  displayName: 'TokenDistribution',

  render() {
    return (
      <div div className="Chart" style={{height: '500px', width: '500px', position: 'right'}}>
        <h2>Token Distribution</h2>
        <Pie data={data} 
        height={500} 
        width={500}
         options={options}
        />
      </div>
    );
  }
});





