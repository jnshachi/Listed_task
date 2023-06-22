import React from 'react'
import Sidebar from './Sidebar';
import '../styles/dashboard.scss';
import {BrowserRouter as Router} from "react-router-dom";

const Dashboard = () => {
  return (
    <div className='dashboard_main'>
      <Router>
        <div className='left'>
          <Sidebar/>
        </div>
      </Router>
        <div className='right'>
          right
        </div>

    </div>
  )
}

export default Dashboard