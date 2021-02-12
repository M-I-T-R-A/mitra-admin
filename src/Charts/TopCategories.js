import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Snacks-And-Branded-Food',
		'Fruits-And-Vegetables',
		'Beauty-And-Personal-Hygine'
	],
	datasets: [{
		data: [300, 200, 150],
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

export default class TopCategories extends React.Component{
  render() {
    return (
      <div>
        <h2>Top 3 Categories Sold</h2>
        <Pie data={data} />
      </div>
    );
  }
};