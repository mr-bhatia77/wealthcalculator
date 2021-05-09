import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { withRouter } from "react-router"
import PieChart from './PieChart'


const Calculator = ({ match }) => {

    const [maturityAmount, setMaturityAmount] = useState()
    const [monthlyInvestment, setMonthlyInvestment] = useState()
    const [roi, setRoi] = useState()
    const [time, setTime] = useState()
    const [interest, setInterest] = useState()
    const [showCol, setShowCol] = useState(false)
    const [id, setId] = useState('')
    const [pension, setPension] = useState(0)



    const calculate = (e) => {

        e.target.name === 'monthlyInvestment' ? setMonthlyInvestment(e.target.value) : e.target.name === 'roi' ? setRoi(e.target.value) : setTime(e.target.value)
    }

    const calculateButton = (e) => {
        setShowCol(true)
        let i = roi / 100 / 12
        let n = time * 12;
        let finalValue = 0;
        if (id === 'SIP') {
            finalValue = monthlyInvestment * (Math.pow((1 + i), n) - 1) / i * (1 + i)
            setInterest((finalValue - monthlyInvestment * n).toFixed(2))
        }
        if (id === 'PPF' || id === 'NPS') {
            i = roi / 100
            n = id === 'NPS' ? 60 - time : time
            finalValue = monthlyInvestment * (Math.pow((1 + i), n) - 1) / i * (1 + i)
            setInterest((finalValue - monthlyInvestment * n).toFixed(2))
        }
        console.log(finalValue, roi, monthlyInvestment * n / 12)
        setMaturityAmount(finalValue.toFixed(2))
        setPension((finalValue*0.4*0.06/12).toFixed(2))


    }

    useEffect(() => {
        setId(match.params.id)
        match.params.id === 'PPF' ? setRoi(8) : match.params.id === 'NPS' ? setRoi(10) : setRoi(null)
    }, [match.params.id])


    return (
        <>
            <Row>
                <Col className='mt-3 mx-3' >
                    <Row className='text-center'>
                        <h3 className='mx-auto '>{id === 'SIP' ? 'Systematic Investment Plan (SIP)' : id === 'PPF' ? 'Public Provident Fund (PPF)' : 'National Pension Scheme (NPS)'} Calculator</h3>

                        <p className='blueBackground p-3'> This calculator will calculate the wealth gain and expected returns for your monthly {id} investment. Indeed, you get a rough estimate on the maturity amount for any of your {id} contribution, based on a projected annual return rate.</p>
                    </Row>
                    <Row>
                        <Col className='my-3 mx-3' md={8}>

                            <h5>{id} Return Calculation</h5>
                            {id === 'SIP' ? <><p>The formula for SIP return calculation is based on the formula for future value of annuity-due.</p>
                                <p>FV = P × ((1 + i)^n - 1) / i) × (1 + i)</p>

                                <p>Where,</p>
                                <p>FV = Future value</p>
                                <p>P = Amount invested at the start of every payment interval</p>
                                <p>n = Number of payments</p>
                                <p>i = Periodic interest rate</p>
                                <p>r = Expected return rate in % per annum</p></> : id === 'PPF' ? <><p>Public Provident Fund (PPF) scheme is a long term investment option that offers an attractive rate of interest and returns on the amount invested. The interest earned and the returns are not taxable under Income Tax. One has to open a PPF account under this scheme and the amount deposited during a year will be claimed under section 80C deductions.</p>
                                    <p>
                                        Lock-in Period = 15 years(can be extended by 5 year period multiple time) </p>
                                    <p>Rate of Interest = 8% avg</p>
                                    <p>Maximum Amount = 1.5 Lakh per year</p></> : <>
                                    <p>The NPS is a good scheme for anyone who wants to plan for their retirement early on and has a low-risk appetite. A regular pension (income) in your retirement years will no doubt be a boon, especially for those individuals who retire from private-sector jobs. A systematic investment like this can make a massive difference to your life post-retirement. In fact, Salaried people who want to make the most of the 80C deductions can also consider this scheme. </p>
                                    <p>
                                    You can claim any additional self contribution (up to Rs 50,000) under section 80CCD(1B) as NPS tax benefit. The scheme, therefore, allows a tax deduction of up to Rs 2 lakh in total.
                                    </p>
                                    <p>
                                        Lock-in Period = till 60 years age </p>
                                    <p>Rate of Interest = 10% avg</p>
                                    <p>Maximum Amount = 2 Lakh per year</p>
                                    </>}


                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col className='formContainer' sm={6}>
                            <Form className='mb-3'>
                                <Form.Group >
                                    <Form.Label>{id === 'SIP' ? 'Monthly Investment' : id === 'PPF' ? 'Yearly Contribution(Max - 1.5 Lakh)' : 'Yearly Contribution(Max - 2 Lakh)'}</Form.Label>
                                    <Form.Control type="text"
                                        onChange={calculate}
                                        name="monthlyInvestment" placeholder={id === 'SIP' ? "Monthly Investment" : id === 'PPF' || id === 'NPS' ? 'Yearly Contribution' : null}
                                        value={monthlyInvestment} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Expected ROI</Form.Label>
                                    <Form.Control type="text" name='roi'
                                        onChange={calculate} placeholder="Enter Expected ROI" value={id === 'SIP' ? roi : id === 'PPF' ? 8 : id === 'NPS' ? 10 : null}
                                        disabled={id === 'SIP' ? false : true} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>{id === 'SIP' ? 'Time in Years' : id === 'PPF' ? 'Time in Years- min 15 years + 5n' : id === 'NPS' ? 'Enter your age-above 18 & below 60 only' : null}</Form.Label>
                                    <Form.Control type="text" name='time'
                                        onChange={calculate} placeholder={id==='NPS'?'Enter your age':"Enter Time in years"} value={time} />

                                </Form.Group>
                                <Button onClick={calculateButton} variant="primary">
                                    Calculate
  </Button>
                            </Form>
                            <p>Sample calculation for a {id} of <b>{id==='SIP'?5000:150000}</b> per {id==='SIP'?'month':'year'} for <b>{id==='PPF'?15:id==='NPS'?25:5} years</b> at <b>{id==='PPF'?'8%':'10%'}</b> per year.</p>
                            <p>Total Investment: <b>{id==='SIP'?300000:5250000}</b> </p><p>Amount at the end of the tenure: <b>{id==='SIP'?390411.91:id==='NPS'?44719020.80:4398642.46}</b></p>
                            {id==='NPS'?<><p>Amount paid to subscriber at maturity=<b>26831412.48</b></p>
                            <p>Annuity(paid to insurance company)=<b>17887608.32</b></p>
                            <p>Monthly Pension=<b>89438.04</b></p></>:null}
                        </Col>

                        {showCol ?
                            <Col className='mx-3'>
                                <Row className='cardEstimation mt-1'>
                                    <p>A {id} of <b> {monthlyInvestment} </b>per {id === 'SIP' ? 'month' : 'year'} for <b>{id === 'NPS' ? 60 - time : time} </b>years at <b>{roi}% </b>per year :</p>
                                    <p>Total Investment = Rs. <b>{id === 'SIP' ? monthlyInvestment * time * 12 : id === 'NPS' ? monthlyInvestment * (60 - time) : monthlyInvestment * time} </b></p>
                                    <p>Maturity Amount = Rs. <b>{maturityAmount}</b></p>
                                    <p>Interest Earned = Rs. <b>{interest}</b></p>
                                    {id==='NPS'?<><p>Amount Paid at maturity=<b>{(maturityAmount*0.6).toFixed(2)}</b></p>
                        <p>Annuity=<b>{(maturityAmount*0.4).toFixed(2)}</b></p>
                        <p>Monthly pension =<b>{pension}</b></p></>:null}
                                </Row>
                                <Row>
                                    <Col className='mx-auto'>
                                        <PieChart interest={interest} totalInvestment={id === 'SIP' ? monthlyInvestment * time * 12 : id === 'NPS' ? monthlyInvestment * (60 - time) : monthlyInvestment * time}></PieChart>
                                    </Col></Row>
                                    {id==='NPS'?<Row className='mx-auto'>    
                                    <PieChart id='NPS' interest={maturityAmount*0.4} totalInvestment={maturityAmount*0.6}></PieChart>        
                                        </Row>:null
                        }
                                        </Col> : null}

                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default withRouter(Calculator)
