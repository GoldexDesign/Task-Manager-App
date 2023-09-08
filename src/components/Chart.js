// Chart.js

import React from "react";
import "../styles/Chart.css";

const Chart = ({ statuses }) => {
  const renderSlices = () => {
    let startAngle = 0;

    return Object.keys(statuses).map((status, index) => {
      const angle = (statuses[status] / 100) * 360;
      const sliceStyle = {
        transform: `rotate(${startAngle}deg)`,
        clip: "rect(0px, 100px, 200px, 0px)",
      };

      startAngle += angle;

      return (
        <div
          key={index}
          className={`slice ${status.toLowerCase()}`}
          style={sliceStyle}
        ></div>
      );
    });
  };

  return <div className="pie-chart">{renderSlices()}</div>;
};

export default Chart;
