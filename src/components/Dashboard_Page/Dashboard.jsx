import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import '../../styles/dashboard.scss';
import {BrowserRouter as Router} from "react-router-dom";
import Card from './Card';

import { ReactComponent as CameraIcon } from '../../assets/camera.svg';
import { ReactComponent as LikeIcon } from '../../assets/likes.svg';
import { ReactComponent as TransactionIcon } from '../../assets/transaction_icon_black.svg';
import { ReactComponent as PeopleIcon } from '../../assets/people.svg';
import TimeLine from '../linechart/TimeLine';
import PieChartComponent  from "../linechart/PieChartComponent"



const data = [
  { name: "Basic Tree", value: 55, fill: "#8884d8" },
  { name: "Custom Hot Pant", value: 31, fill: "rgb(236, 232, 26)" },
  { name: "Super Hoodies", value: 14, fill: "rgb(150, 200, 56)" },
 
];

//  sample Lines Data
const Scheme = [
  {
    dataKey: "Basic Tree",
    stroke: "#8884d8",
  },
  {
    dataKey: "Custom Hot Pant",
    stroke: "rgb(236, 232, 26)",
  },
  {
    dataKey: "Super Hoodies",
    stroke: "rgb(150, 200, 56)",
  },
 
];


const Dashboard = ({imageUrl}) => {
  return (
    <div className='dashboard_main'>
     <Router>
        <div className='left'>
          <Sidebar/>
        </div>
        </Router>
        <div className='right'>
          <Header imageUrl={imageUrl}/>
          <div className="card-container">
            <Card
              icon= {<CameraIcon/>}
              boldText="$2,129,430"
              smallText="Total Revenue"
              bgColor="#DDEFE0"
            />
            <Card
              icon={<TransactionIcon/>}
              boldText="1,520"
              smallText="Total Transaction"
              bgColor="#F4Ecdd"
            />
            <Card
              icon={<LikeIcon/>}
              boldText="9,721"
              smallText="Total Likes"
              bgColor="#efdada"
            />
            <Card
              icon={<PeopleIcon/>}
              boldText="892"
              smallText="Total User"
              bgColor="#dee0ef"
            />
          </div>

          
         <TimeLine />
          
          <div className='dashboard-last'>
            <div className='pie'>
  
            <div className="linechartoutercontainer threechartconatiner newpie">

            <div className="piechartcontainer">
        <div className="piecharthead">
          <div className=" headsecleft headingtext">
            Top Products
            
          </div>

          <button style={{border:"0px",fontWeight:"normal"}}>
            May-June 2021 
          </button>
        </div>

        <PieChartComponent data={data} scheme={Scheme} />
      </div>
            




            </div>
            </div>


            <div className='todo-container'>
              <div className='todo-list'>
                <div className='todo-heading'>Today's Schedule</div>
                  <div className='todo-item'>
                  <span className="todo-bold">Meeting with suppliers from Kuta Bali</span>
                    <br />
                  <span className="todo-light">
                    14:00-15:00</span>
                    <br/>
                    <span className="todo-light">at Sunset Road,Kuta,Bali
                  </span>
                </div>
                <div className='todo-item-2' >
                  <span className="todo-bold">Meeting with suppliers from Kuta Bali</span>
                    <br />
                    <span className="todo-light">
                    18.00-20.00
                    </span>
                    <br/>
                    <span className="todo-light">
                    at Central Jakata
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Dashboard