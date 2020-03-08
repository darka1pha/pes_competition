import React from 'react'
import './Chart.css'
import NavBar from '../NavBar/NavBar'
import {Container , Row , Col} from 'react-bootstrap'
const Chart = props =>{
    return(
        <div style={{position:'absolute', display:'flex', flexDirection:'column' , height:'100%' , width:'100%'}}>
            <NavBar/>
            <div class='chartBgr'>
                <Container class="cf p-2">
                    <Row class="fl w-100 w-50-ns ph4 mt2">
                        <Col md className='m-4'><img class="db w-100" src="http://amir7amiri.ir/PESLogos/Chart.png"/></Col>
                    
                        <Col md className='m-4'><img class="db w-100" src="http://amir7amiri.ir/PESLogos/Last_cup.jpg"/></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Chart