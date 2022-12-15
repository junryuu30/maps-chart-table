import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";

function ChartData() {
  const [chart, setChart] = useState([]);

  const [chartData, setChartData] = useState({});
  const getDataChart = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // console.log(response.data)
      // setChartData(response.data)
      setChart(response.data.map((item) => item.userId));
    } catch (error) {
      console.log(error);
    }
  };
  console.log("ini datanya di barchart", chartData);
  console.log("ini datanya di barchart", chart);
  // for name user id
  const newChart = [...new Set(chart)];
  console.log("new charttt", newChart);

  const countobjek = {};
  chart.forEach(function (i) {
    countobjek[i] = (countobjek[i] || 0) + 1;
  });
  console.log("ini countobjek", countobjek);
  // for how much they post per user
  const sumPost = Object.values(countobjek);

  console.log(Object.values(countobjek));
  console.log(sumPost);

  useEffect(() => {
    getDataChart();
  }, []);

  return (
    <>
      <h2 className="my-3 text-start">Data Chart Post by User Id</h2>
      <Row>
        <Col className="col-lg-6">
          <Card className="p-2 m-2">
            <Bar
              data={{
                labels: newChart,
                datasets: [
                  {
                    label: "Total post per-user",
                    data: sumPost,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
              }}
            />
          </Card>
        </Col>
        <Col className="col-lg-6">
          <Card className="p-2 m-2">
            <Line
              data={{
                labels: newChart,
                datasets: [
                  {
                    label: "Total post per-user",
                    data: sumPost,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
              }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ChartData;
