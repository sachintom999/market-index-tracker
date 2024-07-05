import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios, { AxiosResponse } from "axios";
import { useParams } from "next/navigation";
import { useMarketData } from "@/contexts/marketData";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart3 = () => {
  const [apiData, setApiData] = useState([]);
  const { id: index } = useParams();
  const { marketDate } = useMarketData();

  useEffect(() => {
    const fetchIndexData = async (): Promise<any | null> => {
      try {
        const url = `${process.env.NEXT_PUBLIC_POLYGON_BASE_URL}/v2/aggs/ticker/${index}/range/1/hour/${marketDate}/${marketDate}?sort=asc&limit=1000&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`;
        console.log(url)
        const response: AxiosResponse<any> = await axios.get(url);
        setApiData(response.data.results);
      } catch (error) {
        console.log({ error });
      }
    };

    fetchIndexData();
  }, [marketDate]);

  const chartData = {
    labels: apiData?.map((item) => new Date(item.t)),
    datasets: [
      {
        label: "Stock Price",
        data: apiData?.map((item) => item.c),
        fill: false,
        borderColor: "rgba(75, 192, 192, .8)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "hour",
          tooltipFormat: "HH:mm",
          displayFormats: {
            minute: "HH:mm",
          },
        },
        title: {
          display: true,
          text: "Time",
        },
        grid: {
          display: false,
        },
      },
      y: {
        // grid: {
        //     display: false,
        //   },
        title: {
          display: true,
          text: "Price",
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
