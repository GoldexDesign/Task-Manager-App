import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CircleChart = ({ tasks }) => {
  // Calculate the percentages
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.status === "Done").length;
  const processingTasks = tasks.filter((task) => task.status === "Processing")
    .length;
  const newTasks = tasks.filter((task) => task.status === "New").length;

  const donePercentage = (doneTasks / totalTasks) * 100;
  const processingPercentage = (processingTasks / totalTasks) * 100;
  const newPercentage = (newTasks / totalTasks) * 100;

  // Define your chart options
  const options = {
    chart: {
      type: "pie", // Use 'pie' for a circle chart
    },
    title: {
      text: "Circle Chart Example",
    },
    series: [
      {
        data: [
          {
            name: "Done",
            y: donePercentage, // Use the calculated percentage
          },
          {
            name: "Processing",
            y: processingPercentage, // Use the calculated percentage
          },
          {
            name: "New",
            y: newPercentage, // Use the calculated percentage
          },
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CircleChart;
