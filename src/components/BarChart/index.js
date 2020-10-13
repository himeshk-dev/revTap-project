import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ customers }) {
  const sortedCustomers = customers.sort(
    (a, b) => new Date(a.created).valueOf() - new Date(b.created).valueOf()
  );
  const data = {
    labels: sortedCustomers.map((el) => el.created),
    datasets: [
      {
        backgroundColor: "#6C76FF",
        barThickness: 10,
        borderWidth: 1,
        data: sortedCustomers.map((el) => ({ y: el.orders, x: el.created })),
      },
    ],
  };
  return (
    <Bar
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
                labelString: "Orders Count",
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
}

export default BarChart;
