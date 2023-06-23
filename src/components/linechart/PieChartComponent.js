import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./PieChartComponent.scss";

const PieChartComponent = (props) => {
  return (
    <div className="pieouter">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={props.data}
            style={{ outline: "none" }}
            fill="#8884d8"
            dataKey="value"
            innerRadius={0}
          />

          <Tooltip
            cursor={false}
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="legendsection pielegend">
        {props.scheme.map((Linevalue,indx) => {
            console.log(Linevalue);
          return (
            <div>
              <p
                style={{
                  width: "8px",
                  height: "6px",
                  background: `${Linevalue.stroke}`,
                }}
              ></p>
              <p>{Linevalue.dataKey} <br/><span style={{fontWeight:"normal",fontSize:"14px"}}>{indx==0?"55%":(indx==1?"31%":"14%")}</span></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChartComponent;

const CustomTooltip = (props) => {
  return (
    <>
      {props.active && props.payload && props.payload.length && (
        <div className="custom-tooltip">
          <div className="text" style={{ color: "#FFFFFF" }}>
            {props.label}
          </div>
          <div className="tooltip-bg">
            {props.payload.map((e) => {
              return (
                <>
                  <div className="text">{`${e.name} : ${e.value}`}</div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
