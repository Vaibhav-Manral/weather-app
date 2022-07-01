import React from "react";
import Chart from "react-apexcharts";
import "../src/App.css";
function Graph() {
    var obj = {
      options: {
        chart: {
          id: "basic-bar",
          zoom:{
            enabled:false
          }
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ],

    };
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={obj.options}
              series={obj.series}
              type="area"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }


export default Graph;