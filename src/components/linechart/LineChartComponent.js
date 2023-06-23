import React from "react";
import { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./LineChartComponent.css";

const LineChartComponent = (props) => {
  return (
    <>
      <div className="Linechartcontainer">
        <ResponsiveContainer>
          <LineChart
            className="linechart"
            margin={{ top: 5, right: 20, bottom: 5 }}
            
            data={props.data}
          >
            {/* background grid keeping vertical false */}
            <CartesianGrid
              strokeDasharray={"0"}
              strokeWidth={0.5}
              
              stroke={"#ddd"}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              dx={-10}
              dy={10}
              tickCount={6}
              stroke={"#222"}
              // label={{ value: "Months", offset: "0", position: "insideBottom" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              dx={-15}
              
              tickCount={5}
              stroke={"#222"}
              // display="none"
              // hide
            />
            {/* tooltip which appears on hover */}
            <Tooltip
              cursor={false}
              content={<CustomTooltip opacdata={props.currentSelected} />}
              wrapperStyle={{ outline: "none" }}
            />

            {/* dynamically getting all the dataLines  */}
            {props.Lines.map((singleLine) => {
              console.log(props.currentSelected);
              return (
                <Line
                  type="monotone"
                  opacity={props.currentSelected[singleLine.dataKey]}
                  dataKey={singleLine.dataKey}
                  stroke={singleLine.stroke}
                  strokeWidth={2}
                  dot={{ r: 0, stroke: "#777", fill: "#fff", strokeWidth: 1 }}
                  activeDot={{
                    r: props.currentSelected[singleLine.dataKey] == 0 ? 0 : 5,
                    stroke: "#fff",
                    fill: "#222",
                    strokeWidth: 1,
                  }}
                />
              );
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default LineChartComponent;

const CustomTooltip = (props) => {
  // console.log(props);
  return (
    <>
      {props.active && props.payload && props.payload.length && (
        <div className="custom-tooltip">
          <div className="text" style={{ color: "#FFFFFF" }}>
            {props.label}
          </div>
          <div className="tooltip-bg">
            {props.payload.map((e) => {
              return props.opacdata[e.name] == 1 ? (
                <>
                  <div className="text">
                    {/* <FiberManualRecordIcon style={{ color: e.color }} /> */}
                    {`${e.name} : ${e.value}`}
                  </div>
                </>
              ) : null;
            })}
          </div>
        </div>
      )}
    </>
  );
};
