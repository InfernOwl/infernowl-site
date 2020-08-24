import React from 'react';
import owlImage from './assets/Owl_Image.png';
import twitchIcon from './assets/iconmonstr-twitch-4.svg';
import twitterIcon from './assets/iconmonstr-twitter-4.svg';
import discordIcon from './assets/iconmonstr-discord-4.svg';
import emailIcon from './assets/iconmonstr-email-10.svg';
import githubIcon from './assets/iconmonstr-github-4.svg';
import offBulbIcon from './assets/iconmonstr-light-bulb-2.svg';
import onBulbIcon from './assets/iconmonstr-light-bulb-18.svg';
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

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "infernowltwitch@gmail.com",
            i: false,
            palette: false, // Controls light and dark mode palettes. light=false, dark=true (As it should be).
            contentWrapper: 'content-wrapper',
            bulbImage: offBulbIcon
        }
    }

    // Saves palette selection to localStorage to save for future site visits
    modeStorage() {
        if (this.state.palette) {
            localStorage.setItem('mode', 'dark');
        }  else {
            localStorage.setItem('mode', 'light');
        }
    }

    // Toggles light and dark mode palettes when called.
    modeChange(e) {
        //
        if (this.state.palette) {
            this.setState({contentWrapper: 'content-wrapper darkMode', bulbImage: offBulbIcon});
            
        } else {
            this.setState({contentWrapper: 'content-wrapper lightMode', bulbImage: onBulbIcon});
        }
        
        this.setState({palette: !this.state.palette});
        this.modeStorage();
    }

    // Sets palette onLoad if there is light or dark mode palette data in localStorage
    modeSet() {
        console.log(this);
        if (localStorage.getItem('mode') != null) {
            switch (localStorage.getItem('mode')) {
                case 'light':
                    this.setState({contentWrapper: 'content-wrapper lightMode', bulbImage: onBulbIcon});
                    break;
                case 'dark':
                    this.setState({contentWrapper: 'content-wrapper darkMode', bulbImage: offBulbIcon});
                    break;
                default:
                    // Defaults to dark mode
                    this.setState({contentWrapper: 'content-wrapper darkMode', bulbImage: offBulbIcon});
                    break;
            }
        } else {
            // Defaults to dark mode
            this.setState({contentWrapper: 'content-wrapper darkMode', bulbImage: offBulbIcon});
        }
    }
    
    expandMenu() {
        if (!this.state.i) {
            //Pass element to be transformed and start transformation
            document.getElementById("radialMenu").style.transform='translate(-50%, -50%) scale(1)';
            this.setState({i: true});

            //Remove the Pulse animation for owlImage
            document.getElementById('owlImage').style.animation='none';
        } else if (this.state.i) {
            //reverse transformation
            document.getElementById("radialMenu").style.transform='translate(-50%, -50%) scale(0)';
            this.setState({i: false});

            //Add back animation for owlImage
            document.getElementById('owlImage').style.animation='pulse-black 2s infinite';
        }
    }

    render() {
        return (
            <div className={this.state.contentWrapper} onLoad={(e) => this.modeSet()}>
                <div className="logoWipe">
                    
                    <img className="owlImage" id="owlImage" src={owlImage} alt="InfernOwl" onClick={(e) => this.expandMenu(e)}/>
                    <div className="radialMenu" id="radialMenu">
                        <a href="https://twitch.tv/infernowl" title="Twitch" alt="Twitch" target = "_blank" 
    rel = "noopener noreferrer"><img className="icon" src={twitchIcon} alt="Twitch"></img></a>
                        <a href="https://twitter.com/theinfernowl" title="Twitter" alt="Twitter" target = "_blank" 
    rel = "noopener noreferrer"><img className="icon" src={twitterIcon} alt="Twitter"></img></a>
                        <a href="https://discord.gg/zzezK2v" title="Discord" alt="Discord" target = "_blank" 
    rel = "noopener noreferrer"><img className="icon" src={discordIcon} alt="Discord"></img></a>
                        <a href={"mailto:" + this.state.email} title="Email" alt="Email" 
    rel = "noopener noreferrer"><img className="icon" src={emailIcon} alt="Email"></img></a>
                        <a href="https://github.com/InfernOwl" title="Github" alt="Github" target = "_blank" 
    rel = "noopener noreferrer"><img className="icon" src={githubIcon} alt="Github"></img></a>
                    </div>

                    <div className="nameText text">InfernOwl</div>
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
                                    <div className="about-me-wrapper text">
                                        <p>Hi! My name's InfernOwl!</p>
                                        <p>I'm a creative variety streamer on Twitch who's known to get into casual playthroughs, competitive games, and speedrunning.</p>
                                        <p>In my free time I like to cook, code, and play music.</p>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <div className="schedule-wrapper text">
                                        <p>Stream Schedule TBA</p>
                                        <p>Stay Tuned!</p> 
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
                
                <div className="modeToggle">
                    <img className="bulb lightIcon" id="bulb" src={this.state.bulbImage} alt="light bulb" onClick={() => this.modeChange()} />
                </div>
            </div>   


            
        );
    }
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
            </div>
                */
export default App;