import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { Navbar, Nav, Image } from 'react-bootstrap'
const NavBar = props =>{

    var oldNav=[]
    var newNav=[]
    oldNav=(<nav style={{backgroundColor:'white'}} className="flex justify-between bb b--white-10">
            <img alt='' className='icons ' src={require('./ceuk.png')}/>
            <div className="center flex-grow pa3 flex items-center nav">
                <Link id='Link' to='/gallery'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr3 mr4-ns navItem" href="#0">گالری</a></Link>
                <Link id='Link' to='/chart'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr3 mr4-ns navItem" href="#0">نمودار مسابقات</a></Link>
                <Link id='Link' to='/register'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr3 mr4-ns navItem" href="#0">ثبت نام</a></Link>
                <Link id='Link' to='/rules'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr3 mr4-ns navItem" href="#0">قوانین</a></Link>
                <Link id='Link' to='/'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr3 mr4-ns active-gray navItem" href="#0">خانه</a></Link>
            </div>
            <img alt ='' className='icons' src={require('./sbuk.png')}/>
        </nav>)

    newNav=(
        <Navbar className='w-100' bg="light" expand="md">
            <img alt='' className='icons float-left' src={require('./ceuk.png')}/>
            <Navbar.Toggle className='tglbtn' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100">
                <Link id='Link' to='/aboutus'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim  mr4-ns navItem" href="#0">درباره ما</a></Link>
                    <Link id='Link' to='/teamlist'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim  mr4-ns navItem" href="#0">تیم ها</a></Link>
                    <Link id='Link' to='/gallery'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim  mr4-ns navItem" href="#0">گالری</a></Link>
                    <Link id='Link' to='/chart'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim  mr4-ns navItem" href="#0">نمودار مسابقات</a></Link>
                    <Link id='Link' to='/register'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim  mr4-ns navItem" href="#0">ثبت نام</a></Link>
                    <Link id='Link' to='/rules'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim mr4-ns navItem" href="#0">قوانین</a></Link>
                    <Link id='Link' to='/'><a style={{fontFamily:'Vazir-FD'}} className="bold link dib black dim  mr4-ns active-gray navItem" href="#0">خانه</a></Link>
                </Nav>
                <Image alt ='' className='icons sbicn' src={require('./sbuk.png')}/>
            </Navbar.Collapse>
        </Navbar>
    )
    


    return(
        {...newNav}
    )
}
export default NavBar