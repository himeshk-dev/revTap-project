import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ orders }) => {
  const sortedOrders = orders.sort(
    (a, b) => new Date(a.created).valueOf() - new Date(b.created).valueOf()
  );
  const data = {
    labels: sortedOrders.map((el) => el.created),
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        borderColor: "#6C76FF",
        borderCapStyle: "butt",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#6C76FF",
        pointHoverBorderColor: "#6C76FF",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: sortedOrders.map((el) => ({ y: el.price, x: el.created })),
      },
    ],
  };
  return (
    <Line
      width={500}
      height={300}
      data={data}
      options={{
        legend: {
          display: false,
        },
        layout: {
          padding: {
            top: 20,
            right: 20,
          },
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Total Price",
                fontColor: "#989898",
              },
              ticks: {
                stepSize: 200,
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Dates",
                fontColor: "#989898",
              },
              type: "time",
              time: {
                unit: "day",
                displayFormats: "DD",
              },
              gridLines: {
                display: false,
              },
              ticks: {
                maxRotation: 0.00001,
                callback(value, index) {
                  if (index % 2 === 0) return "";
                  return new Date(value).getDate();
                },
              },
            },
          ],
        },
      }}
    />
  );
};

export default LineChart;
