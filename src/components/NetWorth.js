import React from 'react'
import Background from '../images/bg.jpg'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NetWorth = () => {



    return (
        <>

            <Row>


                <Col >
                    <Row className="m-3">
                        <Col xs={12}>
                        <p className='p-3 quote' style={{ textAlign: 'center', fontFamily: 'Rubik', color: 'white' }}>In investing, what is comfortable is rarely profitable.<p>Right Investments can Make you Rich, but they work Slowwwly , be patient.</p> If you want to get Rich quick - Invest in yourself , IT PAYS THE BEST RETURNS !!</p>
                        </Col>
                    </Row>
                    <Row className='mt-3 mx-3' style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                        <Col className="my-3" xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Card border="primary">
                                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>Target Estimation</Card.Header>
                                <Card.Body>
                                    <Card.Title>Calculate Monthly SIP options for given target</Card.Title>
                                    <Card.Text>
                                    calculate the wealth gain and expected returns for your monthly SIP investment.
    </Card.Text>
                                    <Link to='/calculator/SIP'><Button variant="primary">Calculate</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="my-3" xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Card border="primary">
                                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>PPF calculator</Card.Header>
                                <Card.Body>
                                    <Card.Title>Public Provident Fund Maturity Calculation</Card.Title>
                                    <Card.Text>
                                        Public Provident Fund (PPF) was introduced in India in 1968 with the objective to mobilize small saving in the form of investment
    </Card.Text>
    <Link to='/calculator/PPF'><Button variant="primary">Calculate</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="my-3" xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Card border="primary">
                                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>NPS Calculator</Card.Header>
                                <Card.Body>
                                    <Card.Title>National Pension Scheme Maturity Calculation</Card.Title>
                                    <Card.Text>
                                    The NPS is a good scheme for anyone who wants to plan for their retirement early on and has a low-risk appetite.
    </Card.Text>
    <Link to='/calculator/NPS'><Button variant="primary">Calculate</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>
    )
}

export default NetWorth
