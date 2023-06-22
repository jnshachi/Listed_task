import { ReactComponent as DashboardIcon } from '../assets/dashboard_icon.svg';
import { ReactComponent as TransactionIcon } from '../assets/transaction_icon.svg';
import { ReactComponent as ScheduleIcon } from '../assets/schedule_icon.svg';
import { ReactComponent as SettingIcon } from '../assets/setting_icon.svg';
import { ReactComponent as UserIcon } from '../assets/user_icon.svg';
import "../styles/sidebar.scss";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    let naviagte=useNavigate();
  return (
    <aside className="sidebar">
        <div className = "sidebar-heading">
            <b className="board">Board.</b>
        </div>
        <div className="sidebarNav">
            <ul>
                <li className='nav-items' onClick={(e)=>naviagte("/dashboard")}>
                    
                        <DashboardIcon className ='nav-icons'/>
                        DASHBOARD  
                    
                </li>
                <li className='nav-items ' onClick={(e)=>naviagte("/transaction")}>
                    
                        <TransactionIcon  className ='nav-icons' />
                        TRANSACTION
                   
                </li>
                <li className='nav-items' onClick={(e)=>naviagte("/schedule")}>
                  
                        <ScheduleIcon  className ='nav-icons'/>
                        SCHEDULE
                    
                </li>
                <li className='nav-items' onClick={(e)=>naviagte("/user")}>
                   
                        <UserIcon  className ='nav-icons'/>
                        USER
                </li>
                <li className='nav-items' onClick={(e)=>naviagte("/setting")}>
                  
                        <SettingIcon className ='nav-icons'/>
                        SETTING
                </li>
                
            </ul>
        </div>
        <div className='end-object'>
            <ul>
                <li onClick={(e)=>naviagte("/help")}>Help</li>
                <li onClick={(e)=>naviagte("/contact-us")}>Contact Us</li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar