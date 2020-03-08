import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Countdown from 'react-countdown-now'
import {Link} from 'react-router-dom'

const Home = props =>{
    const Completionist = () => <span>مسابقات هم اکنون شروع شده است</span>;
    const renderer = ({ days,hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
                <div  id='timer'>
                    <div id='day'>
                        <div style={{fontFamily:'Vazir-FD'}} id='time'>{days} </div>
                        <text style={{fontFamily:'Vazir-FD'}} id='now'>روز</text>
                    </div>
                    <div id='day'> 
                        <div style={{fontFamily:'Vazir-FD'}} id='time'>{hours} </div> 
                        <text style={{fontFamily:'Vazir-FD'}} id='now'>ساعت</text>
                    </div>
                    <div id='day'>
                        <div style={{fontFamily:'Vazir-FD'}} id='time'>{minutes} </div>
                        <text style={{fontFamily:'Vazir-FD'}} id='now'>دقیقه</text>
                    </div>
                    <div id='day'>
                        <div style={{fontFamily:'Vazir-FD'}} id='time'>{seconds}</div>
                        <text style={{fontFamily:'Vazir-FD'}} id='now'>ثانیه</text>
                    </div>
                </div>
          )}
      };

    return(
        <div id='container' style={{fontFamily:'Vazir-FD'}}>
            <div className='container2' style={{fontFamily:'Vazir-FD'}}>
                <NavBar/>
                    <div id='wrapper'>
                        <div  id='time-wrapper'>
                            <Countdown 
                            date={new Date('March 25, 2020 00:00:00')}
                            renderer={renderer}
                            />
                        </div>
                        <div id='discription-wrapper'>
                            <p id='disc' style={{fontFamily:'Vazir-FD'}}>
                                 دانشگاه شهید باهنر کرمان
                                 <br></br>
                                 انجمن مهندسی کامپیوتر
                                 <br></br>
                                 برگزار میکند :
                                 <br></br><br></br>
                                 دومین دوره مسابقات PES 2019
                                 
                                 در قالب تیم های دو نفره
                                 <br></br>
                                 با بروزترین نقل و انتقالات
                                 <br></br> 
                                 ورودی هر تیم 20,000 تومان
                                 <br></br> <br></br>
                                 پشتیبانی <a target='_blank' href='https://t.me/cec_support' style={{color:'white'}}>cec_support@</a>
                            </p>     
                            
                            <Link style={{fontFamily:'Vazir-FD'}} to='/register' className='grow' id='reg-btn'>ثبت نام</Link>              
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Home