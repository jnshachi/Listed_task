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


const Dashboard = () => {
  return (
    <div className='dashboard_main'>
      <Router>
        <div className='left'>
          <Sidebar/>
        </div>
      </Router>
        <div className='right'>
          <Header/>
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

          <div className='line-graph-container'></div>
          <div className='dashboard-last'>
            <div className='pie'></div>

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