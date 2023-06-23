import React from 'react'
import '../../styles/header.scss'
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import { ReactComponent as BellIcon } from '../../assets/bell.svg';


const Header = ({ imageUrl }) => {
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
          <div className='profile' style={{backgroundImage: `url(${ imageUrl })`}}> </div>
        </div>
        
    </header>
  )
}

export default Header