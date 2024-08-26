import React from 'react'
import './Footer.css'
import YoutubeIcon from '../../assets/youtube_icon.png'
import TwitterIcon from '../../assets/twitter_icon.png'
import InstragramIcon from '../../assets/instagram_icon.png'
import FacebookIcon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='FooterIcons'>
        <img src={FacebookIcon}/>
        <img src={InstragramIcon}/>
        <img src={YoutubeIcon}/>
        <img src={TwitterIcon}/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help center</li>
        <li>Media center</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Contact us</li>
      </ul>
      <p className='copyright'>1997 - 2024 Netflix, Inc. Emix, Inc, Juan Cervantes</p>
    </div>
  )
}

export default Footer
