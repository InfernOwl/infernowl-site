import React from 'react';
import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function Stream() {
    return (
        <div className="stream-wrapper">
            <div id="twitch-embed" className="twitch-embed"></div>
        </div>
    );
}

function Content() {
    return (
        <div className="content-wrapper">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">InfernOwl</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="Links">
                        <Nav.Link href="https://twitch.tv/infernowl">Twitch</Nav.Link>
                        <Nav.Link href="https://twitter.com/theinfernowl">Twitter</Nav.Link>
                        <Nav.Link href="https://discord.gg/zzezK2v">Discord</Nav.Link>
                        <Nav.Link href="mailto:infernowltwitch@gmail.com">Email</Nav.Link>
                        <Nav.Link href="https://github.com/InfernOwl">Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="lower-wrapper">
                <div className="twitter-feed">
                    <a className="twitter-timeline" data-width="30vw" data-height="100%" data-theme="dark" href="https://twitter.com/TheInfernOwl?ref_src=twsrc%5Etfw">TheInfernOwl</a>
                </div>
                    
                <div className="info">
                <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        About Me
      </Accordion.Toggle>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Stream Schedule
      </Accordion.Toggle>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Twitch
      </Accordion.Toggle>
    </Card.Header>
    
  </Card>
  <Card>
    
    
    <Accordion.Collapse eventKey="0">
        <Card.Body>
            <div className="about-me-wrapper">
                <p>Hi! My name's InfernOwl, but I go by Owl for short.</p>
                <p>I'm a creative variety streamer on Twitch who's known to get into casual playthroughs, competitive games, and speedrunning.</p>
                <p>In my free time I like to cook, code, and play music.</p>
            </div>
        </Card.Body>
    </Accordion.Collapse>
    <Accordion.Collapse eventKey="1">
        <Card.Body>
            <div className="schedule-wrapper">
                <p>This is where my schedule would go</p>
            </div>
        </Card.Body>
    </Accordion.Collapse>
    <Accordion.Collapse eventKey="2">
        <Card.Body>
            <Stream></Stream>
        </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
                    
                </div>
            </div>
        </div>
    );
}

function App() {
    return ( 
        <div className="App" >
            <header className="App-header" >
                <Content></Content>
            </header >
            
        </div>
    );
}

/*<img src={logo}
                    className="App-logo"
                    alt="logo" />
                <p>Edit <code > src / App.js </code> and save to reload. </p> 
                <a className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer" >
                            Learn React 
                </a > 
                <Carousel>
                        <Carousel.Item>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <p></p>
                        </Carousel.Item>
                    </Carousel>
                */
export default App;