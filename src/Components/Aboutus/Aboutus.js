import React from 'react'
import { Card,Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import NavBar from '../NavBar/NavBar'
const Aboutus = props =>{
    return(
        <div style={{backgroundColor:'#f5f7fa' , height:'100vh' , overflow:'auto'}}>
            <NavBar/>
            <Container className='mt-3'>
                <text style={{fontFamily:'Vazir-FD',fontSize:'25px' , fontWeight:'bold'}}>درباره ما</text>
                <Row>
                    <Col md>
                        <Card style={{ width: 'auto' , margin:'10px 0px' }}>
                            <Card.Img variant="top" src={require('./boy.png')}  />
                            <Card.Body>
                                <Card.Text style={{fontFamily:'Vazir-FD' , direction:'rtl'}}>
                                <b style={{fontSize:'20px'}}>امید داور</b> <br></br>
                                <p style={{fontSize:'17px'}}>توسعه دهنده PHP Laravel</p>
                                </Card.Text>
                                <a target='_blank' className='m-2' href='https://t.me/omidamusic'><img height='35px' src={require('./telegram.png')}/></a>
                                <a target='_blank' href='https://www.instagram.com/omidamusic/'><img height='35px' src={require('./instagram.png')}/></a>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col md>
                        <Card style={{ width: 'auto', margin:'10px 0px' }}>
                            <Card.Img variant="top" height='25%' src={require('./boss.png')} />
                            <Card.Body>
                                <Card.Text style={{fontFamily:'Vazir-FD' , direction:'rtl'}}>
                                <b style={{fontSize:'19px'}}>محمد امین امیری فر</b> <br></br>
                                <p style={{fontSize:'17px'}}>برگزار کننده مسابقات</p>
                                </Card.Text>
                                <a target='_blank' className='m-2' href='https://t.me/amir7amiri'><img height='35px' src={require('./telegram.png')}/></a>
                                <a target='_blank' href='https://www.instagram.com/amir7amiri/'><img height='35px' src={require('./instagram.png')}/></a>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col md>
                        <Card style={{ width: 'auto',margin:'10px 0px' }}>
                            <Card.Img variant="top" src={require('./boy.png')}  />
                            <Card.Body>
                                <Card.Text style={{fontFamily:'Vazir-FD' , direction:'rtl'}}>
                                <b style={{fontSize:'19px'}}>ابوالفضل عمرانی</b> <br></br>
                                <p style={{fontSize:'17px'}}>توسعه دهنده React Js</p>
                                </Card.Text>
                                <a target='_blank' className='m-2' href='https://t.me/darka1pha'><img height='35px' src={require('./telegram.png')}/></a>
                                <a target='_blank' href='https://www.instagram.com/_abolfazl.omrani_/'><img height='35px' src={require('./instagram.png')}/></a>
                            </Card.Body>
                        </Card>
                        </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Aboutus