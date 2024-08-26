import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../assets/hero_banner.jpg'
import HeroTitle from '../../assets/hero_title.png'
import PlayIcon from '../../assets/play_icon.png'
import InfoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitlteCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className='Hero'>
        <img src={Hero} className='BannerImg'/>
        <div className='HeroCaption'>
          <img src={HeroTitle} className='CaptionImg'/>
          <p>Kadir Yilmaz is an ordinary man with an extraordinary past.
           Raised in the ancient neighborhoods of Stambul, 
           Kadir is an engineer by day and a vigilante by night,
           protecting the city from the shadows.</p>
          <div className='HeroBtn'>
            <button className='btn'><img src={PlayIcon}/>Play</button>
            <button className='btn darkBtn'><img src={InfoIcon}/>More info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className='moreCards'>
        <TitleCards title={'Blockbuster movies'} category={"top_rated"}/>
        <TitleCards title={'Ony on Netflix'}  category={"popular"}/>
        <TitleCards title={'UpComing'}  category={"upcoming"}/>
        <TitleCards title={'If you still single...'}  category={"now_playing"}/>
      </div>
    <Footer/>
    </div>
  )
}

export default Home
