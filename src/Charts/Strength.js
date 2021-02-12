import React from 'react'
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['Shop Reach', 'Guarantor', 'Bank Account', 'Assets', 'Bills', 'Weeks Purchase'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 5, 3, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
}

const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
}

const StrengthChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Surrogates Strength Chart</h1>
    </div>
    <Radar data={data} options={options} />
  </>
)

export default StrengthChart