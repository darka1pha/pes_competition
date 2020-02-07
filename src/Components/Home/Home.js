import React,{useState} from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Countdown from 'react-countdown-now'
import {Link} from 'react-router-dom'

const Home = props =>{
    const Completionist = () => <span>You are good to go!</span>;
    const [isloaded,setIsloaded]=useState(false)
    const renderer = ({ days,hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
                <div id='timer'>
                    <div id='day'>
                        <div id='time'>{days} </div>
                        <text id='now'>روز</text>
                    </div>
                    <div id='day'> 
                        <div id='time'>{hours} </div> 
                        <text id='now'>ساعت</text>
                    </div>
                    <div id='day'>
                        <div id='time'>{minutes} </div>
                        <text id='now'>دقیقه</text>
                    </div>
                    <div id='day'>
                        <div id='time'>{seconds}</div>
                        <text id='now'>ثانیه</text>
                    </div>
                </div>
          )}
      };

    return(
        <div id='container'>
            <NavBar/>
            <div id='wrapper'>
                <div id='time-wrapper'>
                    <Countdown
                    date={Date.now() + 100000000}
                    renderer={renderer}
                    />
                </div>
                <div id='discription-wrapper'>
                    <text id='disc'>
                        Pro Evolution Soccer 2019 wallpapers for 4K, 1080p HD and 720p HD resolutions
                        and are best suited for Desktops, android phones, tablets, ps4 wallpapers,
                        wide-screen displays, laptops, iPad and iPhone/iPod Touch.
                    </text>     
                    <Link to='/register' className='grow' id='reg-btn'>ثبت نام</Link>              
                </div>
            </div>
        </div>
    )
}
export default Home