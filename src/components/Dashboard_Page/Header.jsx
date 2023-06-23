import React from 'react'
import '../../styles/header.scss'
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import { ReactComponent as BellIcon } from '../../assets/bell.svg';
import { googleLogout } from '@react-oauth/google';
import { Tooltip } from 'recharts';


const Header = ({ imageUrl }) => {
  const handleLogout=()=>{
    googleLogout();
    localStorage.clear();
  window.location.reload();
  }
  return (
    <header className='header-outer'>
        <div className='heading'>Dashboard</div>
         <div className="header-right">
          <div className='search'>
              <input type ='text' placeholder='Search...'></input>
              <div className='icon-container'>
                  <SearchIcon/>
              </div>
          </div>
          <div className='bell'><BellIcon/></div>
          <div className='profile tooltip' onClick={(e)=>handleLogout()} style={{backgroundImage: `url(${ imageUrl })`,cursor:'pointer'}}> <span class="tooltiptext">Logout</span></div>
        </div>
        
    </header>
  )
}

export default Header