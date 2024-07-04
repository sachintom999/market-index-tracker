'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




const options = {
  scales: {
    x: {
      ticks: {
        callback: function(value, index, values) {
          return labels[index];
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function(value, index, values) {
          return value.toFixed(0); // Ensure y-axis labels are whole numbers
        },
      },
    },
  },
};


const labels = [
  '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
];


export const data = {
  labels,
  datasets: [
    {
      label: 'Stock Price',
      data: labels.map(() => faker.datatype.number({ min: 114, max: 128 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function LineChart2() {
  return <Line options={options} data={data} />;
}