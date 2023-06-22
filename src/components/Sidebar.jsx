import { ReactComponent as DashboardIcon } from '../assets/dashboard_icon.svg';
import { ReactComponent as TransactionIcon } from '../assets/transaction_icon.svg';
import { ReactComponent as ScheduleIcon } from '../assets/schedule_icon.svg';
import { ReactComponent as SettingIcon } from '../assets/setting_icon.svg';
import { ReactComponent as UserIcon } from '../assets/user_icon.svg';
import "../styles/sidebar.scss";
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className = "sidebar-heading">
            <b className="board">Board.</b>
        </div>
        <div className="sidebarNav">
            <ul>
                <li className='nav-items'>
                    <Link to ="/dashboard">
                        <DashboardIcon className ='nav-icons'/>
                        DASHBOARD  
                    </Link>
                </li>
                <li className='nav-items '>
                    <Link to ="/transaction">
                        <TransactionIcon  className ='nav-icons'/>
                        TRANSACTION
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to= "/schedule">
                        <ScheduleIcon  className ='nav-icons'/>
                        SCHEDULE
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to= "/user">
                        <UserIcon  className ='nav-icons'/>
                        USER
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to ="/setting">
                        <SettingIcon className ='nav-icons'/>
                        SETTING
                    </Link>
                </li>
                
            </ul>
        </div>
        <div className='end-object'>
            <ul>
                <li>Help</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar