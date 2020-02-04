import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = props =>{
    return(
        <ul id='navbar'>
            <Link id='Link' to='/'><li>Home</li></Link>
            <Link id='Link' to='/register'><li>Register</li></Link>
        </ul>
    )
}
export default NavBar