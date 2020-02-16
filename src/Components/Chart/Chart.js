import React from 'react'
import './Chart.css'
import NavBar from '../NavBar/NavBar'

const Chart = props =>{
    return(
        <div style={{position:'absolute', display:'flex', flexDirection:'column' , height:'100%' , width:'100%'}}>
            <NavBar/>
            <div class='chartBgr'>
                <main class="cf pa2">
                    <div class="fl w-100 w-50-ns ph4 mt2">
                        <img class="db w-100" src="http://amir7amiri.ir/PESLogos/Chart.png"/>
                    </div>
                    <div class="fl w-100 w-50-ns ph4 mt2">
                        <img class="db w-100" src="http://amir7amiri.ir/PESLogos/Last_cup.jpg"/>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Chart