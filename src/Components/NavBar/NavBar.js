import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
const NavBar = props =>{
    return(
        <nav style={{backgroundColor:'white'}} className="flex justify-between bb b--white-10">
            <img alt='' className='icons' src={require('./ceuk.jpg')}/>
            <div className="center flex-grow pa3 flex items-center nav">
                <Link id='Link' to='/gallery'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr3 mr4-ns navItem" href="#0">گالری</a></Link>
                <Link id='Link' to='/chart'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr3 mr4-ns navItem" href="#0">نمودار مسابقات</a></Link>
                <Link id='Link' to='/register'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr3 mr4-ns navItem" href="#0">ثبت نام</a></Link>
                <Link id='Link' to='/rules'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr3 mr4-ns navItem" href="#0">قوانین</a></Link>
                <Link id='Link' to='/'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr3 mr4-ns active-gray navItem" href="#0">خانه</a></Link>
            </div>
            <img alt ='' className='icons' src={require('./sbuk.jpg')}/>
        </nav>
    )
}
export default NavBar