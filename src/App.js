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
    render() {
        return (
            <div className="info">
                <Accordion defaultActiveKey="0">
                    <Card className="titleCards">
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
                    <Card className="infoCards">
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
        );
    }
}

class Header extends React.Component {

    render() {
        return (
            <Navbar className="header" expand="lg" sticky="top">
                <Navbar.Brand href="/">
                    <img className="owlImage" id="owlImage" src={owlImage} alt="InfernOwl"/>
                </Navbar.Brand>
                <Navbar.Brand href="/">
                    <div className="nameText text">InfernOwl</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navClass">
                        <Nav.Link href="https://twitch.tv/infernowl" title="Twitch" alt="Twitch" target = "_blank" rel = "noopener noreferrer" className="linkNav"><img className="icon" src={twitchIcon} alt="Twitch"></img><p className="mobileNav">Twitch</p></Nav.Link>
                        <Nav.Link href="https://twitter.com/theinfernowl" title="Twitter" alt="Twitter" target = "_blank" rel = "noopener noreferrer" className="linkNav"><img className="icon" src={twitterIcon} alt="Twitter"></img><p className="mobileNav">Twitter</p></Nav.Link>
                        <Nav.Link href="https://discord.gg/zzezK2v" title="Discord" alt="Discord" target = "_blank" rel = "noopener noreferrer" className="linkNav"><img className="icon" src={discordIcon} alt="Discord"></img><p className="mobileNav">Discord</p></Nav.Link>
                        <Nav.Link href="mailto:infernowltwitch@gmail.com" title="Email" alt="Email" target = "_blank" rel = "noopener noreferrer" className="linkNav"><img className="icon" src={emailIcon} alt="Email"></img><p className="mobileNav">Email</p></Nav.Link>
                        <Nav.Link href="https://github.com/InfernOwl" title="Github" alt="Github" target = "_blank" rel = "noopener noreferrer" className="linkNav"><img className="icon" src={githubIcon} alt="Github"></img><p className="mobileNav">Github</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <div className="modeToggle" onClick={this.props.clickHandler}>
                    <img className="bulb lightIcon" id="bulb" src={this.props.bulbImage} alt="light bulb" />
                </div>
                
            </Navbar>
        );
    }
}

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        console.log("This is a test");
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

    render() {
        return (
            <div className={this.state.contentWrapper} onLoad={(e) => this.modeSet()} >
                <Header bulbImage={this.state.bulbImage} clickHandler={() => this.modeChange()}></Header>
                <Content></Content>
            </div>
        );
    }
}

function App() {
    return ( 
        <div className="App" >
            <header className="App-header" >
                <Wrapper></Wrapper>
            </header >
            
        </div>
    );
}

export default App;