import React from 'react'
import './NavBar.css'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search_icon.svg'
import BellIcon from '../../assets/bell_icon.svg'
import ProfileIcon from '../../assets/profile_img.png'
import CaretIcon from '../../assets/caret_icon.svg'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='NavBarLeft'>
        <img src={Logo} alt=''/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My list</li>
          <li>Browse my languages</li>
        </ul>
      </div>
      <div className='NavBarRight'>
        <img src={SearchIcon} className='icons'/>
        <p>Children</p>
        <img src={BellIcon} className='icons'/>
        <div className='NavBarProfile'>
          <img src={ProfileIcon} className='profile'/>
          <img src={CaretIcon} alt=''/>
          <div className='DropDown'>
              <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
