import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const F1DoughnutChart = () => {
  const data = {
    labels: ['0.0', '0.2', '0.4', '0.6', '0.8', '1.0'],
    datasets: [
      {
        label: 'F1 Score Distribution',
        data: [5, 15, 30, 25, 20, 5], // Example distribution
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 205, 86, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className='flex flex-col justify-center items-center my-16 flex-1 h-[300px]'>
      <h2 className='text-white'>F1 Score Doughnut Chart</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default F1DoughnutChart;
