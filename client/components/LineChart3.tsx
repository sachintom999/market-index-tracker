import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS, TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { indexDetailData  } from '@/data/indexDetail';

ChartJS.register(TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart3 = () => {
//   const data = [
//     { v: 15363, vw: 129.849, o: 129.6, c: 129.99, h: 130.3, l: 129.6, t: 1673254800000, n: 364 },
//     { v: 13603, vw: 130.0603, o: 130.08, c: 129.95, h: 130.17, l: 129.9, t: 1673255100000, n: 291 },
//     // Add more data as needed
//   ];

  const data = indexDetailData.results

//   indexDetailData

  const chartData = {
    labels: data.map(item => new Date(item.t)),
    datasets: [
      {
        label: 'Stock Price',
        data: data.map(item => item.c),
        fill: false,
        borderColor: 'rgba(75, 192, 192, .8)',
        tension: 0.1,
        pointRadius:0
      },

    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'hour',
          tooltipFormat: 'HH:mm',
          displayFormats: {
            minute: 'HH:mm',
          },
        },
        title: {
          display: true,
          text: 'Time',
        },
        grid: {
            display: false,
          }
      },
      y: {

        // grid: {
        //     display: false,
        //   },
        title: {
          display: true,
          text: 'Price',
        },
        ticks: {
          callback: function (value) {
            return value.toFixed(2);
          },
        },
      },

      
    },

    plugins: {
        legend: {
          display: false,
        },
      }, 
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart3;
