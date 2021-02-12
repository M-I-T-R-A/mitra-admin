import React from 'react'
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Credit',
      data: [12000, 13900, 32000, 15000, 20000, 13000],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Debit',
      data: [7250, 6300, 2020, 5500, 1500, 4000],
      backgroundColor: 'rgb(54, 162, 235)',
    }
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

const DebitCredit = () => (
  <>
    <div className='header'>
      <h1 className='title'>Debit Credit Chart</h1>
    </div>
    <Bar data={data} options={options} />
  </>
)

export default DebitCredit;