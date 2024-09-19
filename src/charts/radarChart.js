import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const F1RadarChart = () => {
  const data = {
    labels: ['0.0', '0.2', '0.4', '0.6', '0.8', '1.0'],
    datasets: [
      {
        label: 'F1 Scores',
        data: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className='flex flex-col my-16 justify-center items-center flex-1 h-[300px]'>
      <h2 className='text-white'>F1 Radar Chart</h2>
      <Radar data={data} />
    </div>
  );
};

export default F1RadarChart;
