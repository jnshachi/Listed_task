import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import LineChartComponent from "./LineChartComponent";
import "../../styles/linechartcontainer.scss"
// sample Data
const data = [
  {
    name: "Week 1",
    User: 0,
    Guest: 0,
    
  },
  {
    name: "Week 2",
    User: 300,
    Guest:  350,
   
  },
  {
    name: "Week 3",
    User: 100,
    Guest: 20,
    
  },
  {
    name: "Week 4",
    User: 278,
    Guest: 390,
   
  },
 
];

//  sample Lines Data
const Lines = [
  {
    dataKey: "Guest",
    stroke: "#E9A0A0",
    opacity: 1,
  },
  {
    dataKey: "User",
    stroke: "#9BDD7C",
    opacity: 1,
  },
  
];

const TimeLine = () => {
  const [currentSelected, setcurrentSelected] = useState({
    Guest: 1,
    VELLORE: 1,
    TIRUNELVELI: 1,
    TRICHY: 1,
    SALEM: 1,
    User: 1,
  });

  const [isInitial, setInitial] = useState(true);

  const changeOpactiy = (datakey) => {
    if (isInitial) {
      Object.keys(currentSelected).map((e) => {
        currentSelected[e] = 0;
      });

      setInitial(false);
    }

    currentSelected[datakey] = 1 - currentSelected[datakey];

    let check = false;
    Object.keys(currentSelected).map((e) => {
      if (currentSelected[e] == 1) check = 1;
    });

    if (!check) {
      Object.keys(currentSelected).map((e) => {
        return (currentSelected[e] = 1);
      });
      setInitial(true);
    }

    // setcurrentSelected(datakey)
    setcurrentSelected({
      ...currentSelected,
    });
  };
  return (
    <div className="linechartoutercontainer conatinershadow">
      <div className="othersection">
        <div className="headersec">
          <div className="headsecleft">Activities</div>
          <div className="headsecright">
            <button style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <li style={{fontSize:"33px",marginBottom:"2px", color:"#E9A0A0",width:"20%"}} ></li> Guest</button>
            <button style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <li style={{fontSize:"33px",marginBottom:"2px", color:"#9BDD7C",width:"20%"}} ></li> User</button>
           
            
          </div>
        </div>
        <div className="headersecsub">
        May-June 2021
        </div>
        <div className="legendsection">
          {/* {Lines.map((Linevalue) => {
            return (
              <div>
                <p
                  onClick={(e) => changeOpactiy(Linevalue.dataKey)}
                  style={{
                    width: "21px",
                    height: "8px",
                    background: `${Linevalue.stroke}`,
                    cursor: "pointer",
                  }}
                ></p>
                <p>{Linevalue.dataKey}</p>
              </div>
            );
          })} */}
        </div>
      </div>
      {/* LineChart Component */}
      <LineChartComponent
        data={data}
        Lines={Lines}
        currentSelected={currentSelected}
      />
    </div>
  );
};

export default TimeLine;
