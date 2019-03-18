import React, { Component } from "react";
import Typist from 'react-typist';
import './Home.css';
import 'react-typist/dist/Typist.css';
import NavBar from "./NavBar"
import LoadingOrderAnimation from 'react-loading-order-with-animation';
import Scrolldown from '../assets/scrolldown.png'
import Testimg from '../assets/background.jpg';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style : 'overbg',
      visibl : 'hidden',
    };console.log(this.state);}
    
    
    
    componentDidMount() {
      setTimeout(() => {
        this.setState({style: 'overbgnoon'});
      }, 3300)
      setTimeout(() => {
        this.setState({visibl: 'overbgnoon'});
      }, 3300)



    }

    componentWillUnmount() {
      // Clear the interval right before component unmount
      this.setState({ style: 'overnone' });
  }

  render() {
    return (
      <div className="Home">

        <LoadingOrderAnimation animation="fade-in" move="from-top-to-bottom" distance={30} speed={1000} wait={3550}>
        <div className={this.state.visibl}>
        <NavBar />
        </div>
        </LoadingOrderAnimation>
        <div className="headerbg">

        <div id="gradient-overlay" className={this.state.style}></div>


        <div className="preText">
        <div className="row customrow">
        <div className="col">
        <Typist cursor={{  blink: true, element: '_', }} className="preTextH1">We craft digital products and services.</Typist>
        <LoadingOrderAnimation animation="fade-in" move="from-bottom-to-top" distance={30} speed={1000} wait={3600}>
        <span className={this.state.style}><p>We combine the latest technologies with functional design to ship innovative digital experiences.<br></br>
        We have a track record of building successful web and mobile applications.</p></span>
        </LoadingOrderAnimation>
        </div>
        </div>
        <div className="row customrow">
        <div id="blinkdown" className={this.state.visibl}>
        <LoadingOrderAnimation animation="fade-in" move="from-bottom-to-top" distance={30} speed={1000} wait={7600}>
        <img src={Scrolldown} alt="scrolldown"/>
        </LoadingOrderAnimation>
        </div>
        </div>
        </div>
        
        
        </div>
        <div className="presentation bgw">

        <div className="row text-center">
        <div className="col"></div>
        <div className="col text-center">
        <h1>Our Presentations</h1></div>
        <div className="col"></div>
        </div>
        <div className="row">
        <div className="col"></div>
        <div className="col"><img src={Testimg} alt="Test"/></div>
        <div className="col"></div>
        
        </div>

        </div>



      </div>
    );
  }
}