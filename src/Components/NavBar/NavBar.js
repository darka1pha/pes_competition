import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = props =>{
    return(
        <nav className="flex justify-between bb b--white-10">
            <div className="center flex-grow pa3 flex items-center">
            <Link id='Link' to='/'><a className="bold link dib white dim mr3 mr4-ns" href="#0">خانه</a></Link>
            <Link id='Link' to='/register'><a className="bold link dib white dim mr3 mr4-ns" href="#0">ثبت نام</a></Link>
            </div>
        </nav>
    )
}
export default NavBar