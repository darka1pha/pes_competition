import React, { useState,useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import axios from 'axios'

const TeamList = props => {
    const [Teams, setTeams] = useState([])
    var teamsList = [];
    useEffect(()=>{
        axios.get('https://amir7amiri.ir/pes/api/client/team/all')
            .then(function (response) {
                // handle success
                console.log(response)
                var teams=response.data.data.map((item)=>{
                    return item
                })
                setTeams([...Teams,...teams])
                console.log(Teams)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[])


        for(var i=0;i<Teams.length/3.0;i++)
        {
            teamsList=[...teamsList,
            <Row>
                <Col style={{fontFamily:'Vazir',borderRadius:'8px'}} sm className='border mr-2 mb-2 p-2'>
                    {Teams[i*3+0]}
                </Col>
                <Col style={{fontFamily:'Vazir',borderRadius:'8px'}} sm className='border mr-2 mb-2 p-2'>
                    {Teams[i*3+1]}
                </Col>
                <Col style={{fontFamily:'Vazir',borderRadius:'8px'}} sm className='border mr-2 mb-2 p-2'>
                    {Teams[i*3+2]}
                </Col>
            </Row>]
        }

    return (
        <div>
            <NavBar />
            <Container style={{marginTop:'15px'}}>
                <text style={{fontFamily:'Vazir' , fontSize:'25px', borderBottomColor:'gray',marginBottom:'10px'}}>تیم های ثبت نام شده</text>
                <Container className='mt-4'>
                    {teamsList}
                </Container>
            </Container>
        </div>
    )
}

export default TeamList