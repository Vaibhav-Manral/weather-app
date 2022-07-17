import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import "../App.css";
function Graph(p) {
  const element=[];
  p.data.map((el)=>{
    element.push(el.temp.max.toFixed())
  });

    var obj = {
      options: {
        chart: {
          zoom:{
            enabled:false
          }
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8,9,10,11]
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [
        {
          name: "Temp",
          data: element
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
              // align="center"
            />
          </div>
        </div>
      </div>
    );
  }


export default Graph;