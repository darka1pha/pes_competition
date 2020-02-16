import React from 'react'
import './Rules.css'
import NavBar from '../NavBar/NavBar'

const Rules = props =>{
    return(
        <div className='rulesBgr'>
            <div style={{height:'100%' , width:'100%' ,backgroundColor:'rgba(0,0,0,0.6)' ,display:'flex' ,flexDirection:'column'}}>
                <NavBar/>
                <div className='rules'>
                    
                </div>
            </div>
        </div>
    )
}
export default Rules