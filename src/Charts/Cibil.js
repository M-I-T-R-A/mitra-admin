import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'600',
		'300'
	],
	datasets: [{
		data: [600, 300],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default class Cibil extends React.Component{
  render() {
    return (
      <div>
        <h2>Cibil Score</h2>
        <Doughnut data={data} />
      </div>
    );
  }
};