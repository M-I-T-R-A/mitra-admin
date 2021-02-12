import React from 'react'
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Ram', 'Shyam', 'Raju', 'BabuRao', 'Totla', 'Khadak'],
  datasets: [
    {
      label: 'Credit',
      data: [72, 190, 30, 150, 500, 90],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const CreditVsCustomer = () => (
  <>
    <div className='header'>
      <h1 className='title'>Credit Vs Customer Chart</h1>
    </div>
    <Line data={data} options={options} />
  </>
)

export default CreditVsCustomer