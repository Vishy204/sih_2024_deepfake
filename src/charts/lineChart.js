import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
function lineChart() {
  Chart.register(...registerables);
  const data = {
    labels: ["0.0", "0.2", "0.4", "0.6", "0.8", "1.0"], // X-axis labels (confidence)
    datasets: [
      {
        label: "Focused",
        data: [0, 0.3, 0.8, 0.6, 0.2, 0.1], // Sample data for the Y-axis (F1)
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Unfocused",
        data: [0, 0.1, 0.3, 0.6, 0.5, 0.1], // Sample data for the Y-axis (F1)
        fill: true,
        borderColor: "rgb(75, 192, 11)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "F1",
        },
        min: 0,
        max: 1,
        ticks: {
          stepSize: 0.2, // Step size for Y-axis
        },
      },
      x: {
        title: {
          display: true,
          text: "Confidence",
        },
        min: 0,
        max: 1,
        ticks: {
          stepSize: 0.2, // Step size for X-axis
        },
      },
    },
  };
  return (
    <div className="flex flex-col flex-1 h-full my-3 outline-2">
      <h2 className="text-center text-white">F1 Confidence Curve</h2>
      <Line data={data} options={options} />
    </div>
  );
}
export default lineChart;
