import React from 'react'
import frame1 from '../../assets/frame1.svg'
import frame2 from '../../assets/frame2.svg'
import frame4 from '../../assets/frame4.svg'
import frame5 from '../../assets/frame5.svg'
import frame6 from '../../assets/frame6.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/landing.scss'

export default function Landing() {
    const [signUp, setSignUp] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [question, setQuestion] = React.useState('')

    return (
        <Container>
            <img className="frame4-move" src={frame4} alt="Frame4" />
            <img className="frame4-move2" src={frame4} alt="Frame4" />
            <img className="frame4-move3" src={frame4} alt="Frame4" />
            <Row>
                <Col md={6}>
                    <div className='top-text'>
                        <h1 className='text-h1'>Help make the world a safer place with Safety Net</h1>
                        <input
                        name="signUp"
                        placeholder="Email Address"
                        value={signUp}
                        onChange={e=> setSignUp(e.target.value)}
                        required
                        />
                        <button className='sign-up'>Sign up</button>
                    </div>
                </Col>
                <Col md={2}>
                </Col>
                <Col md={4}>
                    <img className="frame1" src={frame1} alt="Frame1" />
                </Col>
            </Row>
            <Row>
                <br/>
                <div className='how-it-works'>
                    <h1 className='text-h1'>How it works</h1>
                    <hr/>
                </div>
                <Col md={6}>
                    <img className="frame2" src={frame2} alt="Frame2" />
                </Col>
                <Col md={6}>
                    <p className='text-p'>
                        If you ever come into a situation where you need immediate help from people around you but you can't reach them by yelling?
                        Safety Net is an app that alerts everyone in a 200m radius around you. It will show them your exact location and a description
                        of you so you can get the immediate help you need. <span style={{color:'red'}}>(This isn't a replacement for 911)</span>
                    </p>
                    <br/>
                </Col>
            </Row>
            <Row>
                <div className='about-us'>
                    <h1 className='text-h1'>About Us</h1>
                    <p className='our-story'>OUR STORY</p>
                    <p className='text-p'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam placerat dolor odio, ut posuere felis egestas bibendum.
                    Suspendisse sit amet purus aliquet, semper felis ut, ullamcorper 
                    massa. Etiam a suscipit nisl, eu imperdiet nulla. Etiam gravida metus
                    eu cursus dignissim. Nulla et sagittis ante. Fusce in justo consequat 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam placerat dolor odio, ut posuere felis egestas bibendum.
                    Suspendisse sit amet purus aliquet, semper felis ut, ullamcorper 
                    massa. Etiam a suscipit nisl, eu imperdiet nulla. Etiam gravida metus
                    eu cursus dignissim. Nulla et sagittis ante. Fusce in justo consequat 
                    </p>
                    <img className="frame5" src={frame5} alt="Frame5" />
                </div>
            </Row>
            <Row>
                <br/>
                <div className='questions'>
                    <h1 className='text-h1'>HAVE ANY QUESTIONS?</h1>
                </div>
                <Col md={6}>
                    <input
                    name="name"
                    placeholder="NAME"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    required
                    />
                    <input
                    name="email"
                    placeholder="EMAIL"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    required
                    />
                    <textarea
                    name="question"
                    placeholder="QUESTIONS"
                    value={question}
                    onChange={e=> setQuestion(e.target.value)}
                    required
                    />
                    <br/>
                    <button className='send-message'>SEND MESSAGE</button>
                </Col>
                <Col md={6}>
                    <img className="frame6" src={frame6} alt="Frame6" />
                </Col>
            </Row>
        </Container>
    )
}
