import React from 'react'
import {Bar} from 'react-chartjs-2';


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'bar',
      label: 'Profit (in Thousands)',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [10, 25, 45, 32, 34, 44 ],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Loss (in Thousands)',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [-20, -5, -15, -12, -14, -24],
      borderColor: 'white',
      borderWidth: 2,
    },
  ],
}

const ProfitLoss = () => (
  <>
    <div className='header'>
      <h1 className='title'>Profit Loss Chart</h1>
    </div>
    <Bar data={data} />
  </>
)

export default ProfitLoss