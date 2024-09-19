import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  // Generate labels for x-axis based on the length of the data
  const labels = data.map((_, i) => `Frame ${i + 1}`);

  // Chart.js dataset
  const chartData = {
    labels,
    datasets: [
      {
        label: "Reality Score",
        data: data, // Use the passed `data` prop here
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw.toFixed(2)}`; // Correct template literal
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Frame",
        },
      },
      y: {
        title: {
          display: true,
          text: "Prediction Score",
        },
        beginAtZero: true,
        min: 0, // Start y-axis at 0
        max: 5, // End y-axis at 1
        ticks: {
          stepSize: 0.1, // Adjust step size if needed
        },
      },
    },
  };

  return (
  <div className="flex flex-col content-center justify-center w-[50%]  mx-3 my-6">
  <Line data={chartData} options={options} />;
  </div>
  )
};

export default LineChart;
