import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const F1BarChart = () => {
  const data = {
    labels: ['0.0', '0.2', '0.4', '0.6', '0.8', '1.0'],
    datasets: [
      {
        label: 'F1 Scores',
        data: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'F1 Score',
        },
        min: 0,
        max: 1,
        ticks: {
          stepSize: 0.2,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Confidence',
        },
      },
    },
  };

  return (
    <div className='flex flex-col flex-1 my-4'>
      <h2 className='text-center text-white'>F1 Score Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default F1BarChart;
