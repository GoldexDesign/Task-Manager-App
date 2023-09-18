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
      type: "pie",
      backgroundColor: "#f5f5f5",
    },
    title: {
      text: "Task Status Composition",
      style: {
        color: "rgb(56, 140, 184", // Set the title color to match the label color
        fontSize: "18px", // Adjust the font size to match the label font size
        fontWeight: "900", // You can also adjust the font weight if needed
        fontFamily: "Arial, sans-serif", // Set the font family
      },
    },
    colors: [
      // Define your custom colors here
      "rgb(135, 249, 135)", // Done (green)
      "rgb(56, 140, 184)", // Processing (blue)
      "rgb(247, 246, 144)", // New (red)
    ],
    credits: {
      enabled: false, // Hide the highcharts.com credits
    },
    plotOptions: {
      pie: {
        allowPointSelect: true, // Allow selecting a slice on click
        cursor: "pointer", // Change the cursor to a pointer when hovering over the slices
        dataLabels: {
          format: "<b>{point.name}</b>: {point.percentage:.1f}%",
        },
        showInLegend: true, // Show legend
        states: {
          hover: {
            halo: {
              size: 10, // Customize the halo size on hover
            },
            brightness: 0.1, // Adjust brightness on hover (0.2 = 20% brighter)
          },
        },
      },
    },
    series: [
      {
        data: [
          {
            name: "Done",
            y: donePercentage,
          },
          {
            name: "Processing",
            y: processingPercentage,
          },
          {
            name: "New",
            y: newPercentage,
          },
        ],
      },
    ],
    accessibility: {
      enabled: false, // Disable accessibility features and remove the warning
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CircleChart;
